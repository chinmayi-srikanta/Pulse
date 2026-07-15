import "./echo.css";

function Echo() {

    const features = [

        "Audible Alarm",
        "Wireless Communication",
        "Receives Pulse Alerts",
        "One Touch Silence",
        "Instant Emergency Alert",
        "Indoor Monitoring"

    ];

    return(

        <section className="echo" id="echo">

            <div className="container echo-container">

                <div className="echo-image">

                    <div className="echo-placeholder">

                        ECHO IMAGE

                    </div>

                </div>

                <div className="echo-content">

                    <span className="section-tag">

                        WIRELESS ALARM

                    </span>

                    <h2>

                        ECHO

                    </h2>

                    <p>

                        Echo is the wireless alarm unit of the PULSE ecosystem. It instantly receives alerts from Pulse or Tap and produces an audible alarm to notify nearby caregivers. The alarm can be acknowledged with a simple touch.

                    </p>

                    <div className="feature-chips">

                        {features.map((item,index)=>(

                            <span className="feature-chip" key={index}>

                                {item}

                            </span>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Echo;