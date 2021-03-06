import { useState, useEffect } from 'react';
import lscache from 'lscache';

lscache.setBucket('m-combinator');

const { apikey } = import.meta.env;

const apiBase = 'https://gateway.marvel.com/v1/public/';
const apiRowsLimit = 100;

// Fetch all of the pages for a given request
const apiRequest = async (path, params) => {
  const paramArr = [`apikey=${apikey}`, `limit=${apiRowsLimit}`];

  if (params) {
    Object.entries(params).forEach(([k, v]) => paramArr.push(`${k}=${v}`));
  }

  const data = [];
  let error = null;

  let curOffset = 0;
  let total;

  do {
    // eslint-disable-next-line no-await-in-loop
    const json = await fetch(
      `${apiBase}${path}?offset=${curOffset}&${paramArr.join('&')}`,
      {
        headers: {
          'Accept-Encoding': 'gzip',
        },
      },
    )
      .then((res) => res.json())
      // eslint-disable-next-line no-loop-func
      .catch((e) => { error = e; });

    if (json) {
      if (!total) {
        total = json.data.total;
      }

      data.push(...json.data.results);
    }

    curOffset += apiRowsLimit;
  } while (!error && data.length < total);

  return [data, error];
};

const awaiting = {};

const fetchWithLocalStorage = async (path, params) => {
  const requestKey = `${path}-${JSON.stringify(params)}`;

  if (awaiting[requestKey]) {
    return awaiting[requestKey];
  }

  /*
    Marvel's API is pretty slow, even just to return a 304, and gets worse
    with paginated content. Their docs say it's alright to cache responses
    for up to 24 hours.
  */
  let result = lscache.get(requestKey);

  if (!result) {
    awaiting[requestKey] = apiRequest(path, params);
    result = await awaiting[requestKey]
      // eslint-disable-next-line no-console
      .catch((err) => console.error(err));

    awaiting[requestKey] = null;

    if (result) {
      lscache.set(requestKey, result, 60 * 60 * 24);
    }
  }

  return result;
};

const useFetchCallback = (cb, ...params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResult = async () => {
      setError(null);
      setLoading(true);

      const [apiData, apiError] = await cb(...params);

      if (apiData) {
        setData(apiData);
      }

      if (apiError) {
        setError(apiError);
      }

      setLoading(false);
    };

    return getResult();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cb, ...params]);

  return { data, loading, error };
};

export const useMarvelApi = (path, params) => useFetchCallback(fetchWithLocalStorage, path, params);

const intersectionOfEventLists = (eventLists) => {
  const counts = {};
  eventLists.forEach(([events]) => events.forEach((event) => {
    if (!counts[event.id]) {
      counts[event.id] = { event, count: 0 };
    }

    counts[event.id].count += 1;
  }));

  return Object.values(counts)
    .filter(({ count }) => count === eventLists.length)
    .map(({ event }) => event);
};

// TODO: Error handling
/*
  Get all selected characters' events and return events in which they all appear
*/
const fetchCharacterEvents = async (characters) => {
  const allEvents = await Promise.all(
    characters.map((id) => fetchWithLocalStorage(`characters/${id}/events`)),
  );

  /*
    Returning as an array for consistency with [data, error], just so the hook
    doesn't need to be changed.
  */
  return [
    intersectionOfEventLists(allEvents),
  ];
};

const emptyArray = [];

// TODO: Error handling
export const useCharacterEvents = (characters = emptyArray) => (
  useFetchCallback(fetchCharacterEvents, characters)
);
