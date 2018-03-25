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
          <p>{this.state.message}</p>
            {this.state.suv.map(function(voiture) {
              return <p>{voiture.model}</p>
            })}
            {this.state.suv.map(function(voiture) {
              return <p>{voiture.volume}</p>
            })}
        </div>
      );
    }
}

SuvComponent.defaultProps = {
};

export default SuvComponent;
