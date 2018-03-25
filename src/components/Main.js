require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Suv from './SuvComponent';



class AppComponent extends React.Component {
  constructor() {
    super();
  }
    
    render() {
      return (
        <Suv/>
      );
    }
}

AppComponent.defaultProps = {
};

export default AppComponent;
