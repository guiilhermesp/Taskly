import { useState } from 'react';
import './App.css';
import Card from './Components/Card';
import Header from './Components/Header';
import Write from './Components/Write';

function App() {
  const [widgets, setWidgets] = useState<string[]>([]);
  const [cards, setCards] = useState<string[]>([]);

  const handleOnDrop = (e: React.DragEvent) => {
    const widgetType = e.dataTransfer.getData('widgetTitle') as string;
    setWidgets([...widgets, widgetType]);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div className='w-screen'>
      <Header />
      <div className='flex flex-col items-center bg-gray-700 w-52 mt-8'>

        <Write setCard={setCards} />
        <div className='bg-white w-48 h-auto mb-8'>
          <Card title='First' />
          <Card title='Second' />
          <Card title='Third' />
        </div>
      </div>
      <div className='bg-white w-48 h-48' onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {widgets.map((item, index) => (
          <Card key={index} title={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
