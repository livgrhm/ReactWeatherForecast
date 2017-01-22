import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from '../components/SearchForm';
import { API_VARS } from '../lib/constants';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm value={API_VARS.initSearch} />, div);
});
