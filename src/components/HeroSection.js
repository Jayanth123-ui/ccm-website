import '../styles/HeroSection.css';

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-content">
      {/* Left Column */}
      <div className="hero-left">
        <h1 className="hero-headline">
          Enhance Patient Care.<br />
          Watch your Practice Thrive
        </h1>
        <h2 className="hero-benefits">
        Deliver more connected, effective care that keeps patients engaged and supported.<br/>
          Reduce hospitalizations and grow your practice effortlessly.
        </h2>
        <button className="hero-cta">Schedule A Demo</button>
        <div className="hero-badges">
          <div className="hero-badge">
            <img src="/images/hipaa.jpg" alt="HIPAA Compliant" />
          </div>
          {/* <div className="hero-badge">
            <img src="/badges/soc2.svg" alt="SOC2" />
          </div> */}
          {/* <div className="hero-rating">
            <div className="hero-avatars">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt="User" className="hero-avatar" />
              ))}
            </div>
            <div className="hero-rating-stars">
              <span className="hero-rating-score">4.9/5</span>
              <span className="hero-stars">
                {'★'.repeat(5)}
              </span>
              <span className="hero-rating-label">Rating</span>
            </div>
          </div> */}
        </div>
      </div>
      {/* Right Column */}
      <div className="hero-right">
        <div className="hero-patient-media">
          <video
            src="./video.mp4"
            className="hero-patient-video"
            autoPlay
            loop
            muted
            playsInline
            poster="/images/patient.jpg"
            style={{}}
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
