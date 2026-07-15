import { Link } from "react-router-dom";
import "./footer.css";

function Footer(){

    return(

        <footer className="footer">

            <div className="container footer-container">

                <div className="footer-top">

                    <div className="footer-brand">

                        <h2>PULSE</h2>

                        <p>

                            Personal Health Monitoring System

                        </p>

                        <span>

                            Monitor Health. Protect Lives.

                        </span>

                    </div>

                    <div className="footer-links">

                        <Link to="/">Home</Link>

                        <Link to="/products">Products</Link>

                        <Link to="/technology">Technology</Link>

                        <Link to="/applications">Applications</Link>

                        <Link to="/contact">Contact</Link>

                    </div>

                </div>

                <div className="footer-bottom">

                    <p>

                        © 2026 PULSE. All Rights Reserved.

                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;