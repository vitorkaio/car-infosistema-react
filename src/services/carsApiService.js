import axios from 'axios';

// const url = 'https://salty-temple-69277.herokuapp.com/cars'
const url = 'http://localhost:4005/cars'

export const getCars = async () => {
  const res = await axios.get(url);
  if (res) {
    return res.data;
  }
  else return null;
}
