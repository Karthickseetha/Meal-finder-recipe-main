import './home.styles.scss';
import { FaFacebook,FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home-container">
            <section className="ads-section">
                <h2>Discover Delicious Recipes!</h2>
                <div className="ad-container">
                    <Link to='./recipe'><img src="https://media.istockphoto.com/id/1498193553/photo/vegetable-hakka-noodles.jpg?s=612x612&w=0&k=20&c=aKhskkX72TwJAfXeLpvNc4yZr7i7HYlD9zENQdpJV8I="
                     alt="recipes" /></Link>
                   <Link to='./recipe'> <img src="https://media.istockphoto.com/id/1324029486/photo/curd-rice-with-pomegranate-cilantro-mustard-seeds-ginger-indian-cuisine.jpg?s=612x612&w=0&k=20&c=4x_EYgpDhf7EuIHOq0_tRWxMYMOye2pyXEu3TT2Daso=" 
                    alt="recipes" /></Link>
                   <Link to='./recipe'> <img src="https://media.istockphoto.com/id/1980431382/photo/fafda-namkeen.jpg?s=612x612&w=0&k=20&c=B0X4Z1iPsN-C6S75tPxzwU0xN8mCxSoxbe9w6IStrP0="
                     alt="recipes" />
                    </Link>
                </div>
            </section>

            <section className="recipes-section">
               <h2>Welcome to Our Recipe Collection</h2>
                <p>Explore a wide range of mouth-watering recipes crafted by our expert chefs. From appetizers to desserts, we have something for every palate. Whether you're a seasoned cook or just starting out, our easy-to-follow recipes will help you create delicious meals that will impress your family and friends.</p>
                 <p>Get ready to embark on a culinary adventure and unleash your inner chef with our collection of delectable recipes!</p>
                <button className="explore-button"><Link to='./recipe'>Explore Now</Link></button>
            </section>

            {/* Footer */}
            <footer className="footer-section">
                <div className="footer-content">
                    <h2>Contact Us</h2>
                    <p>Email: tastu@recipes.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="footer-content">
                    <Link to='./' className='link'>Home</Link>
                    <Link to='./recipe' className='link'>Recipe</Link>
                    <Link to='./auth' className='link'>signin</Link>

                </div>
                <div className="footer-content">
                    <h2>Follow Us</h2>
                    <div className="social-media-icons">
                       <FaFacebook className='icons'/>
                       <FaSquareXTwitter className='icons'/>
                        <FaInstagramSquare className='icons'/>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
