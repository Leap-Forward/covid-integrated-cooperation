import React, { useEffect, useState } from 'react';
import Env from '../env';
import BubbleChart from './BubbleChart';
import './AreaBubbles.css';

const bubbleData = {
  name: 'Needs',
  children: [
    {
      name: 'Basic',
      count: 100
    },
    {
      name: 'Mental Health',
      count: 500
    },
    {
      name: 'utils',
      count: 300
    },
    {
      name: 'generators',
      count: 200
    },
    {
      name: 'set',
      count: 800
    },
    {
      name: 'text',
      count: 400
    }
  ]
};

const commonProperties = {
  width: 900,
  height: 500,
  labelSkipRadius: 16
};

function AreaBubbles() {
  // const [root, setRoot] = useState({
  //   name: 'Needs',
  //   children: []
  // });

  const [root, setRoot] = useState(bubbleData);

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

  return <BubbleChart class="bubble-chart" root={root} />;
}

export default AreaBubbles;
