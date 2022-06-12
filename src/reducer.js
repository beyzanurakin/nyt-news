import { SET_LOADING, SET_NEWS, SET_FILTER, SET_ALL } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };
    case SET_NEWS:
      return {
        ...state,
        isLoading: false,
        news: action.payload.news,
        articles: action.payload.news,
        buttons: [
          "all",
          ...new Set(action.payload.news.map((item) => item.section)),
        ],
      };
    case SET_FILTER:
      const newItems = state.news.filter(
        (item) => item.section === action.payload.filter
      );
      return {
        ...state,
        isLoading: false,
        articles: newItems,
      };
    case SET_ALL:
      return { ...state, isLoading: false, articles: [...state.news] };

    default:
      throw new Error(`no matching "${action.type}" action type`);
  }
};
export default reducer;
