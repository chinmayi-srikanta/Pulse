import { useState } from "react";
import "./features.css";

import {
    HeartPulse,
    Activity,
    Moon,
    Bed,
    PhoneCall,
    Bell,
    WifiOff,
    ChevronDown
} from "lucide-react";

function Features() {

    const [active, setActive] = useState(null);

    const features = [

        {
            title:"Heart Rate Monitoring",
            icon:<HeartPulse size={22}/>,
            description:"Continuously monitors heart rate and instantly detects abnormal changes."
        },

        {
            title:"Respiration Monitoring",
            icon:<Activity size={22}/>,
            description:"Tracks breathing patterns throughout the day and night."
        },

        {
            title:"Sleep Analysis",
            icon:<Moon size={22}/>,
            description:"Provides sleep quality analysis with deep and light sleep detection."
        },

        {
            title:"Apnea Detection",
            icon:<Bed size={22}/>,
            description:"Detects sudden apnea events and alerts caregivers immediately."
        },

        {
            title:"Call Alerts",
            icon:<PhoneCall size={22}/>,
            description:"Automatically places a missed call alert to the caregiver."
        },

        {
            title:"Echo Alarm",
            icon:<Bell size={22}/>,
            description:"Triggers the Echo alarm unit during emergencies."
        },

        {
            title:"Offline Monitoring",
            icon:<WifiOff size={22}/>,
            description:"Works without internet after initial Wi-Fi configuration."
        }

    ];

    return(

        <section className="features">

            <div className="container">

                <span className="section-tag">

                    WHY CHOOSE PULSE

                </span>

                <h2>

                    Advanced Features for Better Care

                </h2>

                <div className="features-layout">

                    <div className="accordion">

                        {features.map((item,index)=>(

                            <div
                                className={`accordion-item ${active===index?"active":""}`}
                                key={index}
                                onClick={() =>
    setActive(active === index ? null : index)
}
                            >

                                <div className="accordion-header">

                                    <div className="feature-title">

                                        {item.icon}

                                        <span>{item.title}</span>

                                    </div>

                                    <ChevronDown
                                        className={active===index?"rotate":""}
                                        size={20}
                                    />

                                </div>

                                {active===index && (

                                    <div className="accordion-body">

                                        <p>

                                            {item.description}

                                        </p>

                                    </div>

                                )}

                            </div>

                        ))}

                    </div>

                    <div className="feature-preview">

                        <div className="preview-glow"></div>

                        <div className="preview-image">

                            IMAGE

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Features;