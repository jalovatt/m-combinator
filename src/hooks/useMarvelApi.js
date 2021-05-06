import { useState, useEffect } from 'react';

const { apikey } = import.meta.env;

const apiBase = 'https://gateway.marvel.com/v1/public/';
const apiRowsLimit = 100;

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

export default (path, params) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getResult = async () => {
      setLoading(true);

      const [apiData, apiError] = await apiRequest(path, params);

      if (apiData) {
        setData(apiData);
      }

      if (apiError) {
        setError(apiError);
      }

      setLoading(false);
    };

    return getResult();
  }, [path, params]);

  return { data, loading, error };
};