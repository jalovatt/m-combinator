import React from 'react';
import useApiRequest from './hooks/useMarvelApi';

const APIResult = () => {
  const { data, loading, error } = useApiRequest('events');

  if (loading) {
    return (
      <h3>Loading...</h3>
    );
  }

  return (
    <>
      {error ? <pre>{JSON.stringify(error, null, 2)}</pre> : null}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : null}
    </>
  );
};

export default () => (
  <>
    <h1>This is my project</h1>
    <APIResult />
  </>
);
