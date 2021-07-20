const SET_WINDOW_WIDTH = "set_window_width";
const TOGGLE_COLLAPSED_NAV = "toggle_collapsed_nav";
const SWITCH_LANGUAGE = "switch_language";
const SET_PATH_NAME = "set_path_name";

const SettingActions = {
  updateWindowWidth(width) {
    return { type: SET_WINDOW_WIDTH, payload: width };
  },
  toggleCollapsedSideNav(navCollapsed) {
    return { type: TOGGLE_COLLAPSED_NAV, payload: navCollapsed };
  },
  switchLanguage(locale) {
    return { type: SWITCH_LANGUAGE, payload: locale };
  },
  setPathname(path) {
    return { type: SET_PATH_NAME, payload: path };
  },
};

const initialState = {
  navCollapsed: false,
  pathname: "",
  width: 1367,
  locale: {
    languageId: "english",
    locale: "en",
    name: "English",
    icon: "us",
  },
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_WINDOW_WIDTH:
      return { ...state, width: action.payload };
    case TOGGLE_COLLAPSED_NAV:
      return { ...state, navCollapsed: action.payload };
    case SWITCH_LANGUAGE:
      return { ...state, locale: action.payload };
    case SET_PATH_NAME:
      return { ...state, pathname: action.payload };
    default:
      return state;
  }
}

function getSettingsModule() {
  return {
    id: "settings",
    reducerMap: { settings: reducer },
  };
}

export { SettingActions, getSettingsModule };
