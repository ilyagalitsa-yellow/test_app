import React, { Component, ReactNode } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import routeHistory from 'route-history';
import { Switch, Route } from 'react-router-dom';
import { StyledContainer } from './Rates/style';
import { Layout } from 'antd';
import styled from 'styled-components';
import { View } from '../entities/View';
import Full from './representations/Full';
import Bubble from './representations/Bubble';
import NewWindow from './representations/NewWindow';
import Rates from './Rates';
import Header from './Header';
import { ProgressPlugin } from 'webpack';

const { Content } = Layout;

function App({ color, view }) {
  const applyRepresentation = (): ReactNode => {
    switch (view) {
      case View.BUBBLE:
        return <Bubble color={color} />;
      case View.NEW_WINDOW:
        return <NewWindow />;
      default:
        return <Full color={color} />;
    }
  };
  return (
    <ConnectedRouter history={routeHistory}>
      {applyRepresentation()}
    </ConnectedRouter>
  );
}

export default App;