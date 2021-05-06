import React, { useState, useEffect } from 'react';

const { apikey } = import.meta.env;

const apiBase = 'https://gateway.marvel.com/v1/public/';

const apiRequest = (path, params = {}) => {
  const paramArr = [`apikey=${apikey}`];

  Object.entries(params).forEach(([k, v]) => paramArr.push(`${k}=${v}`));

  return fetch(`${apiBase}${path}?${paramArr.join('&')}`)
    .then((res) => res.json()).then((data) => ({ data }))
    .catch((error) => ({ error }));
};

const APIResult = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    const getResult = async () => {
      setLoading(true);

      const apiResponse = await apiRequest('characters');

      setResult(apiResponse);
      setLoading(false);
    };

    return getResult();
  }, []);

  if (loading) {
    return (
      <h3>Loading...</h3>
    );
  }

  return (
    <pre>{JSON.stringify(result, null, 2)}</pre>
  );
};

export default () => (
  <>
    <h1>This is my project</h1>
    <APIResult />
  </>
);
