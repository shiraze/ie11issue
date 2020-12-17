import * as actionTypes from "./actionTypes";

export function setConnection(connection) {
  return { type: actionTypes.SET_CONNECTION, connection };
}

export function setQuery(query) {
  return { type: actionTypes.SET_QUERY, query };
}

export function setEntity(entity) {
  return { type: actionTypes.SET_ENTITY, entity };
}

export function setError(error) {
  return function (dispatch, getState) {
    if (
      error &&
      error.invalidField &&
      error.message &&
      error.message.includes(`'${error.invalidField}'`)
    ) {
      const currentForm = getState().mainPage.activeForm?.form;
      if (currentForm) {
        const fields = getState().dataForm.forms[currentForm]?.fields;

        const label = fields?.find(f => f.jPath === error.invalidField)?.label;
        if (label) {
          error.message = error.message.replace(error.invalidField, label);
        }
      }
    }

    dispatch({ type: actionTypes.SET_ERROR, error });
  };
}

export function setValidations(validations) {
  return { type: actionTypes.SET_VALIDATIONS, validations };
}

export function setSnackbar(snackbar) {
  return { type: actionTypes.SET_SNACKBAR, snackbar };
}

export function setLdapUpdated(ldapUpdated) {
  return { type: actionTypes.SET_LDAPUPDATED, ldapUpdated };
}

export function setDrawerState(drawerState) {
  return { type: actionTypes.SET_DRAWER_STATE, drawerState };
}
