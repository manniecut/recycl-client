import React from 'react';
import ReactDOM from 'react-dom';
import SelectedType from './SelectedType';

it ('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<div /> , div);
});