import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Col, Row, Container } from 'react-bootstrap';
import './ReservedAreaOrganism.css';
import CustomTitle from '../../Atoms/CustomTitle';
import { useSession } from '../../../Middleware/ProtectedRoutes';
import CustomParagraph from '../../Atoms/CustomParagraph';
import { allEvent, getEvents, deleteEvent } from '../../../States/EventState';
import EventForm from '../../Molecules/ReservedAreaMolecules/EventForm';
import EventTable from '../../Molecules/ReservedAreaMolecules/EventTable';

const ReservedAreaContent = () => {
  const dispatch = useDispatch();
  const events = useSelector(allEvent);
  const session = useSession();

  const deleteEventAction = (id) => {
    dispatch(deleteEvent(id));
};

  useEffect(() => {
    dispatch(getEvents());
  }, [events]);
  return (
    <Container fluid className="reserved-area-content">
      <Row className='reserved-area-row'>
        <Col lg={12} md={12} sm={12} xs={12}>
        <CustomTitle text={`Benvenuto nella tua area riservata ${session.decodedSession.name}`} className='reserved-area-title medium-title text-center white mb-5' />
        <CustomParagraph text='Qui puoi trovare il form da compilare per aggiungere gli ultimi eventi al quale ai partecipato nella tua pagina.' className='reserved-area-p medium-p text-center white' />
        <CustomParagraph text='Ogni volta che hai finito di aggiungere gli ultimi eventi ricordati di fare il logout attraverso la navbar.' className='reserved-area-p medium-p text-center white' />
        </Col>
      </Row>
      <Row className='py-5'>
        <Col lg={4} md={4} sm={12} xs={12}>
          <EventForm />
        </Col>
        <Col lg={8} md={8} sm={12} xs={12}>
          <EventTable events={events.events} onDelete={deleteEventAction} />
        </Col>
      </Row>
    </Container>
  )
}

export default ReservedAreaContent
