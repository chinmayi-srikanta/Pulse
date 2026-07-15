import "./hero.css";

function Hero() {

    return (

        <section className="hero">

            <div className="hero-glow hero-glow1"></div>
            <div className="hero-glow hero-glow2"></div>

            <div className="container hero-container">

                <div className="hero-content">

                    <span className="hero-tag">

                        PERSONAL HEALTH MONITORING

                    </span>

                    <h1>

                        Monitor Health.
                        <br />
                        Protect Lives.

                    </h1>

                    <button className="hero-btn">

                        Explore Products →

                    </button>

                </div>

                <div className="hero-image">

                    <div className="device-placeholder">

                        <span>PULSE DEVICE</span>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;