import { Modal, Button, Group,TextInput, Space, Textarea } from '@mantine/core';
import React, { useState } from 'react';
function Hour(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {setIsModalOpen(true);};
    const closeModal = () => {setIsModalOpen(false);};
    const day = props.day
    const hour = props.hour

    return ( 
        <>
        <div className='hour'onClick={openModal}>
            
        </div> 
        <Modal opened={isModalOpen} onClose={closeModal} title="">
            
            {`${hour} ${day}`}
            <TextInput
                placeholder="Tiltle"
                label="Title"
                withAsterisk
            />
            <Space h='md'/>
            
            <input id="appt-time" type="time" name="appt-time" value={`${hour<10 ? '0'+ hour : hour}:00`} />
            <Space h='md'/>
            
            <Textarea
                label="Description"
                withAsterisk
            />
            
        </Modal>
        </>
    );
}

export default Hour;