import axios from "axios";
import { Toast } from './../../Hooks/useAlerts';

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

export const edit_post_action = (data) => async dispatch => {
  Toast.fire({
    title: 'Editar post',
    text: data.title,
    input: 'text',
    inputAttributes: {
      autocapitalize: 'off',
      placeholder: 'Titulo del post',
    },
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: 'Confirmar',
    showLoaderOnConfirm: true,

    preConfirm: async (data) => {
      console.log(data);
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`)
      
      //   return fetch(`//api.github.com/users/${login}`)
      //     .then(response => {
      //       if (!response.ok) {
      //         throw new Error(response.statusText)
      //       }
      //       return response.json()
      //     })
      //     .catch(error => {
      //       Toast.showValidationMessage(
      //         `Request failed: ${error}`
      //       )
      //     })
    },

    allowOutsideClick: () => !Toast.isLoading()
  }).then((result) => {
    if (result.isConfirmed) {
      Toast.fire({
        title: `${result.value.login}'s avatar`,
        imageUrl: result.value.avatar_url
      })
    }
  })
  return {
    type: edit_post,
    payload: data,
  };
};
