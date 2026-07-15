import "./packages.css";

function Packages() {

    const packages = [

        {
            title:"PULSE",
            devices:["Pulse"],
            description:"Ideal for continuous personal health monitoring."
        },

        {
            title:"PULSE + TAP",
            devices:["Pulse","Tap"],
            description:"Adds a wireless SOS touch button with vibration feedback."
        },

        {
            title:"PULSE + ECHO",
            devices:["Pulse","Echo"],
            description:"Adds an audible alarm for nearby caregivers."
        },

        {
            title:"COMPLETE SYSTEM",
            devices:["Pulse","Tap","Echo"],
            description:"Complete monitoring ecosystem with monitoring, SOS and audible alerts."
        }

    ];

    return(

        <section className="packages">

            <div className="container">

                <span className="section-tag">

                    AVAILABLE CONFIGURATIONS

                </span>

                <h2>

                    Choose Your Setup

                </h2>

                <div className="packages-grid">

                    {packages.map((item,index)=>(

                        <div className="package-card" key={index}>

                            <h3>{item.title}</h3>

                            <div className="package-devices">

                                {item.devices.map((device,i)=>(

                                    <span key={i}>

                                        {device}

                                    </span>

                                ))}

                            </div>

                            <p>

                                {item.description}

                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Packages;