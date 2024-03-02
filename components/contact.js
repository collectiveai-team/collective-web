import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
    <section id="contact" className="contact">
        <div className="row">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
                <div className="row d-flex align-items-center justify-content-center text-center">
                    <h5 className="col-md-12">
                        Get in touch
                    </h5>
                    <ul>
                        <li className="pb-2">
                            Iturri 1429, CABA, Buenos Aires, Argentina
                        </li>
                        <li className="pb-2">
                            {/* <FontAwesomeIcon
                            className="footer-icon pr-2"
                            icon={faTelegramPlane}
                        />
                        +54-11-57745516 */}

                            <Link href={`tel:+541157745516`}>
                                <a>
                                    <FontAwesomeIcon icon={faTelegramPlane} />
                                    +54-11-57745516
                                </a>
                            </Link>
                        </li>
                        <li className="pb-2">
                            <Link href={`mailto:info@collectiveai.io`}>
                                <a>
                                    <FontAwesomeIcon
                                        className="footer-icon pr-2"
                                        icon={faEnvelope}
                                    />
                                    info@collectiveai.io
                                </a>
                            </Link>
                        </li>
                        <li>
                            <FontAwesomeIcon
                                className="footer-icon pr-2"
                                icon={faGithub}
                            />
                            <a
                                href="https://github.com/collectiveai-team/"
                                target="_blank"
                            >
                                github.com/collectiveai-team
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
)

export default Contact