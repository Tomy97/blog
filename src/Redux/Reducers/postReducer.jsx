const get_posts = "get_posts";
const delete_posts = "delete_posts";

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
    case delete_posts:
      return {
        ...state,
        posts: [
          state.posts.flat().filter((item) => console.log('Esstoy en el reducer',item))
        ]
      }
    default:
      return state
  }
}