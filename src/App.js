import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <NavBar />
      <Container className='w-full h-screen pt-24'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
