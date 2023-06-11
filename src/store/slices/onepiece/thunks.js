import { startLoadingCrews, setCrews } from './onepieceSlice';

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
      .then(({east_blue_pirate_crews}) => {
        const crews = east_blue_pirate_crews.map((crew) => crew.name);
        const members = extractMembers(east_blue_pirate_crews);
        console.log('crews',crews);
        console.log('members',members);
        dispatch(setCrews({ members, crews }));
      });
  };
};
