import React from 'react';

require('./header.css');
class Header extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="header">
        <span className="title">
          React + Redux + Thunk test
        </span>
      </div>
    );
  }
}

export default Header;
