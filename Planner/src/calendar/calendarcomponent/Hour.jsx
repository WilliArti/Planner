import { Modal, Button, Group } from '@mantine/core';
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
        </Modal>
        </>
    );
}

export default Hour;