import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, isAuthenticated, loginError, loginLoading } from '../../../States/LoginState';
import CustomButton from '../../Atoms/CustomButton';

const ModalLogin = ({ showModal, setShowModal }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const loggedIn = useSelector(isAuthenticated);
    const isLoading = useSelector(loginLoading);
    const error = useSelector(loginError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await dispatch(loginUser({ email, password }));
            if (loggedIn) {
                navigate('/reserved-area');
                handleClose();
            } else {
                alert(error);
            }
        } catch (error) {
            console.error('An error occurred:', error);
            alert('An error occurred during login.');
        }
    };
    const handleClose = () => {
        setShowModal(false);
    }
    const handleShow = () => setShowModal(true);

    return (
        <>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={onSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <CustomButton text={isLoading ? 'Loading..' : 'Submit'} type='submit' className='button mt-3' />
                        {error && <p>{error}</p>}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <CustomButton text='Close' onClick={handleClose} className='empty-button mt-3' />
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ModalLogin;
