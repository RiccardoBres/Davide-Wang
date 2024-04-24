import React, { useEffect } from 'react';
import { Row, Col, Container, Spinner } from 'react-bootstrap';
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

    const sortedEvents = event ? [...event].sort((a, b) => new Date(b.date) - new Date(a.date)) : [];


    return (
        <Container fluid className='container-events-content'>
            <Row className='row-events-content '>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <CustomTitle text="I nostri eventi" className="big-title" />
                </Col>
            </Row>
            {isLoading ? (
                <>
                    <div className="w-100 d-flex align-items-center justify-content-center my-5">
                        <Spinner animation="border" role="status">
                        </Spinner>
                    </div>
                </>
            ) : error ? (
                <CustomParagraph text='Ops! Qualcosa è andato storto. Riprova tra 5 minuti.' className="medium-p" />
            ) : (
                <EventsCarousel events={sortedEvents} />
            )}
        </Container>
    );
};

export default EventsContent;
