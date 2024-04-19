import React from 'react';
import Table from 'react-bootstrap/Table';
import CustomButton from '../../Atoms/CustomButton';
import CustomTitle from '../../Atoms/CustomTitle';
import CustomParagraph from '../../Atoms/CustomParagraph';

const EventTable = ({ events, onDelete, onEdit }) => {
    return (
        <div className="table-responsive">
            <Table className='event-table'>
                <thead>
                    <tr>
                        <th><CustomParagraph text='Name' className='medium-p'/></th>
                        <th><CustomParagraph text='Images' className='medium-p'/></th>
                        <th><CustomParagraph text='Location' className='medium-p'/></th>
                        <th><CustomParagraph text='Date' className='medium-p'/></th>
                        <th><CustomParagraph text='General Info' className='medium-p'/></th>
                        <th><CustomParagraph text='Actions' className='medium-p'/></th>
                    </tr>
                </thead>
                <tbody>
                    {events ? events.map(event => (
                        <tr key={event.id}>
                            <td><CustomParagraph text={event.name} className='small-p'/></td>
                            <td>
                                <div className='d-flex flex-wrap'>
                                    {event.images.map((image, index) => (
                                        <img key={index} src={image} alt={`Event ${index}`} style={{ maxWidth: '60px', marginBottom: '5px' }} />
                                    ))}
                                </div>
                            </td>
                            <td><CustomParagraph text={event.location} className='small-p'/></td>
                            <td><CustomParagraph text={event.date} className='small-p'/></td>
                            <td className='w-50'><CustomParagraph text={event.generalInfo} className='small-p'/></td>
                            <td>
                                <CustomButton onClick={() => onDelete(event._id)} text='Delete' className='button my-2' />
                            </td>
                        </tr>
                    )): null}
                </tbody>
            </Table >
        </div>
    );
};

export default EventTable;
