
import Head from '../components/head';
import Nav from '../components/nav';
import Services from '../components/services'
import About from '../components/about'
import Technologies from '../components/technologies';
import Contact from '../components/contact';

import { TimelineMax, TweenMax, Linear } from 'gsap';
import ScrollMagic from './_scrollMagic';
import { motion } from "framer-motion";

import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Embed from 'react-embed';

import { isMobile } from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import WorldMap from "./worldmap/worldMap";
import sealineData from "./worldmap/sources/fullLinesInfo.json";

const mediumPosts = [
    'https://medium.com/feed/retainable',
    'https://medium.com/feed/vue-mastery',
    'https://medium.com/feed/vue-mastery'
    // Add more URLs as needed
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.year = new Date().getFullYear();
        this.state = { isScrolled: false };
        this.fixNav = this.fixNav.bind(this);
        this.controller = new ScrollMagic.Controller();
        this.sealineData = sealineData.filter((e) => e.points.length > 0);

        this.cmpys = {};
        this.areas = {};
        this.sealineData.forEach((e) => {
            if (!this.areas[e.areaC]) {
                this.areas[e.areaC] = e.areaN;
            }
            e.infos.forEach((f) => {
                if (!this.cmpys[f.cmpyC]) {
                    this.cmpys[f.cmpyC] = f.cmpyN;
                }
            });
        });
    }

    componentDidMount() {
        document.addEventListener('scroll', this.fixNav);

        if (!isMobile) {
            const sceneRoll = new ScrollMagic.Scene({
                triggerElement: 'header',
                triggerHook: 0.9,
                reverse: false,
            })
                .setClassToggle('.ant-welcome', 'roll')
                .addTo(this.controller);

            const sceneSize = new ScrollMagic.Scene({
                triggerElement: 'header',
                triggerHook: 0.9,
            })
                .setClassToggle('.title-mid', 'font-size-up')
                .addTo(this.controller);

            // Escena show-up
            document.querySelectorAll('.scroll-show-up').forEach((element) => {
                const sceneShowUp = new ScrollMagic.Scene({
                    triggerElement: element,
                    triggerHook: 0.9,
                })
                    .setClassToggle(element, 'show-up')
                    .addTo(this.controller);
            });

            // Escena show-horizontal
            document.querySelectorAll('.services img').forEach((element) => {
                const sceneShowUp = new ScrollMagic.Scene({
                    triggerElement: element,
                    triggerHook: 0.9,
                })
                    .setClassToggle(element, 'show-horizontal')
                    .addTo(this.controller);
            });

            // Escena draw
            document.querySelectorAll('.draw-on-scroll').forEach((element) => {
                const pathLength = this.getTotalLength(element);
                element.style.strokeDasharray = pathLength;
                element.style.strokeDashoffset = pathLength;

                const tween = new TimelineMax().add(
                    TweenMax.to(element, 0.9, {
                        strokeDashoffset: 0,
                        ease: Linear.easeIn
                    })
                );

                const sceneDraw = new ScrollMagic.Scene({
                    triggerElement: element,
                    duration: 500,
                    tweenChanges: true,
                })
                    .setTween(tween)
                    .addTo(this.controller);
            });
        }
    }

    getTotalLength(path) {
        return path.getTotalLength();
    }

    fixNav() {
        this.setState({
            isScrolled: window.scrollY > 0,
        });
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.fixNav);
    }

    render() {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <>
                    <Head title="Collective.ai" />
                    <div className="container-fluid">
                        <img
                            className="img-fluid"
                            src="/static/back-home-newhome.jpg"
                        />
                        <div className="row home d-flex justify-content-center align-items-center">
                            <Nav isScrolled={this.state.isScrolled} />
                            <div className="welcome text-center text-md-left col-12 col-md-10 mt-5">
                                <h3 className="welcome__title mt-5 mt-md-0 show-up">
                                    From Deep Learning
                                </h3>
                                <h3 className="welcome__title mt-5 mt-md-0 show-up">
                                    to Deep Impact
                                </h3>
                                {/* <h4 className="welcome__subtitle mt-5 mt-md-0 show-up">
                                    Your Vision, Our Mission
                                </h4> */}
                                <div className="welcome__desc col-md-6 show-up">
                                    <p className="mb-0">
                                        Innovating in artificial intelligence and deep learning, we develop customized technological solutions from DevOps to MLOps, tailored to the unique needs of your business.
                                    </p>
                                    <p>
                                        Our highly qualified team is committed to deeply understand your project to develop a comprehensive solution that seamlessly integrates into your business strategy and generates measurable impact.
                                    </p>
                                    <a href="#contact" className="clickable-link">Get in touch today to learn more.</a>
                                </div>
                                <img
                                    className="ant-welcome d-none d-md-block"
                                    src="/static/ant-welcome.png"
                                    alt="collective.ai-logo"
                                />
                            </div>
                        </div>
                        <main className="row align-items-center justify-content-center">
                            <div className="justify-content-center">
                                <p className="scroll-show-up services-title px-3">
                                    We produce the highest quality for every client,
                                    on every project
                                </p>
                                <Services />
                                <div className="quote d-flex justify-content-center align-items-center flex-column text-center">
                                    <h3>
                                        "There are no facts, only interpretations"
                                    </h3>
                                    <p>Friedrich Nietzsche</p>
                                </div>

                                {/* <section id="projects" className="about">
                                    <div className="row pb-3 text-center">
                                        <h3 className="col-md-12 mb-5">Our Services</h3>


                                        <iframe src='https://widgets.sociablekit.com/medium-publication-feed/iframe/25346928' frameborder='0' width='100%' height='1000'></iframe>
                                    </div>

                                </section> */}
                                <WorldMap
                                    sealine={this.sealineData}
                                    // pickedLine={this.sealineData}
                                    pickedLine={[]}
                                    areaMask={[]}
                                    pickState={[]}
                                    offPick={() => console.log('offPick')}
                                />
                                <About />
                                <Technologies />
                            </div>
                            <Contact />
                        </main>
                        <footer className="text-center pb-5">
                            <p className="year">Collective.ai - {this.year}</p>
                        </footer>
                    </div>

                </>
            </motion.div >
        );
    }
}

export default Home;
