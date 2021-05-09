import { atom, useAtom } from 'jotai';

const selectedCharacters = atom([], (get, set, e) => {
  const cur = get(selectedCharacters);

  const value = e.currentTarget.dataset.id;

  if (!value) {
    throw new Error('Key \'id\' was not found on any elements in the event tree');
  }

  // IDs come back as a string from the DOM element's dataset
  const num = parseInt(value, 10);

  const index = cur.indexOf(num);

  const next = (index === -1)
    ? [...cur, num]
    : cur.slice(0, index).concat(cur.slice(index + 1));

  set(selectedCharacters, next);
});

// eslint-disable-next-line import/prefer-default-export
export const useSelectedCharacters = () => useAtom(selectedCharacters);
