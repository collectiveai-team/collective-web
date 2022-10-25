import Link from 'next/link';
import Head from '../components/head';
import { motion } from "framer-motion";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Manifest() { 
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <>
                <Head title="The advanced way - Collective.ai / manifest" />
                <div className="container-fluid manifest align-items-center">
                    <img
                        className="img-fluid"
                        src="/static/back-home-newhome.jpg"
                    />
                    <div className="row justify-content-center align-items-center">
                        <div className="col-11 col-md-7 mt-5 mb-5">
                            <h2 className="mb-5 text-center"><strong>Manifest</strong></h2>
                            <p>
                            Post-industrial society, our society, has imposed on us, from different institutions of
    power, a single way of living: work as a way of life and survival. In this fable we are
    taught that the only way to achieve freedom over our own lives is through financial
    autonomy, and this in turn is achievable only through work. But the latter is not only a
    limited resource, but also depends on external agents who define its value. This has
    immediate consequences: competition and over-individualization. How am I going to trust
    others if their work puts mine at risk, and consequently my future possibility of freedom
    and even my life? Under these game rules it is difficult to answer in another way,
    so what possibilities do we have left? Before any exercise of power there is an exercise of
    resistance, and it is this resistance that gives us hope. Rejecting the power exercised by
    this ideological conglomerate (Hegemony) implies rejecting what it itself tells us as
    history, not rejecting history itself, but rejecting its one-sidedness. We are taught that
    the path we follow is the only path of progress, and that it has been carefully outlined,
    so that if we deviate from the path, we deviate from progress itself. This is as false as
    it is misleading. In this exercise of historical unilateralism, all the micro and macro
    political acts of resistance in history are made invisible, as well as all the alternative
    stories of people and groups which, based on their resistance, have conquered —or even
    continue fighting for— rights and spaces that today we may take for granted.

                            </p>
                            <p>
                            We are a group with a passion for innovation and the creation of technologies that can
    generate concrete changes (micro politics) in the transformation of this society. We
    identify ourselves with nodes / neurons forming a network, like an organism of cells
    forming a unit, a decentralized and self-regulating collectivity.

                            </p>
                            <p>
                            Collective.ai was born from there, as a resistance to individualization, because we
    understand that it is from collaboration and exchange that alternatives to the problems of
    the current era arise.

                            </p>
                            <p>
                            We understand that it is necessary to change ourselves, to build from desires a policy
    against power that grows and subjectivizes us. We understand that there is no possible
    change without cultivating ourselves in other territories which capitalism was displacing
    and impregnating with a productivist value —seeking profit in each act.

                            </p>
                            <p>
                            In a society where what predominates is technoscience completely associated with increasing
    capitalist productivity, we understand that it is necessary to oppose this by developing an
    organization that encourages cultivation in art, philosophy and in another way of making
    technology.

                            </p>
                        </div>
                        <div className="col-12 text-center mb-5">
                            <p>
                                <strong>Collective.ai team</strong>
                            </p>
                        </div>
                    </div>
                    <Link href="/">
                        <a>
                            <FontAwesomeIcon
                                className="manifest__back zoom-on-hover"
                                icon={faChevronLeft}
                            />
                        </a>
                    </Link>
                </div>
            </>
        </motion.div>  
    );
}
