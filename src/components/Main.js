require('normalize.css/normalize.css');
require('styles/App.css');

import axios from 'axios';
import React from 'react';
import elasticsearch from 'elasticsearch';


class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      suv:[],
      message: 'plop'
    };
  }

  AppComponent() {
    axios.get('http://localhost:9292/search/')
    .then(res => {
      const suv = res.data;
      this.setState({suv});
      const message = 'salut';
      this.setState([message]);
    });
  }
  
  componentDidMount() {
    this.AppComponent();
  }
    
    render() {
      return (
        <div>
          <p>{this.state.message}</p>
            {this.state.suv.map(function(voiture) {
              return <p>{voiture.brand}</p>
            })}
        </div>
      );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
