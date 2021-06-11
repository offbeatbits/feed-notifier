export const cache = {
  get: (name: string) => {
    console.log(`getting cached value for ${name}...`); // eslint-disable-line
    return 'bar';
  },
  set: (name: string, value: string | object) => {
    console.log(name); // eslint-disable-line
    console.log(value); // eslint-disable-line
    console.log(`setting value for ${name} to ${value.toString()}...`); // eslint-disable-line
    return true;
  },
  delete: (name: string) => {
    console.log(`deleting value for ${name}...`); // eslint-disable-line
    return true;
  },
};
