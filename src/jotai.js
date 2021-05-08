import { atom, useAtom } from 'jotai';

const findDataKeyInEventTree = (el, key) => {
  let cur = el;

  while (cur && !cur.dataset[key]) {
    cur = cur.parentElement;
  }

  return cur?.dataset[key];
};

const selectedCharacters = atom([], (get, set, e) => {
  const cur = get(selectedCharacters);

  /*
    Since dataset.id is on the component's wrapper, we may need to walk up to it
    from a child element.
  */
  const value = findDataKeyInEventTree(e.target, 'id');

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
