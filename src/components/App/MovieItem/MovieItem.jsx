import moment from 'moment';
import './MovieItem.scss';


export const MovieItem = (props) => {
  const { movie, openModal,baseUrl } = props
  const {
    id,
    release_date,
    poster_path,
    title,
    vote_average,
  } = movie
  const RELEASE_DATE = moment(release_date, "YYYY-MM-DD").format("LL")
  return (
    <div key={id} className='movie-item' onClick={() => openModal(movie)}>
      <img src={baseUrl + poster_path} />
      <div className=''>
        <div className='movie-item__title'>{title}</div>
      </div>
      <div className="movie-item__details">
        <div className='date'>{RELEASE_DATE}</div>
        <div className='rating'><i class="fas fa-star"></i>
          {vote_average} </div>
      </div>
    </div>)
}