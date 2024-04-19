import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CustomParagraph from '../../Atoms/CustomParagraph';
import CustomImage from '../../Atoms/CustomImage';
import CustomTitle from '../../Atoms/CustomTitle';
import { Col, Container, Row } from 'react-bootstrap';
import './EventsMolecules.css';

const EventCarousel = ({ events }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <Container className='container-carousel'>
            {events?.map((event, index) => (
                <Row key={index} className={`row-carousel ${index % 2 === 0 ? 'd-flex flex-direction-row' : 'd-flex flex-direction-row-reverse'}`}>
                    <CustomTitle text={event.name} className="big-title text-center my-5" />
                    <Col lg={6} md={6} sm={12} xs={12} className='coll-image'>
                        {Array.isArray(event.images) && event.images.length > 1 ? (
                            <Slider {...settings}>
                                {event.images?.map((image, i) => (
                                    <div className="container-image-carousel" key={image.id || i}>
                                        <CustomImage key={image.id || i} src={image} alt={image.i} />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <CustomImage src={event.images} alt={events.name} className='w-50' />
                        )}
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12} className='p-0'>
                        <div className='event-info'>
                            <CustomTitle text={event.location} className="small-title" />
                            <CustomParagraph text={event.generalInfo} className="small-p" />
                            <CustomParagraph
                                text={(event.date != undefined ? new Date(event.date).toLocaleDateString('it-IT') : 'Non disponibile')}
                                className="small-p text-end"
                            />                    </div>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default EventCarousel;
