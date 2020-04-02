import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import GridLayout from 'react-grid-layout';
import InitiativeTable from '../components/InitiativeTable';
import Button from 'react-bootstrap-button-loader';
import Env from '../env';

import './Initiatives.css';

const Initiatives = (props) => {
  const [initiatives, setInitiatives] = useState([]);
  const history = useHistory();
  const params = useParams();


  useEffect(() => {
    const requestInitiatives = async area => {
      const url = `${Env.API}/needs/${params.id}/initiatives`;
      const response = await fetch(url);
      const { data } = await response.json();
      const parsed = data.map(e => {
        const {
          id,
          attributes: { name, description, website }
        } = e;
        return { id, name, website, description };
      });
      setInitiatives(parsed);
    };
    requestInitiatives();
  }, []);

  return (
    <GridLayout
      className="layout"
      autosize
      cols={12}
      rowHeight={100}
      width={960}
    >
      <div key="bubbles" data-grid={{ x: 2, y: 0, w: 10, h: 6, static: true }}>
        <InitiativeTable initiatives={initiatives}/>
      </div>
    </GridLayout>
    )
};

export default Initiatives;
