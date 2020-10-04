import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import TabSet from './TabSet'

class Router extends Component {

  componentWillUnmount() {
    console.log('Unmounting RT')
  }

  render() {
    const { history, location, rootUrl = '/', tabs, match } = this.props
    const pathStem = location.pathname
      .replace(`${match.path}`, '')
      .replace(/^\//, '')
      .split('/')[0];

    return (
      <TabSet 
        onChange={({ newVal }) => history.push(`${rootUrl}${newVal}`)}
        value={pathStem}
        tabs={tabs.map(tab => ({
          ...tab,
          content: () => (
            <Route path={`${rootUrl}${tab.slug}`} exact={tab.exact} render={tab.component} />
          ),
        }))} 
      />
    )
  }
}

const RoutingTabs = withRouter(Router);

export default RoutingTabs;
