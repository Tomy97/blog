import React, { useEffect, useState } from 'react'
import { Toast } from '../Hooks/useAlerts'
import Swal from 'sweetalert2'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { get_post_action } from '../Redux/Actions/postAction'

const TableComponent = (props) => {
    const posts = useSelector((state) => state.posts.posts)
    const dispatch = useDispatch()
    const [setValid] = useState(false)

    useEffect(() => {
        dispatch(get_post_action())
    }, [dispatch])

    const trash = {
        color: "#F00000",
    };
    const editIcon = {
        color: "#00459C",
    };

    const onRemove = (selectedPost) => {
        const data = posts.filter((post) => post.id !== selectedPost.id);
        let newState = { ...posts };
        newState.data = data;
        if (newState) {
            setValid(true);
            Toast.fire({
                icon: "success",
                title: `La data seleccionada se elimino correctamente`,
                allowOutsideClick: true,
            });
        }
    };
    const fireFormEdit = async (props) => {
        const { value: formValues } = await Swal.fire({
            title: "Editar formulario",
            html: `
            <label> Titulo </label>
            <textarea id="swal-input1" class="swal2-input" cols="40" rows="20"> ${props.title} </textarea>
            <label> Detalle </label>
            <textarea id="swal-input2" class="swal2-input" cols="40" rows="20"> ${props.body} </textarea>
            `,
            focusConfirm: false,
            showConfirmButton: true,
            backdrop: false,
            position: "center",
            confirmButtonText: "Guardar",
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value,
                ];
            },

        });
        if (formValues) {
            JSON.stringify(formValues);
            Toast.fire({
                icon: "success",
                title: `El dato seleccionado se actualizo correctamente`,
                allowOutsideClick: true,
            });
        }
    };

    const fireDetails = (detailsPost) => {
        Swal.fire({
            title: "Detalles",
            text: detailsPost.body,
            allowOutsideClick: true,
        });
    };

    if (posts.length === 0) {
        console.log('No hay datos');
    }
    return (
        <>
            <Table responsive hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                    </tr>
                </thead>
                <tbody>
                    {posts ? posts.map((props) => (
                        <tr key={props.id}>
                            <td value={props.title}
                                onChange={props.handleChange}>{props.id}</td>
                            <td value={props.body}
                                onChange={props.handleChange}>{props.title}</td>
                            <td>
                                <i
                                    className="fas fa-ellipsis-h d-flex justify-content-center"
                                    onClick={() => fireDetails(props)}
                                ></i>
                            </td>
                            <td>
                                <i
                                    className="far fa-edit d-flex justify-content-center"
                                    onClick={() => fireFormEdit(props)}
                                    style={editIcon}
                                ></i>
                            </td>
                            <td>
                                <i
                                    edge="end"
                                    className="fas fa-trash d-flex justify-content-center"
                                    onClick={() => onRemove(props)}
                                    style={trash}
                                ></i>
                            </td>
                        </tr>
                    )) : <h2>
                        No hay posts
                    </h2>}
                </tbody>
            </Table>
        </>
    )
}

export default TableComponent
