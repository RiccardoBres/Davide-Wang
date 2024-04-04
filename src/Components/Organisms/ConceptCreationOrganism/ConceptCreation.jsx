import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomTitle from '../../Atoms/CustomTitle';
import './ConceptCreation.css';
import Image1 from '../../../Layout/Assets/UtilsImages/background.jpg';
import Image2 from '../../../Layout/Assets/UtilsImages/cocktail.jpg';
import Image3 from '../../../Layout/Assets/UtilsImages/background5.heic';
import ConceptColumn from '../../Molecules/ConceptCreationMolecules/ConceptColumn';
import CreationColumn from '../../Molecules/ConceptCreationMolecules/CreationColumn';
const conceptData = [
    {
        id: 1,
        title: "Beverage 1",
        text: "Description for Beverage 1",
        image: Image1
    },
    

];
const creationData = [
    {
        id: 2,
        title: "Beverage 2",
        text: "Description for Beverage 2",
        image: Image2
    },

];

const ConceptCreation = () => {
    return (
        <Container className='container-concept-creation'>
            <CustomTitle text="Concept & Creation" className="medium-title" />
            <Row>
                {conceptData.map((concept) => (
                    <Col lg={6} md={6} sm={12} xs={12} key={concept.id}>
                        <ConceptColumn title={concept.title} description={concept.text} src={concept.image}/>
                    </Col>
                ))}
                {creationData.map((concept) => (
                    <Col lg={6} md={6} sm={12} xs={12} key={concept.id}>
                        <CreationColumn title={concept.title} description={concept.text} src={concept.image} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default ConceptCreation
