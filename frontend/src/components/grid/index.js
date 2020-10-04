import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class Grid extends Component {
  onFirstDataRendered = params => {
    params.api.sizeColumnsToFit();
  };

  render() {

    if(!this.props.data) {
      return <p>Data grid was not setup correctly</p>
    }

    return (
        <div className="ag-theme-alpine" style={ {height: '500px', width: '100%'} }>
          <AgGridReact
              columnDefs={this.props.headers.map((item) => item)}
              rowData={this.props.data}
              onFirstDataRendered={this.onFirstDataRendered}
              pagination={true}
              >
          </AgGridReact>
        </div>
    );
  }
}


export default Grid