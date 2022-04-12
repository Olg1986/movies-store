import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './pages/Home/Home'
import MoviePage from './pages/Movie/Movie-Page'
import OrderPage from './pages/order/Order-Page'
import Header from './components/header/Header'
import Layout from './components/layout/Layout'


function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Header/>
        </Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/app/:title" element={<MoviePage/>} />
          <Route path="/order" element={<OrderPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
