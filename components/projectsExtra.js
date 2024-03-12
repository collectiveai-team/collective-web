import { useMemo } from "react";
import styles from "../styles/projectsExtra.module.css";

const ProjectsExtra = ({
    image37,
    claro,
    buyDataAndSMSPacksThrough,
    fastAndSimpleExperience,
    propPadding,
    propPadding1,
    propAlignSelf,
    propTextAlign,
    propFlex,
}) => {
    const container14Style = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    const container10Style = useMemo(() => {
        return {
            padding: propPadding1,
        };
    }, [propPadding1]);

    const claroBrandFrameStyle = useMemo(() => {
        return {
            alignSelf: propAlignSelf,
        };
    }, [propAlignSelf]);

    const claroStyle = useMemo(() => {
        return {
            textAlign: propTextAlign,
            flex: propFlex,
        };
    }, [propTextAlign, propFlex]);

    return (
        <div className={styles.container14} style={container14Style}>
            <img className={styles.image37Icon} loading="lazy" alt="" src={image37} />
            <div className={styles.container10} style={container10Style}>
                <div className={styles.claroBrandFrame} style={claroBrandFrameStyle}>
                    <div className={styles.claro} style={claroStyle}>
                        {claro}
                    </div>
                </div>
                <div className={styles.buyDataAndContainer}>
                    <p className={styles.buyDataAnd}>{buyDataAndSMSPacksThrough}</p>
                    <p className={styles.fastAndSimple}>{fastAndSimpleExperience}</p>
                </div>
            </div>
        </div>
    );
};

export default ProjectsExtra;
