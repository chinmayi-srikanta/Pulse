import "./ecosystem.css";

function Ecosystem() {

    return(

        <section className="ecosystem">

            <div className="container">

                <span className="section-tag">

                    HOW THEY WORK TOGETHER

                </span>

                <h2>

                    One Ecosystem. Complete Protection.

                </h2>

                <div className="ecosystem-flow">

                    <div className="flow-box">

                        Person

                    </div>

                    <div className="flow-arrow">

                        ↓

                    </div>

                    <div className="flow-box primary">

                        PULSE

                    </div>

                    <div className="flow-split">

                        <div>

                            <div className="flow-arrow">↙</div>

                            <div className="flow-box">

                                TAP

                            </div>

                        </div>

                        <div>

                            <div className="flow-arrow">↘</div>

                            <div className="flow-box">

                                ECHO

                            </div>

                        </div>

                    </div>

                    <div className="flow-arrow">

                        ↓

                    </div>

                    <div className="flow-box">

                        Caregiver

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Ecosystem;