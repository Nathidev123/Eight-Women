import eight from '../assets/horizontaleight.png';
import { FaComments } from "react-icons/fa";
import './Vision.css'
const VisionMission = () => {
    return (
        <section className="mission-section">

            <div className="mission-header">

                <span className="section-tag">
                    OUR PURPOSE
                </span>

                <h1>
                    Building Peace
                    <span>Through Conversation</span>
                </h1>

                <p>
                    Lasting peace begins when people gather around the same table,
                    listen with empathy, share ideas openly and work together
                    towards justice, healing and meaningful community action.
                </p>

            </div>


            <div className="conversation-visual">

                <div className="orange-blob blob-one"></div>
                <div className="orange-blob blob-two"></div>

                <div className="conversation-image">
                    <img
                        src={eight}
                        alt="Building Peace Through Dialogue"
                    />
                </div>

                <span className="visual-caption">
                    DIALOGUE • COMMUNITY • ACTION
                </span>

            </div>


            <div className="vm-intro">

                <span className="section-tag">
                    OUR DIRECTION
                </span>

                <h2>
                    From conversation<br />
                    to meaningful action.
                </h2>

            </div>


            <div className="conversation-flow">

                <article className="speech speech-mission">

                    <span className="speech-tag">
                        01 / MISSION
                    </span>

                    <h3>
                        Our Mission
                    </h3>

                    <p>
                        To encourage South Africans to transform anger into
                        constructive action by promoting peaceful protest,
                        collective safety, accountability and community-led
                        peacebuilding while preventing violence and protecting
                        lives.
                    </p>

                </article>


                <div className="dialogue-line">

                    <div className="dialogue-circle">
                        <FaComments />
                    </div>

                </div>


                <article className="speech speech-vision">

                    <span className="speech-tag">
                        02 / VISION
                    </span>

                    <h3>
                        Our Vision
                    </h3>

                    <p>
                        A South Africa where justice and peace coexist; where
                        people's grievances are heard, communities are safe,
                        dignity is protected, leaders are accountable and
                        social change is achieved without violence.
                    </p>

                </article>

            </div>

        </section>
    );
};

export default VisionMission;