require('normalize.css/normalize.css');
require('styles/App.css');

import axios from 'axios';
import React from 'react';



class SuvComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      suv:[]
    };
  }

  SuvComponent() {
    axios.get('http://localhost:9292/search')
    .then(res => {
      console.log('1')
      const suv = res.data;
      this.setState({suv});
    });
  }
  
  componentDidMount() {
    this.SuvComponent();
  }
    
    render() {
      return (
        <div>
            {this.state.suv.map(function(voiture) {
              return <p>{voiture.model} {'a un volume de '} {voiture.volume} {'L'}</p>
            })}
        </div>
      );
    }
}

SuvComponent.defaultProps = {
};

export default SuvComponent;
