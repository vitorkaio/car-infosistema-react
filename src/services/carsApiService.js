import axios from 'axios';

const url = 'https://salty-temple-69277.herokuapp.com/cars'
// const url = 'http://localhost:4005/cars'

export const getCars = async () => {
  const res = await axios.get(url);
  if (res) {
    return res.data;
  }
  else return null;
}

// ***************************** CREATE CAR *****************************

export const createCar = async (newCar) => {
  try {
    const res = await axios.post(url, newCar)
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


// ***************************** DELETE CAR *****************************

export const deleteCar = async (id) => {
  try {
    const res = await axios.delete(`${url}/${id}`)
    if (res) {
      return res.data
    }
    else return null;
  } 
  catch (err) {
    return err.response.data;
  }
}


// ***************************** Update CAR *****************************

export const updateCar = async (newCar, id) => {
  delete newCar.id
  try {
    const res = await axios.patch(`${url}/${id}`, newCar)
    if (res) {
      return res.data
    }
    else return null;
  } 
  catch (err) {
    return err.response.data;
  }
}