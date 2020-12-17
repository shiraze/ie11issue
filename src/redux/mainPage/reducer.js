import * as actionTypes from "./actionTypes";

const initialState = {
  connection: null,
  query: "",
  entity: null,
  activeForm: null,
  links: null,
  waiting: "",
  error: null,
  validations: null,
  snackbar: null,
  ldapUpdated: null,
  searchDrawer: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONNECTION:
      return {
        ...state,
        connection: action.connection,
      };
    case actionTypes.SET_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case actionTypes.SET_ENTITY:
      return {
        ...state,
        entity: action.entity,
      };
    case actionTypes.SET_ACTIVEFORM:
      return {
        ...state,
        activeForm: action.form,
      };
    case actionTypes.SET_LINKS:
      return {
        ...state,
        links: action.links,
      };
    case actionTypes.LAUNCH_MCS:
      return {
        ...state,
        waiting: action.waiting,
      };
    case actionTypes.SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case actionTypes.SET_VALIDATIONS:
      return {
        ...state,
        validations: action.validations,
      };
    case actionTypes.SET_SNACKBAR:
      return {
        ...state,
        snackbar: action.snackbar,
      };
    case actionTypes.SET_LDAPUPDATED:
      return {
        ...state,
        ldapUpdated: action.ldapUpdated,
      };
    case actionTypes.SET_DRAWER_STATE:
      return {
        ...state,
        searchDrawer: action.drawerState,
      };

    default:
      return state;
  }
};

export default reducer;
