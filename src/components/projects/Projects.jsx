import './projects.css';

const Projects = () => {
    return (
    <section id="portfolio" className ="projects">
         <h2>Projets personnels</h2>
         <p>Voici quelques projets sur lesquels j'ai travaillé récemment.</p>

         <div className="projectsItems">
            {/*Projet 1 Concert*/}
            <div className="project">
                <div className="project-img">
                    <a href="#" target="_blank">
                        <img src="/images/concert-2x1.png" alt="aperçu du site"/>
                    </a>
                </div>
                <div className="project-text">
                    <h3>Salle de concert</h3>
                    <p>blablablaablablabalbalablababalbalbabalablababalalbabalalbab</p>
                </div>
                <div className="project-tech">
                    <ul>
                        <li>Html/Css</li>
                        <li>Javascript</li>
                        <li>Php</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <button className="project-see">Voir le projet</button>
            </div>

            {/*Projet 2 Quiz */}
            <div className="project">
                <div className="project-img">
                    <a href="#" target="_blank">
                        <img src="/images/quiz-2x1.png" alt="aperçu du site"/>
                    </a>
                </div>
                <div className="project-text">
                    <h3>Quiz Game of Thrones</h3>
                    <p>albalabalbalbalbalbalababalalbalbalbalalbabllaba</p>
                </div>
                <div className="project-tech">
                    <ul>
                        <li>Html/Css</li>
                        <li>React</li>
                        <li>API</li>
                    </ul>
                </div>
                <button className="project-see">
                        Voir le projet
                </button>
            </div>    

            {/*Projet 3 Mastermind */}
            <div className="project">
                <div className="project-img">
                    <a href="#" target="_blank">
                        <img src="/images/mastermind-2x1.png" alt="aperçu du site"/>
                    </a>
                </div>
                <div className="project-text">
                        <h3>Mastermind</h3>
                        <p>albalabalbalbalbalbalababalalbalbalbalalbabllaba</p>
                </div>
                <div className="project-tech">
                        <ul>
                            <li>Html/Css</li>
                            <li>React</li>
                        </ul>
                </div>
                <button className="project-see">
                        Voir le projet
                </button>  
            </div>
        </div>
         <button className="otherProjects">
            Mes autres projets 
            <span className="arrow">→</span>
         </button>
    </section>
);
};

export default Projects;