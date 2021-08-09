import React, { useEffect, useState } from 'react'
import { Card, Form, Row, Button } from 'react-bootstrap'
import { Toast } from "../../alerts";
const CreateForm = () => {
    const [title, setTitle] = useState('')
    const [contents, setContents] = useState('')
    const [alertMessage, setAlertMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('')
    const [, setValid] = useState(false)

    const validations = () => {
        if (!title && !contents) {
            setAlertMessage(' Los campos no pueden estar vacios ')
        } else if (!title) {
            setAlertMessage('El campo titulo no puede estar vacio.');
            return false;
        } else if (!contents) {
            setAlertMessage(`El campo 'contenido' no puede estar vacio.`);
            return false;
        } else {
            setSuccessMessage(' El formulario se creo exitosamente ')
        }
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        handleSubmit()
        validations()
    }

    const fireAlertMessage = () => {
        alertMessage.length &&
            Toast.fire({
                icon: 'error',
                title: alertMessage
            })
    };

    const fireSuccesMeesage = () => {
        successMessage.length &&
            Toast.fire({
                icon: 'success',
                title: successMessage
            })
    }

    const handleSubmit = () => {
        const val = validations();
        if (val) {
            setValid(true);
            Toast.fire({
                icon: 'success',
                title: ``
            })
        }
    };
    useEffect(fireAlertMessage, [alertMessage]);
    useEffect(fireSuccesMeesage, [successMessage])
    return (
        <>
            <Row className='d-flex justify-content-center'>
                <Card style={{ width: '20rem' }} >
                    <Card.Body>
                        <Card.Title className="text-center">Formulario de Creación</Card.Title>
                        <Form onSubmit={onSubmitForm} >
                            <Form.Group>
                                <Form.Label>
                                    Titulo
                                </Form.Label>
                                <Form.Control type="text" placeholder="Ingrese un titulo" onChange={(v) => setTitle(v.target.value)} value={title} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>
                                    Contenido
                                </Form.Label>
                                <Form.Control as="textarea" type="text" placeholder="Ingrese un contenido" rows={3} onChange={(v) => setContents(v.target.value)} value={contents} />
                            </Form.Group>
                            <Form.Group className="d-flex justify-content-end">
                                <Button type='submit' onClick={onSubmitForm} >
                                    Guardar
                                </Button>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </Row>
        </>
    )
}

export default CreateForm

