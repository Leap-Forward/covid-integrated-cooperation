import React, { Component } from 'react';
import Env from '../env';
import BubbleChart from './BubbleChart';

import './AreaBubbles.css';     

const bubbleData = {
  name: 'Needs',
  color: 'hsl(111, 70%, 50%)',
  children: [
    {
      name: 'Basic',
      color: 'hsl(225, 70%, 50%)',
      loc: 100,
    },
    {
      name: 'Mental Health',
      color: 'hsl(339, 70%, 50%)',
      loc: 500,
    },
    {
      name: 'utils',
      color: 'hsl(223, 70%, 50%)',
      loc: 300,
    },
    {
      name: 'generators',
      color: 'hsl(354, 70%, 50%)',
      loc: 200,

    },
    {
      name: 'set',
      color: 'hsl(67, 70%, 50%)',
      loc: 800,
    },
    {
      name: 'text',
      color: 'hsl(85, 70%, 50%)',
      loc: 400,
    }
  ]
};

const bubbleData_1 = {
  name: 'Needs',
  color: 'hsl(111, 70%, 50%)',
  children: [
    {
      name: 'Basic',
      color: 'hsl(225, 70%, 50%)',
      loc: 1000000000,
    },
    {
      name: 'Mental Health',
      color: 'hsl(339, 70%, 50%)',
      loc: 500000000
    },
    {
      name: 'utils',
      color: 'hsl(223, 70%, 50%)',

    },
    {
      name: 'generators',
      color: 'hsl(354, 70%, 50%)',

    },
    {
      name: 'set',
      color: 'hsl(67, 70%, 50%)',

    },
    {
      name: 'text',
      color: 'hsl(85, 70%, 50%)',
    },
    {
      name: 'misc',
      color: 'hsl(354, 70%, 50%)',
      children: [
        {
          name: 'whatever',
          color: 'hsl(159, 70%, 50%)',
          children: [
            {
              name: 'hey',
              color: 'hsl(170, 70%, 50%)',
              loc: 152733
            },
            {
              name: 'WTF',
              color: 'hsl(249, 70%, 50%)',
              loc: 172007
            },
            {
              name: 'lol',
              color: 'hsl(266, 70%, 50%)',
              loc: 16416
            },
            {
              name: 'IMHO',
              color: 'hsl(277, 70%, 50%)',
              loc: 149895
            }
          ]
        },
        {
          name: 'other',
          color: 'hsl(100, 70%, 50%)',
          loc: 101694
        },
        {
          name: 'crap',
          color: 'hsl(173, 70%, 50%)',
          children: [
            {
              name: 'crapA',
              color: 'hsl(316, 70%, 50%)',
              loc: 157282
            },
            {
              name: 'crapB',
              color: 'hsl(253, 70%, 50%)',
              children: [
                {
                  name: 'crapB1',
                  color: 'hsl(330, 70%, 50%)',
                  loc: 61684
                },
                {
                  name: 'crapB2',
                  color: 'hsl(261, 70%, 50%)',
                  loc: 74990
                },
                {
                  name: 'crapB3',
                  color: 'hsl(217, 70%, 50%)',
                  loc: 66763
                },
                {
                  name: 'crapB4',
                  color: 'hsl(358, 70%, 50%)',
                  loc: 25035
                }
              ]
            },
            {
              name: 'crapC',
              color: 'hsl(194, 70%, 50%)',
              children: [
                {
                  name: 'crapC1',
                  color: 'hsl(149, 70%, 50%)',
                  loc: 190191
                },
                {
                  name: 'crapC2',
                  color: 'hsl(254, 70%, 50%)',
                  loc: 161279
                },
                {
                  name: 'crapC3',
                  color: 'hsl(64, 70%, 50%)',
                  loc: 144930
                },
                {
                  name: 'crapC4',
                  color: 'hsl(225, 70%, 50%)',
                  loc: 192091
                },
                {
                  name: 'crapC5',
                  color: 'hsl(326, 70%, 50%)',
                  loc: 157304
                },
                {
                  name: 'crapC6',
                  color: 'hsl(108, 70%, 50%)',
                  loc: 139704
                },
                {
                  name: 'crapC7',
                  color: 'hsl(183, 70%, 50%)',
                  loc: 24953
                },
                {
                  name: 'crapC8',
                  color: 'hsl(103, 70%, 50%)',
                  loc: 150179
                },
                {
                  name: 'crapC9',
                  color: 'hsl(278, 70%, 50%)',
                  loc: 71232
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};


const commonProperties = {
  width: 900,
  height: 500,
  // root: bubbleData,
  identity: 'name',
  value: 'loc',
  label: 'name',
  labelSkipRadius: 16
};

class AreaBubbles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: bubbleData,
    };
  }

  componentDidMount() {
    // const response = await fetch('http://localhost:3000/need-areas');
    // const { data } = await response.json();
    // console.log('AREAS', data);

    fetch(`${Env.API}/need-areas`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: bubbleData_1 });
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
    return <BubbleChart class="bubble-chart" {...commonProperties} root={this.state.data} />;

    // return data.map(area => <div key={area.id}>{area.name}</div>);
  }
}

export default AreaBubbles;
