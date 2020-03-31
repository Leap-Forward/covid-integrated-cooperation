import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import Button from 'react-bootstrap-button-loader';
import Env from '../env';
import BubbleChart from './BubbleChart';
import './AreaBubbles.css';

const AreaBubbles = () => {
  const [bubbles, setBubbles] = useState({
    name: 'Categories',
    children: [
      {
        count: 1
      }
    ]
  });

  const [areas, setAreas] = useState([]);

  const requestCategories = async area => {
    const url = area
      ? `${Env.API}/need-areas/${area.id}/need-categories`
      : `${Env.API}/need-categories`;
    const response = await fetch(url);
    const { data } = await response.json();
    const needCategories = data.map(e => {
      const {
        id,
        attributes: { name, 'initiative-count': count }
      } = e;
      return { id, name, count };
    });
    setBubbles({ ...bubbles, children: needCategories });
  };

  useEffect(() => {
    const requestAreas = async () => {
      const response = await fetch(`${Env.API}/need-areas`);
      const { data } = await response.json();
      const needAreas = data.map(e => {
        const {
          id,
          attributes: { name, 'initiative-count': count }
        } = e;
        return { id, name };
      });
      setAreas(needAreas);
    };

    requestCategories();
    requestAreas();
  }, []);

  const areaButtons = () =>
    areas.map(area => (
      <Button
        className="area-button"
        variant="info"
        key={area.id}
        onClick={() => {
          requestCategories(area);
        }}
      >
        {area.name}
      </Button>
    ));

  return (
    <GridLayout
      className="layout"
      autosize
      cols={12}
      rowHeight={100}
      width={960}
    >
      <div key="a" data-grid={{ x: 0, y: 0, w: 8, h: 6, static: true }}>
        <BubbleChart root={bubbles} />
      </div>
      <div key="b" data-grid={{ x: 0, y: 6, w: 6, h: 2 }}>
        {areaButtons()}
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
