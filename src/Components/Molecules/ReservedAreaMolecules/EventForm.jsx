import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { createEvent } from '../../../States/EventState';

const EventForm = () => {
    const [name, setName] = useState('');
    const [images, setImages] = useState([]);
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [generalInfo, setGeneralInfo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const eventObj = {
            name,
            location,
            images,
            generalInfo,
            date
        };

        dispatch(createEvent(eventObj));
        console.log(images);

        setName('');
        setImages(null);
        setLocation('');
        setDate('');
        setGeneralInfo('');
    };

    return (
        <Form onSubmit={handleSubmit} className='form' encType='multipart/form-data'>
            <Form.Group className="mb-3" controlId="eventName">
                <Form.Label>Nome evento:</Form.Label>
                <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventImages">
                <Form.Label>Immagini:</Form.Label>
                <Form.Control
                    name='images'
                    type="file"
                    onChange={(e) => setImages(e.target.files)}
                    multiple
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventLocation">
                <Form.Label>Location:</Form.Label>
                <Form.Control
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventDate">
                <Form.Label>Data:</Form.Label>
                <Form.Control
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="eventGeneralInfo">
                <Form.Label>Descrizione:</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={generalInfo}
                    onChange={(e) => setGeneralInfo(e.target.value)}
                    required
                />
            </Form.Group>
            <button type='submit' className="button">Invia</button>
        </Form>
    );
};

export default EventForm;
