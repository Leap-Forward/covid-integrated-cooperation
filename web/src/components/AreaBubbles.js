import React, { Component } from 'react';
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

class AreaBubbles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: bubbleData
    };
  }

  componentDidMount() {
    // const response = await fetch('http://localhost:3000/need-areas');
    // const { data } = await response.json();
    // console.log('AREAS', data);

    fetch(`${Env.API}/need-areas/2/need-categories`)
      .then(response => response.json())
      .then(({ data }) => {
        const bubbles = data.map(e => {
          const {
            id,
            attributes: { name, 'initiative-count': count }
          } = e;
          return { id, name, count };
        });
        this.setState(prevState => ({
          ...prevState,
          data: { ...data, children: bubbles }
        }));
      });
  }

  // const [needAreas, setNeedAreas] = useState([]);

  // useEffect(() => {
  //   const requestNeedAreas = async () => {
  //     const response = await fetch('http://localhost:3000/need_areas');
  //     const { data } = await response.json();
  //     // setNeedAreas(data);
  //     console.log(response.json());
  //   };
  //   requestNeedAreas();
  // }, []);

  render() {
    // const { data } = this.state;
    return <BubbleChart class="bubble-chart" root={this.state.data} />;

    // return data.map(area => <div key={area.id}>{area.name}</div>);
  }
}

export default AreaBubbles;
