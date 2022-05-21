export const delete_post = "delete_post";
export const add_post = "add_post";
export const edit_post = "edit_post";
export const get_posts = "get_posts";

export const delete_post_action = (id) => {
  return {
    type: delete_post,
    payload: id,
  };
};

export const get_posts_action = () => {
  return {
    type: get_posts,
  };
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
