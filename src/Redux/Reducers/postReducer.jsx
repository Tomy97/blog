const get_posts = "get_posts";

const initialState = {
  posts: []
}


export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case get_posts:
      return {
        ...state,
        posts: action.payload
      }
    default:
      return state
  }
}