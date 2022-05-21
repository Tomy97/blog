import { delete_post, add_post, edit_post, get_posts } from "../actions/postActions";

const initialState = {
  posts: [],
};

const blog_posts = (state = initialState, action) => {
  switch (action.type) {
    case get_posts: {
      return {
        ...state,
        posts: action.payload,
      };
    }
    case delete_post: {
      return {
        ...state,
        posts: [
          state.posts.flat().filter((item) => item.id !== action.payload),
        ],
      };
    }
    case add_post: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }
    case edit_post: {
      let postState = state.posts.flat();
      const postIndex = postState.findIndex(
        (item) => item.id === action.payload.id
      );
      postState[postIndex] = action.payload;

      return {
        ...state,
        posts: [...postState],
      };
    }
    default:
      return state;
  }
};

export default blog_posts;
