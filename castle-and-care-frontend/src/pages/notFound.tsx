import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notFound.css';

const NotFoundPage: React.FC = () => {
    return (
        <div className="not-found-container">
            <h1>404 - Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <Link to="/" className="home-link">Go to Homepage</Link>
            <div className="suggestions">
                <h2>Here are some useful links:</h2>
                <ul>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/events">Events</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NotFoundPage;
