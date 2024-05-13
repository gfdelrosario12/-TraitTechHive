  // reducers.js
  const initialState = {
    name: "Gladwin Del Rosario",
    imageUrl: "https://avatars.githubusercontent.com/u/63576502?v=4"
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_PROFILE':
        return {
          ...state,
          name: action.payload.name,
          imageUrl: action.payload.imageUrl
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;