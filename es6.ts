// Tはよくわからん
const addId = <T>(obj: T) => {
  const id = Math.random().toString(16);
  return {
    ...obj,
    id,
  };
};

interface UserInterface4 {
  name: string;
  // data: T;
}

const user4: UserInterface4 = {
  name: 'Jack',
};

const result = addId<UserInterface4>(user4);
console.log('result', result);
