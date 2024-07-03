import React from 'react';

interface ICard {
  title: string;
}

const Card: React.FC<ICard> = ({ title }) => {
  const handleOnDrag = (e: React.DragEvent, title: string) => {
    e.dataTransfer.setData('widgetTitle', title)
  }

  return (
    <div className='border-purple-500 bg-purple-800 border-2 px-4 lg:px-6 py-2.5 flex items-center text-white cursor-pointer'
      draggable
      onDragStart={(e) => { handleOnDrag(e, title) }}
    >
      <h6>{title}</h6>
    </div>
  );
};

export default Card;
