import React, { Component } from 'react'
import { ConnectedRouter } from 'connected-react-router'
import routeHistory from 'route-history'
import { Switch, Route } from 'react-router-dom'
import { StyledContainer } from './Rates/style';
import { Layout } from 'antd'
import styled from 'styled-components'

import NotFound from './NotFound'
import Rates from './Rates'
import Header from './Header'
import { ProgressPlugin } from 'webpack'

const { Content } = Layout

function App(props) {
  return (
    <ConnectedRouter history={routeHistory}>
      <Layout style={{ minHeight: '100%' }}>
        <Header>Chat-solution</Header>
        <StyledContainer>
          <div style={{color: props.color}}>
            <h1>Hello World</h1>
          </div>
        </StyledContainer>
      </Layout>
    </ConnectedRouter>
  )
}

export default styled(App)`
    background:#001529;
  .ant-layout-header{
    height:60px;
    background:#001529;
    display:flex;
    align-items:center;
  }
`