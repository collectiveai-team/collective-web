import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const About = () => (
    <section id="about" className="about">
        <div className="row pb-3 text-center">
            <h3 className="col-md-12 mb-5">
                What does Collective.ai stand for?
            </h3>
            <p className="col-md-12 about__desc">
                At Collective, we firmly believe in the power of collaboration and cooperation, not just as business principles, but as foundations of our interaction with society.
                Focused on creating a positive impact, our vision is to be an organization that nurtures and strengthens the social fabric of the communities we are a part of.
                We understand that our work does not unfold in a vacuum, but is an integral part of a broader network that includes suppliers, colleagues, and clients.
                We strive to develop relationships based on mutual respect and a shared commitment to common goals, recognizing that Collective's success is intrinsically linked to the well-being of the communities and individuals with whom we interact.

            </p>
            <p className="col-md-12 about__desc">
                Looking inward at Collective, our strength lies in the diversity and richness of our team.
                We value and promote an environment where cooperation and knowledge sharing are fundamental pillars.
                We passionately believe in what we do and strive to cultivate diverse interests, both personally and professionally.
                We understand that having a rich and multifaceted profile not only benefits the individual but also enriches our professional environment.
                At Collective, each team member brings a unique perspective, contributing to a dynamic and creative work environment where ideas flow and transform into actions that reflect our vision and values.
            </p>
            <h6 className="col-md-12">
                We believe in:
            </h6>
            <ul className="col-md-12 list-inline">
                <li className="list-inline-item">
                    <span className="badge">
                        Data Science for social good
                    </span>
                </li>
                <li className="list-inline-item">
                    <span className="badge">
                        Social responsibility
                    </span>
                </li>
                <li className="list-inline-item">
                    <span className="badge">
                        Non hierarchical structures
                    </span>
                </li>
                <li className="list-inline-item">
                    <span className="badge">
                        Profit sharing
                    </span>
                </li>
            </ul>
        </div>
        <div
            id="team"
            className="row d-none d-md-flex team align-items-center justify-content-center text-center p-5"
        >
            <h3 className="col-12 mb-5">
                Discover our team
            </h3>
            <div className="card-deck col-12">
                <div className="row justify-content-center mb-5">
                    <div className="card col-md-4">
                        <img
                            src="static/jai_circle.png"
                            alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link href="https://www.linkedin.com/in/ariel-haimovici/">
                                    <a
                                        className="zoom-on-hover"
                                        target="_blank"
                                    >
                                        ARIEL HAIMOVICI
                                        <FontAwesomeIcon
                                            className="pl-2"
                                            icon={faLink}
                                        />

                                    </a>
                                </Link>
                            </h5>
                            <p className="card-position">
                                Data Scientist - Researcher
                            </p>
                            <p className="card-text">
                                Physicist turned into data scientist, I am enthusiastic about tackling challenging problems in an interdisciplinary environment. During my phd I did research on neurocience building dynamical models of large scale human brain activity and analyzing physiological signals of brain imaging experiments. I also enjoy teaching, I have given courses of physics, math and data science in different contexts in the past ten years. My less nerdy pastimes include playing football, swimming and gardening.

                            </p>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img
                            src="static/bas_circle.png"
                            alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link href="https://www.linkedin.com/in/bastiansg">
                                    <a
                                        className="zoom-on-hover"
                                        target="_blank"
                                    >
                                        BASTIAN SILVA
                                        <FontAwesomeIcon
                                            className="pl-2"
                                            icon={faLink}
                                        />

                                    </a>
                                </Link>
                            </h5>
                            <p className="card-position">
                                Artificial Intelligence Engineer
                            </p>
                            <p className="card-text">
                                I have been programming all kinds of AI solutions for the last 6 years, but I
                                feel more like a hacker rather than a Data Scientist, I want to use AI as a
                                tool to enhance human life. I'm fond of Nietzsche and Foucault, that's why I try to put careful thought into how we relate with the knowledge and power, and the effects these might have by suppressing life. I love chess, art, robots and projects with social impact. I enjoy fusioning art and the edge of technology.

                            </p>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img
                            src="static/lio_circle.png"
                            alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link href="https://www.linkedin.com/in/lionel-chamorro-8a531a11">
                                    <a
                                        className="zoom-on-hover"
                                        target="_blank"
                                    >
                                        LIONEL CHAMORRO
                                        <FontAwesomeIcon
                                            className="pl-2"
                                            icon={faLink}
                                        />
                                    </a>
                                </Link>
                            </h5>
                            <p className="card-position">
                                Solution & AI Architect
                            </p>
                            <p className="card-text">
                                I have more than a decade of experience in the industry, working as a software developer, then leading development teams and in the last 6 years I have been working as a Data Scientist. Passionate about mathematics, chess and philosophy. I studied mathematics and I was a teacher of several subjects of the career, currently I teach in Machine Learning courses. I am also a member and co-founder of the KuyKuy Foundation, a social impact project.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="card col-md-4">
                        <img
                            src="static/raul_circle.png"
                            alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link href="https://www.linkedin.com/in/rbarub">
                                    <a
                                        className="zoom-on-hover"
                                        target="_blank"
                                    >
                                        RAUL BARRIGA
                                        <FontAwesomeIcon
                                            className="pl-2"
                                            icon={faLink}
                                        />

                                    </a>
                                </Link>
                            </h5>
                            <p className="card-position">
                                Artificial Intelligence Engineer & Dev Ops
                            </p>
                            <p className="card-text">
                                Data Scientist, Physicist, PhD candidate on Ecology. Working on Mathematical Modeling, Complex Systems and Machine Learning since 2015. Enthusiastic reader of Philosophy and love to discuss politics. I think that cooperation and symbiosis are the most needed values for our society and I'm always looking for ways to decrease the social gaps from the community.
                            </p>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img
                            src="static/juli_circle.png"
                            alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link href="https://www.linkedin.com/in/julian-ansaldo/">
                                    <a
                                        className="zoom-on-hover"
                                        target="_blank"
                                    >
                                        JULIAN ANSALDO
                                        <FontAwesomeIcon
                                            className="pl-2"
                                            icon={faLink}
                                        />

                                    </a>
                                </Link>
                            </h5>
                            <p className="card-position">
                                Artificial Intelligence Engineer
                            </p>
                            <p className="card-text">
                                I studied Economics and that opened the door to data science for me. I have been working on the development of AI models for several years. I am passionate about music, board games and science fiction. I am also a teacher, I especially enjoy helping those who want to take their first steps in the world of programming.

                            </p>
                        </div>
                    </div>
                    <div className="card col-md-4">
                        <img
                            src="static/paolo_circle.png"
                            alt=""
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link href="https://www.linkedin.com/in/paolo-donizetti/">
                                    <a
                                        className="zoom-on-hover"
                                        target="_blank"
                                    >
                                        PAOLO DONIZETTI
                                        <FontAwesomeIcon
                                            className="pl-2"
                                            icon={faLink}
                                        />

                                    </a>
                                </Link>
                            </h5>
                            <p className="card-position">
                                Project Manager - Data Scientist
                            </p>
                            <p className="card-text">
                                I am a passionate data scientist with a strong combination of business and technical skills, enabling me to turn opportunities and challenges into successful data-driven projects. With a strong background in mathematics, economics and market research, I specialize in delivering innovative and impactful solutions across a variety of industries, including academia, industry and finance.

                            </p>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="card col-md-4">
                            <img
                                src="static/ceci_circle.png"
                                alt=""
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link href="https://www.linkedin.com/in/cecilia-maas-49850091/">
                                        <a
                                            className="zoom-on-hover"
                                            target="_blank"
                                        >
                                            Dr. Cecilia Maas
                                            <FontAwesomeIcon
                                                className="pl-2"
                                                icon={faLink}
                                            />

                                        </a>
                                    </Link>
                                </h5>
                                <p className="card-position">
                                    Product Manager (via partnership with aureka.ai)
                                </p>
                                <p className="card-text">
                                    With a background in humanities and social sciences, I entered the world of technology motivated to design and accompany the development of products that address social challenges. I am passionate about human-machine interaction and I care not only about user-centered technical development, but also about accompanying the process of adoption of new technologies by organizations and individuals.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default About