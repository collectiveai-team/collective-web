
import styles from "../styles/portfolio.module.css";

import WorldMap from "./worldmap/worldMap";
import sealineData from "./worldmap/sources/fullLinesInfo.json";

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <div className={styles.type2LooselyConvertToVis}>
                <div className={styles.infoFrame}>
                    <h1 className={styles.portfolio1}>Portfolio</h1>
                </div>
                <footer className={styles.qualityFrame}>
                    <div className={styles.testimonialsText}>
                        <div className={styles.parentFrame}>
                            <h1 className={styles.qualityHasAlreadyprovenContainer}>
                                <p className={styles.qualityHasAlready}>Quality has already</p>
                                <p className={styles.provenItsValue}>proven its value</p>
                                <p className={styles.hereIsHow}>here is how</p>
                            </h1>
                        </div>
                        <div className={styles.projectsList}>
                            <div className={styles.customerLogoImage}>
                                <div className={styles.positiveText}>
                                    <b className={styles.feedbackBubble}>30+</b>
                                </div>
                                <div className={styles.projects}>projects</div>
                            </div>
                            <div className={styles.dividerLine}>
                                <div className={styles.infoText}>
                                    <b className={styles.sectionFrame}>20+</b>
                                </div>
                                <div className={styles.customers}>customers</div>
                            </div>
                            <div className={styles.projectlist}>
                                <div className={styles.qualityproof}>
                                    <b className={styles.projectscontainer}>100%</b>
                                    <div className={styles.positiveFeedback}>positive feedback</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <section className={styles.testimonialsTextl}>
                    <WorldMap
                        sealine={this.sealineData}
                        // pickedLine={this.sealineData}
                        pickedLine={[]}
                        areaMask={[]}
                        pickState={[]}
                        offPick={() => console.log('offPick')}
                    />
                </section>
            </div>
        );
    }
}

// const Portfolio = () => {

//     return (
//         <div className={styles.type2LooselyConvertToVis}>
//             <div className={styles.infoFrame}>
//                 <h1 className={styles.portfolio1}>Portfolio</h1>
//             </div>
//             <footer className={styles.qualityFrame}>
//                 <div className={styles.testimonialsText}>
//                     <div className={styles.parentFrame}>
//                         <h1 className={styles.qualityHasAlreadyprovenContainer}>
//                             <p className={styles.qualityHasAlready}>Quality has already</p>
//                             <p className={styles.provenItsValue}>proven its value</p>
//                             <p className={styles.hereIsHow}>here is how</p>
//                         </h1>
//                     </div>
//                     <div className={styles.projectsList}>
//                         <div className={styles.customerLogoImage}>
//                             <div className={styles.positiveText}>
//                                 <b className={styles.feedbackBubble}>30+</b>
//                             </div>
//                             <div className={styles.projects}>projects</div>
//                         </div>
//                         <div className={styles.dividerLine}>
//                             <div className={styles.infoText}>
//                                 <b className={styles.sectionFrame}>20+</b>
//                             </div>
//                             <div className={styles.customers}>customers</div>
//                         </div>
//                         <div className={styles.projectlist}>
//                             <div className={styles.qualityproof}>
//                                 <b className={styles.projectscontainer}>100%</b>
//                                 <div className={styles.positiveFeedback}>positive feedback</div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </footer>
//             <section className={styles.projectSwiper}>
//                 <WorldMap
//                     sealine={this.sealineData}
//                     // pickedLine={this.sealineData}
//                     pickedLine={[]}
//                     areaMask={[]}
//                     pickState={[]}
//                     offPick={() => console.log('offPick')}
//                 />
//             </section>
//         </div>
//     );
// };

export default Portfolio;
