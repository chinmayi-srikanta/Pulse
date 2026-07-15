import "./tap.css";

function Tap() {

    const features = [

        "SOS Touch Button",
        "Missed Call Alert",
        "Vibration Feedback",
        "Wireless Communication",
        "Instant Caregiver Alert",
        "Easy Pairing"

    ];

    return(

        <section className="tap" id="tap">

            <div className="container tap-container">

                <div className="tap-content">

                    <span className="section-tag">

                        WIRELESS ACCESSORY

                    </span>

                    <h2>

                        TAP

                    </h2>

                    <p>

                        Tap is a wireless touch button designed to provide immediate caregiver assistance. A simple touch sends an alert to Pulse, allowing caregivers to respond quickly. The built-in vibration feedback confirms that the request has been successfully sent.

                    </p>

                    <div className="feature-chips">

                        {features.map((item,index)=>(

                            <span className="feature-chip" key={index}>

                                {item}

                            </span>

                        ))}

                    </div>

                </div>

                <div className="tap-image">

                    <div className="tap-placeholder">

                        TAP IMAGE

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Tap;