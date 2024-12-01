import './App.css';

//components 
import Login from './components/account/login';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <div style={{ marginTop: 64 }}> 
      <DataProvider>
        <Login/>
      </DataProvider>
    </div>
  );
}

export default App;
