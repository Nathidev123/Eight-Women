
import members from "../data/members";
import { useParams, useNavigate } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaArrowLeft } from "react-icons/fa";
import "./MemberProfile.css";

const MemberProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const member = members.find(
        (m) => m.id === Number(id)
    );

    if (!member) {
        return (
            <main className="member-not-found">
                <div>
                    <span>Eight Women</span>
                    <h2>Member not found</h2>
                    <button onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="member-page">

            {/* ==========================================
                BACK NAVIGATION
            ========================================== */}

            <button
                className="back-btn"
                onClick={() => navigate(-1)}
            >
                <FaArrowLeft />
                <span>Back to Eight Women</span>
            </button>


            {/* ==========================================
                MEMBER INTRO
            ========================================== */}

            <section className="member-intro">

                <div className="member-intro-image">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="member-profile-image"
                    />

                    <span className="image-accent"></span>
                </div>


                <div className="member-intro-content">

                    <p className="profile-eyebrow">
                        Meet the Eight Women
                    </p>

                    <h1>{member.name}</h1>

                    <div className="role-line">
                        <span></span>
                        <p>{member.role}</p>
                    </div>

                </div>

            </section>


            {/* ==========================================
                ABOUT
            ========================================== */}

            <section className="member-about">

                <div className="section-label">
                    <span>01</span>
                    <p>About</p>
                </div>

                <div className="about-content">

                    <h2>
                        A voice for
                        <span> peace and change.</span>
                    </h2>

                    <p className="member-bio">
                        {member.bio}
                    </p>

                </div>

            </section>


            {/* ==========================================
                CONTACT
            ========================================== */}

            <section className="member-contact">

                <div className="section-label">
                    <span>02</span>
                    <p>Connect</p>
                </div>

                <div className="contact-content">

                    <div className="contact-heading">
                        <h2>
                            Connect with<br />
                            <span>{member.name}</span>
                        </h2>

                        <p>
                            For enquiries, conversations and
                            opportunities to engage with the work
                            of Eight Women.
                        </p>
                    </div>


                    <div className="contact-details">

                        <a
                            href={`mailto:${member.email}`}
                            className="contact-link"
                        >
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>

                            <div>
                                <span>Email</span>
                                <p>{member.email}</p>
                            </div>
                        </a>


                        <a
                            href={`tel:${member.phone}`}
                            className="contact-link"
                        >
                            <div className="contact-icon">
                                <FaPhoneAlt />
                            </div>

                            <div>
                                <span>Phone</span>
                                <p>{member.phone}</p>
                            </div>
                        </a>

                    </div>

                </div>

            </section>


            {/* ==========================================
                FEATURED INTERVIEWS
            ========================================== */}

            {member.videos && member.videos.length > 0 && (

                <section className="member-videos">

                    <div className="section-label">
                        <span>03</span>
                        <p>In Conversation</p>
                    </div>


                    <div className="videos-heading">

                        <h2>
                            Featured
                            <span> Interviews</span>
                        </h2>

                        <p>
                            Hear directly from {member.name} through
                            conversations, interviews and reflections.
                        </p>

                    </div>


                    <div className="video-list">

                        {member.videos.map((video, index) => (

                            <article
                                key={index}
                                className="video-item"
                            >

                                <div className="video-frame">

                                    <iframe
                                        width="100%"
                                        height="315"
                                        loading="lazy"
                                        src={video.url}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />

                                </div>


                                <div className="video-info">

                                    <span>
                                        Interview {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <h3>
                                        {video.title}
                                    </h3>

                                </div>

                            </article>

                        ))}

                    </div>

                </section>

            )}


            {/* ==========================================
                FOOTER STATEMENT
            ========================================== */}

            <section className="member-closing">

                <p>
                    Eight Women
                </p>

                <h2>
                    Building Peace Together.
                </h2>

            </section>

        </main>
    );
};

export default MemberProfile;

