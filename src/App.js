import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

// Component Start 
function App() {
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setHeros(data))
  }, []);
  // const heros = [
  //   {name: 'Aamir Khan', age: 56}, 
  //   {name: 'Shahrukh Khan', age: 60}, 
  //   {name: 'Salman Khan', age: 59}, 
  //   {name: 'Imran Hashmi', age: 54},
  //   {name: 'Akshay Kumar', age: 60},
  //   {name: 'Amitab Bachchan', age: 80}
  // ]
  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      {
        heros.map(hro => <Hero name = {hro.name} key = {hro.id} website = {hro.website}></Hero>)
      }
      {/* <Hero heroName = {heros[1]}age = '56'></Hero>
      <Hero heroName = {heros[2]}></Hero>
      <Hero heroName = {heros[0]}></Hero>
      <Hero heroName = {heros[3]}></Hero> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}
// Component End
// Movie Component 
function MovieCounter() {
  // UseState destructure
  const [count,setCount] = useState(0);
  // console.log(count,setCount);
  const handleClick = () => setCount(count + 1);
  return(
    <div>
      {/* EventListener */}
      <button onClick = {handleClick}>Add Movie</button>
      <h3>Number of movies: {count}
      </h3>
      <MovieDisplay movies = {count}></MovieDisplay>
      <MovieDisplay movies = {count}></MovieDisplay>
      <MovieDisplay movies = {count + 10}></MovieDisplay>
      <MovieDisplay movies = {count + 5}></MovieDisplay>
      <MovieDisplay movies = {count}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props) {
  return <h4>Movies I have acted: {props.movies}</h4>
}
// Another(Hero) Component making
function Hero(props) {
  // console.log(props.heroName)
  const heroStyle = {
    border: '2px solid pink',
    margin: '20px'
  }
  return (
  <div style = {heroStyle}>
    <h1>I am Hero: {props.name}</h1>
    <h3>My Website: {props.website}</h3>
  </div>)
}

export default App;
