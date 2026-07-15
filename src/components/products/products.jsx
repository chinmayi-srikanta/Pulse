import "./products.css";
import { Link } from "react-router-dom";
function Products() {

    const products = [

        {
            title:"PULSE",
            image:"",
            description:"Monitors heart rate, respiration, sleep quality and detects sudden apnea."
        },

        {
            title:"TAP",
            image:"",
            description:"Wireless touch button for instant caregiver assistance with vibration feedback."
        },

        {
            title:"ECHO",
            image:"",
            description:"Wireless alarm unit that alerts nearby caregivers during emergencies."
        }

    ];

    return(

        <section className="products">

            <div className="container">
                
                <span className="section-tag">

                    OUR PRODUCTS

                </span>
<h4>
                     Built for Every Need

                </h4>
                

                <div className="products-grid">

                    {products.map((item,index)=>(

                        <div className="product-card" key={index}>

                            <div className="product-image">

                                {item.image==="" ?

                                    <div className="image-placeholder">

                                        {item.title}

                                    </div>

                                    :

                                    <img src={item.image} alt={item.title}/>

                                }

                            </div>

                            <h3>

                                {item.title}

                            </h3>

                            <p>

                                {item.description}

                            </p>

                            <Link
    to={`/products#${item.title.toLowerCase()}`}
    className="learn-btn"
>

    Learn More →

</Link>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Products;