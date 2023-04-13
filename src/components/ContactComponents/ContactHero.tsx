import "../sass/Contacthero.scss"

export default function ContactHero() {
  return (
    <div className='contact-hero-container'>
      <div className="text-header">
            <h1>Hilaga Studio</h1>
      </div>
      <div className="contact-hero-container">
        <div className="social-media-item-container">
          <div className="social-media-item">
              <span>facebook</span>
          </div>
          <div className="social-media-item">
              <span>instagram</span>
          </div>
          <div className="social-media-item">
              <span>youtube</span>
          </div>
        </div>
        <div className="input-field-container">
          <div className="input-field">
              <input type="text" />
          </div>
          <div className="input-field">
              <input type="text" />
          </div>
          <div className="input-field">
              <textarea name="" id=""></textarea>
          </div>
        </div>
      </div> 
    </div>
  )
}
