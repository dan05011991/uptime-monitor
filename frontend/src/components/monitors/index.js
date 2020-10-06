import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetch } from '../../actions/monitorActions';

import Grid from '../grid';
import PropTypes from 'prop-types'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class MonitorControl extends Component {

  constructor(props) {
    super(props);
    this.state = {
      title: props.environment ? props.environment.toUpperCase() : 'Monitors',
      environment: props.environment ? props.environment.toUpperCase() : null
    };
  };

  componentDidMount() {
      this.props.fetch();
      this.timer = setInterval(()=> this.props.fetch(), 1000)
  };

  render() {
    let items = this.props.monitors.filter((item) => {
        if(!this.state.environment) {
            return true;
        }
        return item.environment === this.state.environment;
    });
    items = items.sort((a, b) => (a.status > b.status) ? 1 : -1)

    return (   
      <div>
        <h2>{this.state.title}</h2>
        <Grid headers={this.props.headers} data={items} />
      </div>
    );
  }
}

MonitorControl.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(MonitorControl)
