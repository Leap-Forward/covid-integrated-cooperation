import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import Env from '../env';
import BubbleChart from './BubbleChart';
import Button from 'react-bootstrap-button-loader';
import './AreaBubbles.css';

const AreaBubbles = () => {
  const [root, setRoot] = useState({
    name: 'Needs',
    children: [
      {
        count: 1
      }
    ]
  });

  useEffect(() => {
    const requestData = async () => {
      const response = await fetch(`${Env.API}/need-areas/2/need-categories`);
      const { data } = await response.json();

      const bubbles = data.map(e => {
        const {
          id,
          attributes: { name, 'initiative-count': count }
        } = e;
        return { id, name, count };
      });
      setRoot({ ...root, children: bubbles });
    };
    requestData();
  }, []);

  return (
    <GridLayout className="layout" autosize={true} cols={12} rowHeight={100} width={960}>
      <div key="a" data-grid={{ x: 0, y: 0, w: 8, h: 6, static: true }}>
         <BubbleChart  root={root}/>       
      </div>
      <div key="b" data-grid={{ x: 0, y: 6, w: 6, h: 2 }}>
        <Button variant="info" className="area-button">Press me!</Button>
      </div>
      <div key="c" data-grid={{ x: 0, y: 6, w: 4, h: 12 }}>
        c
      </div>
    </GridLayout>
    // <div className="bubble-chart" >
    //   <BubbleChart  root={root}/>
    //   <BubbleChart  root={root}/>
    // </div>
  );
};

export default AreaBubbles;
