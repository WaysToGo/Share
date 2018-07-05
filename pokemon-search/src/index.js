import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import List from './components/list/List'

import registerServiceWorker from './registerServiceWorker';

const App=()=>{
    return <div>
       <List/>
    </div>
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
