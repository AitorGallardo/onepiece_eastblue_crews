import { startLoadingCrews, setCrews } from './onePieceSlice';

const API_ENDPIONT = 'http://localhost:3000/api/crews/';
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
  return async ( dispatch, getState ) => {
    dispatch(startLoadingCrews());

    fetch(API_ENDPIONT, {
      headers: {
        'x-api-key': APIKEY,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const crews = data.map((crew) => crew.name);
        const members = extractMembers(data);
        dispatch(setCrews({ members, crews }));
      });
  };
};
