import React, { useEffect, useState } from 'react';
import Env from '../env';
import BubbleChart from './BubbleChart';
import './AreaBubbles.css';

function AreaBubbles() {
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

  return <BubbleChart class="bubble-chart" root={root} />;
}

export default AreaBubbles;
