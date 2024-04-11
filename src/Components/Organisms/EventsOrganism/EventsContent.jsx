import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './EventsOrganism.css';
import { useDispatch, useSelector } from 'react-redux';
import { getEvents, allEvent, eventError, isEventLoading } from '../../../States/EventState';
import EventsCarousel from '../../Molecules/EventsMolecules/EventsCarousel';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';

const EventsContent = () => {
    const dispatch = useDispatch();
    const event = useSelector(allEvent).events;
    const isLoading = useSelector(isEventLoading);
    const error = useSelector(eventError);
    
    useEffect(() => {
        console.log(event);
        dispatch(getEvents());
    }, [dispatch]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const sortedEvents = event ? [...event].sort((a, b) => new Date(b.date) - new Date(a.date)) : [];


    return (
        <Container fluid className='container-events-content'>
            <Row className='row-events-content '>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <CustomTitle text="I nostri eventi" className="medium-title" />
                    <CustomParagraph text="Scopri gli ultimi eventi organizzati dalla nostra community" className="medium-p" />
                </Col>
            </Row>
            <EventsCarousel events={sortedEvents} />
        </Container>
    );
};

export default EventsContent;
