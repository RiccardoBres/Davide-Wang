import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './ContactMolecules.css'; 
import CustomButton from '../../Atoms/CustomButton';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Puoi gestire qui l'invio del modulo, ad esempio inviando i dati al backend
        console.log(formData);
        // Resetta il modulo dopo l'invio
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
        <Form onSubmit={handleSubmit} className='contact-form'>
                <Form.Group controlId="formName">
                    <Form.Control
                        type="text"
                        placeholder="Inserisci il tuo nome"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formEmail">
                    <Form.Control
                        type="email"
                        placeholder="Inserisci la tua email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formSubject">
                    <Form.Control
                        type="text"
                        placeholder="Inserisci l'oggetto del messaggio"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="formMessage">
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Inserisci il tuo messaggio"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <div className="w-100 d-flex justify-content-center">
                <CustomButton text='Invia' className='button mt-3' type='submit' />
                </div>
            </Form>
        </>
            
    );
};

export default ContactForm;
