
import{
  BrowserRouter ,
  Route,
  Routes
} from 'react-router-dom'
import './App.css';
import News from './pages/News';
import NewsDetails from './pages/NewsDetails';
import NewsProvider from './context/NewsContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NewsProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<News section={'home'} />} />
            <Route path='/health' element={<News section={'health'} />} />
            <Route path='/opinion' element={<News section={'opinion'} />} />
            
            
            <Route path='/arts' element={<News section={'arts'} />} />
            <Route path='/automobiles' element={<News section={'automobiles'} />} />
            <Route path='/books' element={<News section={'books'} />} />
            <Route path='/fashion' element={<News section={'fashion'} />} />
            <Route path='/movies' element={<News section={'movies'} />} />
            <Route path='/sports' element={<News section={'sports'} />} />
    
            
            <Route path='/technology' element={<News section={'technology'} />} />
            <Route path='/politics' element={<News section={'politics'} />} />
            <Route path='/news-details' element={<NewsDetails />}>
              <Route path=':type/:id' element={<NewsDetails />} />
            </Route>
          </Routes>
          <Footer />
        </NewsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
