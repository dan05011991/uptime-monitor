import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Redirect, Route } from 'react-router'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import RoutingTabs from './RoutingTabs'
import Monitors from '../monitors';

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
          render={() => <Redirect to="" />}
        />
        <RoutingTabs
          tabs={[
            {
              label: 'Home',
              slug: '',
              exact: true,
              list: true,
              component: () => wrapper(<Monitors />)
            },
            {
              label: 'Production',
              slug: 'production',
              exact: true,
              list: true,
              component: () => wrapper(<Monitors environment="prod" />)
            },
            {
              label: 'Reference',
              slug: 'reference',
              exact: true,
              list: true,
              component: () => wrapper(<Monitors environment="ref" />)
            },
            {
              label: 'Integration',
              slug: 'integration',
              exact: true,
              list: true,
              component: () => wrapper(<Monitors environment="int" />)
            },
            {
              label: 'Development',
              slug: 'development',
              exact: true,
              list: true,
              component: () => wrapper(<Monitors environment="dev" />)
            }
          ]}
        />
      </div>
    </BrowserRouter>
  )
}
