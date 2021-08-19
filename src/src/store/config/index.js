// state
const initialState = {
  test: "I am a test",
  product: {},
  me: {},
};

// async function
// export const setProducts = (params) => {
//     return async (dispatch) => {
//         const { data } = await getProductsByCategory(params);
//         dispatch({
//             type: SET_PRODUCTS,
//             payload: data,
//         });
//     };
// };

//actions
//sync function
export const setConfig = (payload) => {
  return {
    type: SET_CONFIG,
    payload,
  };
};

// types
export const SET_CONFIG = "SET_CONFIG";

// reducer
export default function configReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONFIG:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
