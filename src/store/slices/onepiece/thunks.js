import { startLoadingCrews, setAllData } from './onepieceSlice';

const API_URL = import.meta.env.VITE_REACT_APP_API_URL;
const ALL_CREWS_ENDPOINT = '/api/crews/';
const APIKEY = import.meta.env.VITE_REACT_APP_API_KEY;

function extractMembers(crews) {
  return crews.reduce((acc, current) => {
    if (current.members && Array.isArray(current.members)) {
      acc = [...acc, ...current.members];
    }
    return acc;
  }, []);
}

export const getAllCrews = () => {
  const API_ENDPOINT = API_URL + ALL_CREWS_ENDPOINT;
  return async (dispatch, getState) => {
    dispatch(startLoadingCrews());

    fetch(API_ENDPOINT, {
      headers: {
        'x-api-key': APIKEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then(({ east_blue_pirate_crews }) => {
        const crews = east_blue_pirate_crews.map((crew) => crew.name);
        const members = extractMembers(east_blue_pirate_crews);
        dispatch(setAllData({ members, crews }));
      })
      .catch((error) => {
        // Handle the error
        console.error('Error:', error);
      });
  };
};
