import React, {ChangeEvent, useState} from "react";
import '../styles/contact.css';
import Button from '../components/common/button';
import {Simulate} from "react-dom/test-utils";
import Thankyou from './../images/thankyou.jpeg';


interface FormData {
    name: string;
    email: string;
    phone: string;
    contactReason: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        contactReason: '',
        message: ''
    });

    const handleChange = ((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return(
        <div className="contact-page">
            <div className="main-text">
                <h1> GET IN TOUCH WITH US</h1>
                <p>Your feedback and donations are vital to our mission, do reach out with any questions, suggestions, or
                    insights to help us better serve the community.</p>

            </div>
            <div className="container">
                {/*<h1 className="side-text">Your voice matters to us reach out anytime!</h1>*/}
                <img src={Thankyou} className="side-image" alt="Image from event"/>
                <form method="POST" className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" id="name" name="name" placeholder="Full Name" value={formData.name}
                               onChange={handleChange} required/>
                        <input type="email" id="email" name="email" placeholder="Email Address" value={formData.email}
                               onChange={handleChange} required/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="phone" name="phone" placeholder="Phone Number" value={formData.phone}
                               onChange={handleChange} required/>
                        <select id="contactReason" name="contactReason" value={formData.contactReason}
                                onChange={handleChange} required>
                            <option value="" disabled>Subject</option>
                            <option value="donation">Donation</option>
                            <option value="enquiries">Enquiries</option>
                            <option value="volunteer">Volunteer</option>
                            <option value="partnerships">Partnerships</option>
                            <option value="feedback">Feedback</option>
                            <option value="sponsorship">Sponsorship</option>
                            <option value="media">Media Inquiries</option>
                            <option value="membership">Membership</option>
                            <option value="events">Events</option>
                            <option value="general">General Information</option>
                        </select>
                    </div>
                    <textarea
                        name="comment" placeholder="Write a Comment" value={formData.message} onChange={handleChange}
                        required></textarea>
                    <Button type="submit">Submit</Button>
                </form>
            </div>

        </div>
    );
}

export default ContactForm;