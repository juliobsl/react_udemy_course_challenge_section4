import './App.css';
import Carros from './components/Carros';

function App() {
  const cars=[
    {id:1,brand:'Ferrari',color:'Amarela',newCar:true,km:0},
    {id:2,brand:'KIA',color:'Branco',newCar:true,km:34000},
    {id:3,brand:'Renault',color:'Azul',newCar:false,km:1500}
  ];
  return (
    <div className="App">
     <h1>Carros</h1>
     {cars.map((car)=>(
      <Carros key={car.id}
      brand={car.brand} 
      km={car.km} 
      color={car.color} 
      newCar={car.newCar}/>
     ))}
     
    </div>
  );
}

export default App;
