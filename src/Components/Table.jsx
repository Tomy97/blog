import React, { useState } from 'react'
import useFetch from '../Hooks/useFetch'
import { Toast } from '../alerts'
import Swal from 'sweetalert2'
import { Table } from 'react-bootstrap'
const TableComponent = (props) => {
    const { state, setStatus } = useFetch()
    const [valid, setValid] = useState(false)


    const trash = {
        color: "#F00000",
    };

    const editIcon = {
        color: "#00459C",
    };

    const onRemove = (selectedPost) => {
        const data = state.data.filter((post) => post.id !== selectedPost.id);
        let newState = { ...state };
        newState.data = data;
        setStatus(newState);
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
            const changeData = JSON.stringify(formValues);
            Toast.fire({
                icon: "success",
                title: `El dato seleccionado se actualizo correctamente`,
                allowOutsideClick: true,
            });
            console.log(changeData);
        }
        console.log(formValues);
        console.log(props);
    };

    const fireDetails = (detailsPost) => {
        Swal.fire({
            title: "Detalles",
            text: detailsPost.body,
            allowOutsideClick: true,
        });
    };
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
                    {state.data.map((props) => (
                        <tr key={props.id}>
                            <td value={props.title}
                                onChange={props.handleChange} >{props.id}</td>
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
                    ))}
                </tbody>
            </Table>
        </>
    )
}

export default TableComponent
