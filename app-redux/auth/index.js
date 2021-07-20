import Router from "next/router";

const AUTH_SET_USER = "auth_set_user";
const AUTH_SET_LOADING = "auth_set_loading";

const AuthActions = {
  setUser(user) {
    return { type: AUTH_SET_USER, payload: user };
  },
  setLoading(loading) {
    return { type: AUTH_SET_LOADING, payload: loading };
  },
  register({ username, role, email, password } = {}) {},
  login({ email, password } = {}) {},
  loginWithToken() {},
  logout() {
    return (dispatch) => {
      localStorage.removeItem("token");
      dispatch(AuthActions.setUser({}));
      Router.push("/signin");
    };
  },
};

const initialState = {
  user: {},
  loading: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SET_USER:
      return { ...state, user: action.payload };
    case AUTH_SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

function getAuthModule() {
  return {
    id: "auth",
    reducerMap: { auth: reducer },
  };
}

export { AuthActions, getAuthModule };
