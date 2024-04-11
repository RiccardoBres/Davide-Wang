import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import './ReservedAreaOrganism.css';
import CustomTitle from '../../Atoms/CustomTitle';
import { useSession } from '../../../Middleware/ProtectedRoutes';
import CustomParagraph from '../../Atoms/CustomParagraph';
import EventForm from '../../Molecules/ReservedAreaMolecules/EventForm';

const ReservedAreaContent = () => {
  const session = useSession();
  return (
    <Container fluid className="reserved-area-content">
      <Row className='reserved-area-row'>
        <Col lg={12} md={12} sm={12} xs={12}>
        <CustomTitle text={`Benvenuto nella tua area riservata zio ${session.decodedSession.name}`} className='reserved-area-title medium-title text-center white' />
        <CustomParagraph text='Qui puoi trovare il form da compilare per aggiungere gli ultimi eventi al quale ai partecipato nella tua pagina' className='reserved-area-p medium-p text-center white mt-5' />
        <CustomParagraph text='Ogni volta che hai finito di aggiungere gli ultimi eventi ricordati di fare il logout attraverso la navbar' className='reserved-area-p medium-p text-center white mt-5' />
        <CustomParagraph text='Per qualsiasi problema sai già chi chiamare FRATM.' className='reserved-area-p medium-p text-center white mt-5' />
        </Col>
      </Row>
      <Row className='py-5'>
        <Col lg={6} md={6} sm={12} xs={12}>
          <EventForm />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
        </Col>
      </Row>
    </Container>
  )
}

export default ReservedAreaContent
