export const delete_post = "delete_post";
export const add_post = "add_post";
export const edit_post = "edit_post";

export const delete_post_action = (id) => {
  return {
    type: delete_post,
    payload: id,
  };
};

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
