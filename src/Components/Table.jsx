import React, { useEffect } from 'react'
import { Row, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { delete_post_action, get_post_action } from '../Redux/Actions/postAction'

const TableComponent = (props) => {
    const { posts } = useSelector((state) => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(get_post_action())
    }, [dispatch])

    // Agregar una funcion para editar un post que lo haga desde el estado 

    // Agregar una funcion para ver un post que lo haga desde el estado

    return (
        <Row className="py-5" >
            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className="text-center" >Id</th>
                        <th className="text-center" >Titulo</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {posts ? posts.map((props) => (
                        <tr key={props.id}>
                            <td value={props.title}
                                onChange={props.handleChange} className="text-center" >{props.id}</td>
                            <td value={props.body}
                                onChange={props.handleChange}>{props.title}</td>
                            <td>
                                <i
                                    className="fas fa-ellipsis-h d-flex justify-content-center"
                                    onClick={() => (props)}
                                ></i>
                            </td>
                            <td>
                                <i
                                    className="far fa-edit d-flex justify-content-center text-primary"
                                    onClick={() => (props)}
                                ></i>
                            </td>
                            <td>
                                <i
                                    className="fas fa-trash d-flex justify-content-center text-danger"
                                    onClick={() => dispatch(delete_post_action(props.id))}
                                ></i>
                            </td>
                        </tr>
                    )) : <h2>
                        No hay posts
                    </h2>}
                </tbody>
            </Table>
        </Row>
    )
}

export default TableComponent
