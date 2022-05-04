import { Container, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import { MovieItem } from './MovieItem/MovieItem'
import { Modal } from './Modal/Modal'
// you can access the sample dataset with:
import movieData from '../../movies.json'
import './App.scss';
import { useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)

  const openModal = (movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const BASE_URL = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className="App">
      <div className='movie_title'>Movie Guide</div>
      <div className='movie_contaner'>
          {
            movieData && movieData.map((movie) => {
              return (
                <MovieItem movie={movie} openModal={openModal} baseUrl={BASE_URL}/>
              )
            })
          }
      </div>
      
      {
        showModal && <div className='modal_container' onClick={() => closeModal()}>
          <Modal handleClose={closeModal} movie={selectedMovie} baseUrl={BASE_URL}/>
        </div>
      }
      {
        showModal && <div className='modal_bg' onClick={() => closeModal()}></div>
      }
    </div>
  );
}

export default App;
