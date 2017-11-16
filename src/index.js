import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import configureStore from './store/index';


import Main from './components/main';

import './styles/app.scss';

class App extends React.Component {
    render () {
        return (
            <Provider store={configureStore()}>
                   <Main />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));