import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';
import '../../Molecules/ExperienceMolecules/ExperienceMolecules.css'
import './Experience.css';
import ExperienceCard from '../../Molecules/ExperienceMolecules/ExperienceCard';

const Experience = () => {
    return (
        <Container fluid className='container-experience'>
            <CustomTitle text="Experience Beyond Imagination" className='medium-title my-5' />
            <Row>
                <Col lg={6} md={12} sm={12} xs={12} className='col-relative'>
                    <div className="card-experience">
                        <CustomTitle text="Experience Title" className="title-experience" />
                        <CustomParagraph text="Experience description lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus." />
                    </div>
                </Col>
                <Col lg={6} md={12} sm={12} xs={12}>
                    <ExperienceCard />
                </Col>
            </Row>
        </Container>
    )
}

export default Experience
