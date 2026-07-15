import "./pulse.css";

function Pulse() {

    const features = [

        "Heart Rate",
        "Respiration",
        "Sleep Analysis",
        "Sudden Apnea",
        "Call Alerts",
        "Telegram Alerts",
        "Status Light",
        "Works Offline"

    ];

    return(

        <section className="pulse" id="pulse">

            <div className="container pulse-container">

                <div className="pulse-image">

                    <div className="pulse-placeholder">

                        PULSE IMAGE

                    </div>

                </div>

                <div className="pulse-content">

                    <span className="section-tag">

                        CORE DEVICE

                    </span>

                    <h2>

                        PULSE

                    </h2>

                    <p>

                        Pulse is the intelligent monitoring unit of the ecosystem. It continuously monitors heart rate, respiration rate and sleep while detecting sudden apnea. When an abnormal condition is detected, Pulse immediately alerts the caregiver through Echo, Call Alerts and Telegram notifications.

                    </p>

                    <div className="feature-chips">

                        {features.map((item,index)=>(

                            <span
                                className="feature-chip"
                                key={index}
                            >

                                {item}

                            </span>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Pulse;