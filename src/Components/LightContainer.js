import React, { Component } from 'react';
import { connect } from 'react-redux';

const switchAction = { type:'SWITCH' };

class LightComponent extends Component {
  render() {
  const { light, dispatch } = this.props;
    return (
      <div>
        <p>{light}</p>
        <button 
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" 
        onClick={()=> dispatch(switchAction)}>
        Switch
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  light: state
});

const LightContainer = connect(mapStateToProps)(LightComponent)

export default LightContainer;