import React, { Component } from 'react';
import Env from '../env';

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
    const { data } = this.state;
    // return <div />;

    return data.map(area => <div key={area.id}>{area.name}</div>);
  }
}

export default AreaBubbles;
