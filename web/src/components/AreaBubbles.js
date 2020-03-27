import React, { Component } from 'react';
import { ResponsiveBubble } from '@nivo/circle-packing';
import Env from '../env';

import './AreaBubbles.css';     

const bubbleData = {
  name: 'nivo',
  color: 'hsl(111, 70%, 50%)',
  children: [
    {
      name: 'viz',
      color: 'hsl(225, 70%, 50%)',
      children: [
        {
          name: 'stack',
          color: 'hsl(306, 70%, 50%)',
          children: [
            {
              name: 'chart',
              color: 'hsl(335, 70%, 50%)',
              loc: 69279
            },
            {
              name: 'xAxis',
              color: 'hsl(122, 70%, 50%)',
              loc: 161470
            },
            {
              name: 'yAxis',
              color: 'hsl(277, 70%, 50%)',
              loc: 143162
            },
            {
              name: 'layers',
              color: 'hsl(213, 70%, 50%)',
              loc: 7198
            }
          ]
        },
        {
          name: 'pie',
          color: 'hsl(354, 70%, 50%)',
          children: [
            {
              name: 'chart',
              color: 'hsl(61, 70%, 50%)',
              children: [
                {
                  name: 'pie',
                  color: 'hsl(47, 70%, 50%)',
                  children: [
                    {
                      name: 'outline',
                      color: 'hsl(308, 70%, 50%)',
                      loc: 109409
                    },
                    {
                      name: 'slices',
                      color: 'hsl(194, 70%, 50%)',
                      loc: 78492
                    },
                    {
                      name: 'bbox',
                      color: 'hsl(272, 70%, 50%)',
                      loc: 157207
                    }
                  ]
                },
                {
                  name: 'donut',
                  color: 'hsl(117, 70%, 50%)',
                  loc: 126214
                },
                {
                  name: 'gauge',
                  color: 'hsl(66, 70%, 50%)',
                  loc: 147446
                }
              ]
            },
            {
              name: 'legends',
              color: 'hsl(272, 70%, 50%)',
              loc: 130855
            }
          ]
        }
      ]
    },
    {
      name: 'colors',
      color: 'hsl(339, 70%, 50%)',
      children: [
        {
          name: 'rgb',
          color: 'hsl(252, 70%, 50%)',
          loc: 165879
        },
        {
          name: 'hsl',
          color: 'hsl(237, 70%, 50%)',
          loc: 13952
        }
      ]
    },
    {
      name: 'utils',
      color: 'hsl(223, 70%, 50%)',
      children: [
        {
          name: 'randomize',
          color: 'hsl(349, 70%, 50%)',
          loc: 75174
        },
        {
          name: 'resetClock',
          color: 'hsl(3, 70%, 50%)',
          loc: 81172
        },
        {
          name: 'noop',
          color: 'hsl(256, 70%, 50%)',
          loc: 132216
        },
        {
          name: 'tick',
          color: 'hsl(48, 70%, 50%)',
          loc: 27520
        },
        {
          name: 'forceGC',
          color: 'hsl(332, 70%, 50%)',
          loc: 166881
        },
        {
          name: 'stackTrace',
          color: 'hsl(245, 70%, 50%)',
          loc: 59195
        },
        {
          name: 'dbg',
          color: 'hsl(60, 70%, 50%)',
          loc: 125758
        }
      ]
    },
    {
      name: 'generators',
      color: 'hsl(354, 70%, 50%)',
      children: [
        {
          name: 'address',
          color: 'hsl(188, 70%, 50%)',
          loc: 68385
        },
        {
          name: 'city',
          color: 'hsl(218, 70%, 50%)',
          loc: 179505
        },
        {
          name: 'animal',
          color: 'hsl(187, 70%, 50%)',
          loc: 132524
        },
        {
          name: 'movie',
          color: 'hsl(1, 70%, 50%)',
          loc: 169879
        },
        {
          name: 'user',
          color: 'hsl(106, 70%, 50%)',
          loc: 32044
        }
      ]
    },
    {
      name: 'set',
      color: 'hsl(67, 70%, 50%)',
      children: [
        {
          name: 'clone',
          color: 'hsl(229, 70%, 50%)',
          loc: 14059
        },
        {
          name: 'intersect',
          color: 'hsl(179, 70%, 50%)',
          loc: 16590
        },
        {
          name: 'merge',
          color: 'hsl(67, 70%, 50%)',
          loc: 187731
        },
        {
          name: 'reverse',
          color: 'hsl(179, 70%, 50%)',
          loc: 36049
        },
        {
          name: 'toArray',
          color: 'hsl(210, 70%, 50%)',
          loc: 7182
        },
        {
          name: 'toObject',
          color: 'hsl(23, 70%, 50%)',
          loc: 158163
        },
        {
          name: 'fromCSV',
          color: 'hsl(268, 70%, 50%)',
          loc: 22650
        },
        {
          name: 'slice',
          color: 'hsl(38, 70%, 50%)',
          loc: 188537
        },
        {
          name: 'append',
          color: 'hsl(268, 70%, 50%)',
          loc: 609
        },
        {
          name: 'prepend',
          color: 'hsl(173, 70%, 50%)',
          loc: 187885
        },
        {
          name: 'shuffle',
          color: 'hsl(46, 70%, 50%)',
          loc: 136643
        },
        {
          name: 'pick',
          color: 'hsl(177, 70%, 50%)',
          loc: 46025
        },
        {
          name: 'plouc',
          color: 'hsl(215, 70%, 50%)',
          loc: 19717
        }
      ]
    },
    {
      name: 'text',
      color: 'hsl(85, 70%, 50%)',
      children: [
        {
          name: 'trim',
          color: 'hsl(136, 70%, 50%)',
          loc: 43414
        },
        {
          name: 'slugify',
          color: 'hsl(215, 70%, 50%)',
          loc: 59745
        },
        {
          name: 'snakeCase',
          color: 'hsl(238, 70%, 50%)',
          loc: 125648
        },
        {
          name: 'camelCase',
          color: 'hsl(332, 70%, 50%)',
          loc: 105302
        },
        {
          name: 'repeat',
          color: 'hsl(218, 70%, 50%)',
          loc: 103671
        },
        {
          name: 'padLeft',
          color: 'hsl(301, 70%, 50%)',
          loc: 24664
        },
        {
          name: 'padRight',
          color: 'hsl(34, 70%, 50%)',
          loc: 107277
        },
        {
          name: 'sanitize',
          color: 'hsl(35, 70%, 50%)',
          loc: 128805
        },
        {
          name: 'ploucify',
          color: 'hsl(169, 70%, 50%)',
          loc: 58256
        }
      ]
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
const BubbleChart = ({ root /* see root tab */ }) => (
  <ResponsiveBubble
    root={root}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    identity="name"
    value="loc"
    colors={{ scheme: 'nivo' }}
    padding={6}
    labelTextColor={{ from: 'color', modifiers: [['darker', 0.8]] }}
    borderWidth={2}
    borderColor={{ from: 'color' }}
    defs={[
      {
        id: 'lines',
        type: 'patternLines',
        background: 'none',
        color: 'inherit',
        rotation: -45,
        lineWidth: 5,
        spacing: 8
      }
    ]}
    fill={[{ match: { depth: 1 }, id: 'lines' }]}
    animate
    motionStiffness={90}
    motionDamping={12}
  />
);

const commonProperties = {
  width: 900,
  height: 500,
  root: bubbleData,
  identity: 'name',
  value: 'loc',
  label: 'name',
  labelSkipRadius: 16
};

class AreaBubbles extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // const response = await fetch('http://localhost:3000/need-areas');
    // const { data } = await response.json();
    // console.log('AREAS', data);

    fetch(`${Env.API}/need-areas`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data });
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
    return <BubbleChart class="bubble-chart" {...commonProperties} />;

    // return data.map(area => <div key={area.id}>{area.name}</div>);
  }
}

export default AreaBubbles;
