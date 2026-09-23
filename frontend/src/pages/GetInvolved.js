import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import volunteer from '../assets/volunteer.jpg'
import attend from '../assets/attend2.png'
import donation from '../assets/donation.jpg'
import sponsor from '../assets/sponsor.jpg'
import { IoLocationSharp, IoCheckmarkCircle, IoCloseCircle, IoClose } from "react-icons/io5";
import './GetInvolved.css' 
const GetInvolved = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(null)
    const [loading, setLoading] = useState(false);

    

    const handleSubmit = (e) => {
        e.preventDefault()
        const validatePhone = phoneNumber.replace(/\D/g, '');

        if (!/^0\d{9}$/.test(validatePhone)) {
        setAlert({
            type: 'error',
            message: 'Please enter a valid South African phone number.'
        });

        return;
    }
        setLoading(true);
        
    //EmailJS service ID, template ID, public key
    const serviceId = 'service_gww7xur'
    const templateId = 'template_tqe19wu'
    const publicKey = 'eCS5a5yRYSaLDbX4R'

    //Creating object that contains dynamic template params
    const templateParams = {
        from_name: name, 
        from_email: email,
        phone: validatePhone,
        message: message,
        to_name: 'Eight Women'
    }

    //Sending email with EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response) => {
        console.log('Email sent successfully', response)
        setAlert({ type: 'success', message: 'Your message has been sent. Thank you for reaching out. We will get back to you shortly'})
        setName('')
        setEmail('')
        setMessage('')
        setPhoneNumber('')
        setLoading(false)

        setTimeout(() => {
            setAlert(null)
        }, 5000);
    })
    .catch((error) => {
        console.error('Error sending email:', error)
        setLoading(false);
        setAlert({
        type: 'error',
        message: 'We were unable to send your message. Please try again or contact us directly.'
        })

        setTimeout(() => {
        setAlert(null);
    }, 5000);
        
    })

}    

    return(<>
            <section className="ways-involved-section">

                <div className="ways-intro">
                    <span>HOW YOU CAN HELP</span>
                    <h1>Ways To Get Involved</h1>
                    <p>
                        There are many ways to support Eight Women and contribute
                        to the work we do in our communities.
                    </p>
                </div>

                <div className="involvement-item involvement-left">
                    <div className="involvement-image">
                        <img src={volunteer} alt="Volunteering with Eight Women" />
                    </div>

                    <div className="involvement-content">
                        <span>01</span>
                        <h2>Volunteer</h2>
                        <p>
                            Volunteers are at the heart of our work. Whether you can
                            give a few hours, support us regularly, or contribute your
                            skills to a specific project, your time and commitment make
                            a meaningful difference.
                        </p>
                        
                    </div>
                </div>


                <div className="involvement-item involvement-right">
                    <div className="involvement-content">
                        <span>02</span>
                        <h2>Become A Partner Or Sponsor</h2>
                        <p>
                            Meaningful change is built through collaboration. By becoming
                            a partner or sponsor, you help us expand our reach, strengthen
                            our programmes, and create lasting opportunities for the
                            communities we serve.
                        </p>
                    
                    </div>

                    <div className="involvement-image">
                        <img src={sponsor} alt="Eight Women partnership and sponsorship" />
                    </div>
                </div>


                <div className="involvement-item involvement-left">
                    <div className="involvement-image">
                        <img src={attend} alt="Attending an Eight Women event" />
                    </div>

                    <div className="involvement-content">
                        <span>03</span>
                        <h2>Attend Our Events</h2>
                        <p>
                            Our events provide opportunities to learn, connect, and be
                            part of meaningful conversations that inspire positive change.
                            Your presence helps strengthen our collective voice.
                        </p>
                        
                    </div>
                </div>

            </section>


            <section className="donate-container">

                <div className="donation-feature">

                    <div className="donation-content">
                        <span>04</span>
                        <h2>Make A Donation</h2>

                        <p>
                            Every donation, no matter the size, helps us continue our
                            work and expand our impact. Your generosity supports our
                            programmes, community initiatives, advocacy efforts, and
                            opportunities for healing and empowerment.
                        </p>

                        
                    </div>

                    <div className="donation-image">
                        <img src={donation} alt="Supporting Eight Women's work" />
                    </div>

                </div>

            </section>

            

            <section className='get-involved'>
                <div className='involved'>
                <h1>Get Involved With Eight Women</h1>
                <p>
                Whether you'd like to volunteer, become a partner or sponsor, attend our events, or support our work through a donation, we'd be 
                delighted to hear from you. Complete the form below, and we'll be in touch to discuss how you can become part of the Eight Women 
                community. We look forward to welcoming you.
                </p>
                </div>

           <div className="contact-details">

            <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                    <h3>Call Us</h3>
                    <a href='tel:0815556358'>0815556358</a>
                </div>
            </div>

            <div className="contact-item">
                <MdEmail className="contact-icon" />
                <div>
                    <h3>Email Us</h3>
                    <p>eightwomen@icloud.com</p>
                </div>
            </div>

            <div className="contact-item">
                <IoLocationSharp className="contact-icon" />
                <div>
                    <h3>Visit Us</h3>
                    {/* when get real address will link to google maps    */}
                    <p>
                        Second Floor Orange Drive, National Office,
                        Block C, Braamfontein, Johannesburg 1756
                    </p>
                </div>
            </div>

        </div>
            </section>

            <section className='email-container'>

            <div className='email-form'>
            <form onSubmit={handleSubmit}
             className="emailForm"
             id='emailForm'>
            <h1><strong>Contact Us</strong></h1>
            <input 
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength="50"
            required
            />
            <input 
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength="260"
            required
            />
            <input 
            type="tel"
            inputMode='numeric'
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            maxLength="12"
            required
            />
            <textarea
            cols="30"
            placeholder="Your Message"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength="2500"
            required>
            
            </textarea>
                {alert && (
            <div className={`form-alert form-alert-${alert.type}`}>
                <div className="form-alert-icon">
                    {alert.type === 'success' 
                        ? <IoCheckmarkCircle /> 
                        : <IoCloseCircle />
                    }
                </div>

                <div className="form-alert-content">
                    <strong>
                        {alert.type === 'success' ? 'Message Sent' : 'Something Went Wrong'}
                    </strong>

                    <p>{alert.message}</p>
                </div>

                <button 
                    type="button" 
                    className="form-alert-close"
                    onClick={() => setAlert(null)}
                    aria-label="Close notification"
                >
                    <IoClose />
                </button>
            </div>
        )}
            <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
        </button>
           <p className="privacy-notice">
            By submitting this form, you acknowledge that the information you
            provide may be processed by Eight Women to respond to your enquiry.
            Please see our{" "}
            <Link to="/privacy-policy">Privacy Policy</Link>
            {" "}for more information.
        </p>

            
            
        </form>
            </div>
            </section>

            </>)
}


export default GetInvolved