import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route } from 'react-router'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import RoutingTabs from './RoutingTabs'
import WorksOrders from '../worksOrders';

import './styles/font.css'

export default function NavigationTabs(item) {
  const wrapper = (item) => (
    <Box p={3}>
      <Typography component={'span'}>
        {item}
      </Typography>
    </Box>
  );

  return (
    <BrowserRouter>
      <div>
        <Route
          exact
          path="/"
          render={() => <Redirect to="/works" />}
        />
        <RoutingTabs
          tabs={[
            {
              label: 'Home',
              slug: 'works',
              exact: true,
              list: true,
              component: () => wrapper(<WorksOrders />)
            }
          ]}
        />
      </div>
    </BrowserRouter>
  )
}
