import './App.css';
import Box from './Box';
import BoxList from './BoxList';

function App() {
  return (
    <div className="App">
      {/* <BoxList /> */}
      <Box color='red' width={150} height={150}/>
      <Box color='blue' width={150} height={150}/>

    </div>
  );
}

export default App;
