import './App.css';
import NavBar from './Components/NavBar';
import Main from './Components/Main';
import Row from './Components/Row'
import requests from './Config';

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Row title={"Popular"} url={requests.requestPopular} />
      <Row title={"Trending"} url={requests.requestTrending} />
      <Row title={"Top Rated"} url={requests.requestTopRated} />
      <Row title={"Upcoming"} url={requests.requestUpcoming} />
    </>
  );
}

export default App;
