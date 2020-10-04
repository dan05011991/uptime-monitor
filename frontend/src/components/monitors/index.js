import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetch } from '../../actions/monitorActions';

import Grid from '../grid';
import PropTypes from 'prop-types'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class WorkControl extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Monitors'
    };
  };

  componentDidMount() {
      this.props.fetch();
      this.timer = setInterval(()=> this.props.fetch(), 1000)
  };

  render() {
    return (   
      <div>
        <h2>{this.state.title}</h2>
        <Grid headers={this.props.headers} data={this.props.monitors} />
      </div>
    );
  }
}

WorkControl.propTypes = {
  monitors: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return { 
      monitors: state.monitors.items,
      headers: state.monitors.headers || []
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: () => dispatch(fetch())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkControl)
