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


export const createCar = async (newCar) => {
  try {
    const res = await axios.post(url, newCar)
    console.log(res)
    if (res) {
      return res.data
    }
    else return null;
  } 
  catch (err) {
    // console.log(err.response.data.data)
    return err.response.data;
  }
}
