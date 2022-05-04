import './Modal.scss';

export const Modal = (props) => {
  const { movie, handleClose,baseUrl } = props
  const { poster_path, title, overview } = movie

  return (
      <div className='modal-item'>      
            <div className='modal-item__details'>
              <div className='modal-item__details__left'><img src={baseUrl + poster_path}/></div>
              <div className='modal-item__details__right'>
                <h1>{title}</h1>
                <p>{overview}</p>
              </div>
            </div>
            <div className='modal-item__close' onClick={() => handleClose()}>Close</div>
        
      </div>

  )
}

