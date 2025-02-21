import './App.css';
import Store from './components/Store';
import img1 from './img/1.jpg';
import img2 from './img/2.jpg';
import img3 from './img/3.jpg';
import img4 from './img/4.jpg';
import img5 from './img/5.jpg';
import img7 from './img/7.jpg';


const productsList = [
  {
    name: 'Nike Metcon 2',
    color: 'red',
    src: img1,
    price: '$130'
  },
  {
    name: 'Nike Metcon 2',
    color: 'green',
    src: img2,
    price: '$130'
  },
  {
    name: 'Nike Metcon 2',
    color: 'blue',
    src: img3,
    price: '$130'
  },
  {
    name: 'Nike Metcon 2',
    color: 'black',
    src: img4,
    price: '$130'
  },
  {
    name: 'Nike Free Run',
    color: 'black',
    src: img7,
    price: '$170'
  },
  {
    name: 'Nike Metcon 3',
    color: 'green',
    src: img5,
    price: '$150'
  }
]

function App() {
  return (
    <div className="App">
      <Store products={productsList}/>
    </div>
  );
}

export default App;
