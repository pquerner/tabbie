import React from 'react';
import TabGroupList from '../containers/TabGroupList';
import TabGroupListControls from '../containers/TabGroupListControls';

const appStyle = {
  padding: '2em',
  display: 'flex',
  flexDirection: 'column',
  height: '40em',
  width: '30em',
  boxSizing: 'border-box',
};

const titleStyle = {
  marginTop: 0,
  marginBottom: '0.5em',
};

const tabGroupListStyle = {
  flexGrow: 1,
  maxHeight: '17em',
  overflowY: 'auto',
};

export default () =>
  <div style={appStyle}>
    <h1 style={titleStyle}>
      Saved Tab Groups
    </h1>
    <div style={tabGroupListStyle}>
      <TabGroupList />
    </div>
    <TabGroupListControls />
  </div>;
