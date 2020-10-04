export const resolveList = (actionKey, apiCall, dispatch) => {
    return apiCall()
        .then(resp => resp.data)
        .then(items => {
          return dispatch({
            type: actionKey,
            payload: items
          });
      });
};
  
export const resolveSingle = (actionKey, apiCall, item, dispatch) => {
    return apiCall(item)
        .then(resp => resp.data)
        .then(item => {
          return dispatch({
            type: actionKey,
            payload: item
          });
      });
};