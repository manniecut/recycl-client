import React from 'react';
import ReactDOM from 'react-dom';
import RecyclHeader from './RecyclHeader';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div /> , div);
});