import { Space } from 'antd';
import './App.css';
import Header from './components/Header';
import Table1 from './components/Table';


function App() {
  return (
    <>
      <Space direction="vertical" size="middle">
        <Header />
        <Table1 />
      </Space>
    </>
  );
}

export default App;