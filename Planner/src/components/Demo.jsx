import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';
import React, { useState } from 'react';

function Demo() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {setIsModalOpen(true);};
    const closeModal = () => {setIsModalOpen(false);};

  return (
    <>
      <Modal opened={isModalOpen} onClose={closeModal} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Group position="center">
        <Button onClick={openModal}>Open modal</Button>
      </Group>

      
    </>
  );
}

export default Demo;