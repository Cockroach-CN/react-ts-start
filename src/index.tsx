import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './pages/App';
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from "antd";
import zhCN from 'antd/lib/locale-provider/zh_CN';

class Root extends React.Component<any, any>{
    public render() {
        return <LocaleProvider locale={zhCN} ><App /></LocaleProvider>
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
