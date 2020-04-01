import React, { useEffect, useState } from 'react';
import GridLayout from 'react-grid-layout';
import Button from 'react-bootstrap-button-loader';
import { BarChart } from 'd3plus-react';
import _ from 'lodash';
import Env from '../env';
import BubbleChart from './BubbleChart';
import './AreaBubbles.css';
import { useHistory } from 'react-router-dom';

const AreaBubbles = () => {
  const [bubbles, setBubbles] = useState({
    name: 'Total',
    children: [
      {
        count: 1
      }
    ]
  });

  const [areas, setAreas] = useState([]);
  const [needs, setNeeds] = useState([]);
  const history = useHistory();

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

  const requestNeeds = async category => {
    const url = category && category.id
      ? `${Env.API}/need-categories/${category.id}/needs`
      : `${Env.API}/needs`;
    const response = await fetch(url);
    const { data } = await response.json();
    const needs = data.map(e => {
      const {
        id: needId,
        attributes: {
          name: id,
          'initiative-count': count,
          'need-type': needType
        }
      } = e;
      return { needId, id, count, needType };
    });

    let n = _.sortBy(needs, ['id']).reverse();
    n = _.sortBy(n, ['count']).map((e, i) => ({ y: i, ...e }));
    setNeeds(n);
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

  const bubbleSelected = needCategory => {
    requestNeeds(needCategory);
  };

  const barConfig = {
    discrete: 'y',
    x: 'count',
    yConfig: { ticks: [], grid: false },
    legend: false,
    on: {
      click: d => {
        console.log(`Hello, I am ${d.id}`);
       history.push(`/initiatives/${d.id}`);
      }
    },
    data: needs,
  };

  return (
    <GridLayout
      className="layout"
      autosize
      cols={12}
      rowHeight={100}
      width={960}
    >
      <div key="bubbles" data-grid={{ x: 0, y: 0, w: 8, h: 6, static: true }}>
        <BubbleChart root={bubbles} onClick={bubbleSelected} />
      </div>
      <div key="buttons" data-grid={{ x: 0, y: 6, w: 6, h: 2 }}>
        {areaButtons()}
      </div>
      <div key="histogram" data-grid={{ x: 8, y: 2, w: 4, h: 4 }}>
        <BarChart config={barConfig} />
      </div>
    </GridLayout>
    // <div className="bubble-chart" >
    //   <BubbleChart  root={root}/>
    //   <BubbleChart  root={root}/>
    // </div>
  );
};

export default AreaBubbles;
