import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import '@/assets/global.css';
import { ConfigProvider } from 'antd';
// 渲染组件
ReactDOM.render(
  <ConfigProvider locale={zh_CN}>
    <App />
  </ConfigProvider>,
  document.getElementById('root')
);
