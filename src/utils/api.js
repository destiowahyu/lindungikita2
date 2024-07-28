import sheltersData from '../data/shelters';


export const fetchShelters = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(sheltersData); 
    }, 500); 
  });
};
