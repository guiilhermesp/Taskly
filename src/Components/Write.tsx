import React from 'react';
import Modal from './Modal';

interface IWrite {
  setCard: any;
}

const Write: React.FC<IWrite> = ({ setCard }) => {


  return (
    <Modal />
  );
};

export default Write;
