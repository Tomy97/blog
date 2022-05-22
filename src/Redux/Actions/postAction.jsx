import axios from "axios";

export const delete_post = "delete_post";
export const add_post = "add_post";
export const edit_post = "edit_post";
export const get_posts = "get_posts";

export const delete_post_action = (id) => async dispatch => {
  const res = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
  dispatch({
    type: delete_post,
    payload: res.data,
  });
};

export const get_post_action = () => async dispatch => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_page=1&_limit=10')
  dispatch({
    type: get_posts,
    payload: data,
  })
}

export const add_post_action = (data) => {
  return {
    type: add_post,
    payload: data,
  };
};

export const edit_post_action = (data) => {
  return {
    type: edit_post,
    payload: data,
  };
};
