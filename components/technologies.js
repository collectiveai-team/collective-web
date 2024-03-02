
const Technologies = () => (
    <section className="technologies text-center d-none d-md-block">
        <div className="row p-5 ">
            <h3 className="col-md-12">Technologies</h3>
            <p className="col-md-12">
                we use the most modern and powerful
                technologies
            </p>
            <div className="col-md-12">
                <ul className="list-inline">
                    <li className="list-inline-item tech-icon zoom-on-hover">
                        <a
                            href="https://www.tensorflow.org/"
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            aria-label="tensor"
                        >
                            <img src="/static/techs/tensor-b.png" />
                        </a>
                    </li>
                    <li className="list-inline-item tech-icon zoom-on-hover">
                        <a
                            href="https://pytorch.org/"
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            aria-label="pytorch"
                        >
                            <img src="/static/techs/pytorch-b.png" />
                        </a>
                    </li>
                    <li className="list-inline-item tech-icon zoom-on-hover">
                        <a
                            href="https://www.mongodb.com/"
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            aria-label="mongo"
                        >
                            <img src="/static/techs/mongo-b.png" />
                        </a>
                    </li>
                    <li className="list-inline-item tech-icon zoom-on-hover">
                        <a
                            href="https://neo4j.com/"
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            aria-label="neo"
                        >
                            <img src="/static/techs/neo-b.png" />
                        </a>
                    </li>
                    <li className="list-inline-item tech-icon zoom-on-hover">
                        <a
                            href="https://spark.apache.org/"
                            target="_blank"
                            rel="noopener nofollow noreferrer"
                            aria-label="spark"
                        >
                            <img src="/static/techs/spark-b.png" />
                        </a>
                    </li>
                    <li className="list-inline-item tech-icon zoom-on-hover">
                        <a
                            href="https://www.docker.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="spdockeracy"
                        >
                            <img src="/static/techs/docker-b.png" />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
)

export default Technologies;