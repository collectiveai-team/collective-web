import ProjectsExtra from "./projectsExtra";
import styles from "../styles/projects.module.css";

const Projects = () => {
    return (
        <div className={styles.container17}>
            <div className={styles.childFrame}>
                <h1 className={styles.portfolio}>/%random projects%/</h1>
            </div>
            <section className={styles.innerFrame}>
                <div className={styles.parentFrame}>
                    <div className={styles.container16}>
                        <img
                            className={styles.image38Icon}
                            loading="lazy"
                            alt=""
                            src="static/projects/project1.webp"
                        />
                        <div className={styles.container9}>
                            <div className={styles.brandFrame}>
                                <div className={styles.burgerKingStarbucksContainer}>
                                    <p className={styles.burgerKing}>{`Burger King &`}</p>
                                    <p className={styles.starbucks}>Starbucks</p>
                                </div>
                            </div>
                            <div className={styles.aPowerfulLaborContainer}>
                                <p className={styles.aPowerfulLabor}>
                                    A powerful labor scheduling tool
                                </p>
                                <p className={styles.thatUsesHistorical}>
                                    that uses historical data and key
                                </p>
                                <p className={styles.indicators}>indicators</p>
                            </div>
                        </div>
                    </div>
                </div>
                <ProjectsExtra
                    image37="static/projects/project1.webp"
                    claro="Claro"
                    buyDataAndSMSPacksThrough="Buy data and SMS packs through a"
                    fastAndSimpleExperience="fast and simple experience."
                />
                <ProjectsExtra
                    image37="static/projects/project1.webp"
                    claro="Turner Latam"
                    buyDataAndSMSPacksThrough="A subscription game service that"
                    fastAndSimpleExperience="allows you to play in the cloud"
                    propPadding="0px 0.5px 4.999999999999943px var(--padding-10xs-5)"
                    propPadding1="var(--padding-4xl) var(--padding-9xl) var(--padding-4xl) 29px"
                    propAlignSelf="stretch"
                    propTextAlign="center"
                    propFlex="1"
                />
                <div className={styles.container15}>
                    <img
                        className={styles.image36Icon}
                        loading="lazy"
                        alt=""
                        src="static/projects/project1.webp"
                    />
                    <div className={styles.container12}>
                        <div className={styles.hooplaWrapper}>
                            <div className={styles.hoopla}>Hoopla</div>
                        </div>
                        <div className={styles.realTimeMotivationSolutionContainer}>
                            <p className={styles.realTimeMotivationSolution}>
                                Real-time motivation solution built
                            </p>
                            <p className={styles.forCompetitiveTeams}>
                                for competitive teams
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Projects;
