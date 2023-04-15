import "../sass/Contacthero.scss"

export default function ContactHero() {
  return (
    <div className='contact-hero-container'>
      <div className="text-header">
            <h1>Hilaga Studio</h1>
      </div>
      <div className="contact-hero-container">
        <div className="contact-info-item-container">
          <div className="contact-info-item">
            <div className="social-media-item">
                <span>Address: 179 Upper Bonifacio St, Baguio, 2600 Benguet</span>
            </div>
            <div className="social-media-item">
                <span>Tel: 0969 609 1484</span>
            </div>
            <div className="social-media-item">
                <span>Mail: <a href=""> hilagastudios@gmail.com </a></span>
            </div>
          </div>
          <div className="social-media-item-container">
            <div className="social-media-item">
                <span>Facebook:</span>
            </div>
            <div className="social-media-item">
                <span>Instagram:</span>
            </div>
            <div className="social-media-item">
                <span>Youtube:</span>
            </div>
          </div>
        </div>
        <div className="input-field-container">
          <form action="">
            <div className="input-field">
                <input placeholder="Name" type="text"/>
            </div>
            <div className="input-field">
                <input placeholder="Email" type="text" />
            </div>
            <div className="input-field">
                <textarea placeholder="Message" name="" id=""></textarea>
            </div>
            <div className="input-field">
                <button>Send</button>
            </div>
          </form>
        </div>
      </div> 
    </div>
  )
}
