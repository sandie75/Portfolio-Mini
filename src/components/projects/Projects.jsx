import './projects.css';

const Projects = () => {
    return <section id="portfolio" className ="projects">
         <h2>Projets personnels</h2>
         <p>Voici quelques projets sur lesquels j'ai travaillé récemment.</p>
         <div className="projectsItems">
            <div className="project">
                <div className="project-img">
                    <a href="#" target="_blank">
                        <img src="/images/concert-2x1.png" alt="aperçu du site"/>
                    </a>
                </div>
                <div className="project-text">
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
            <div className="project">
            <div className="project-img"></div>
                <div className="project-text"></div>
                <div className="project-tech"></div>
                <button className="project-see"></button>
            </div>
            <div className="project">

            </div>

         </div>

         <button className="otherProjects">Mes autres projets <span className="arrow">→</span></button>
        
    </section>
}

export default Projects;