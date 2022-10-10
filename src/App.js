
import BasicExample from "./Boostrap/Boostrap"
import Movie from './Boostrap/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      {Movie.map((item,index)=><BasicExample key={index} item={item}/>)}
    </div>
  );
}

export default App;
