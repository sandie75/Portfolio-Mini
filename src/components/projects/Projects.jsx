import './projects.css';

const Projects = () => {
    return (
    <section id="portfolio" className ="projects">
         <h2>Mes projets personnels</h2>
         <p>Voici quelques projets sur lesquels j'ai travaillé récemment.</p>

         <div className="projectsItems">
            {/*Projet 1 Concert*/}
            <div className="project">

                <div className="project-img">

                    <a href="#" target="_blank" rel="noopener noreferrer">

                        <picture>
                            <source srcSet="/images/concert-square.png" media="(max-width: 768px)"/>  
                            <img src="/images/concert-2x1.png" alt="aperçu du site"/>
                        </picture>

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

                <button className="project-see" onClick={() => window.open('https://sandieemonts.sites.3wa.io/Concerts/index.php','_blank')}>
                        Voir le projet 
                        <span>
                            <img className="arrow" src="/icons/chevronBlanc.png" alt="icon"/>
                        </span>
                </button>

            </div>

            {/*Projet 2 Quiz */}
            <div className="project">
                <div className="project-img">

                    <a href="#" target="_blank" rel="noopener noreferrer">

                        <picture>
                            <source srcSet="/images/quiz-square.png" media="(max-width: 768px)"/>  
                            <img src="/images/quiz-2x1.png" alt="aperçu du site"/>
                        </picture>

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

                <button className="project-see" onClick={() => window.open('https://sandie75.github.io/Quiz-Got/', '_blank')}>
                        Voir le projet 
                        <span>
                            <img className="arrow" src="/icons/chevronBlanc.png" alt="icon"/>
                        </span>
                </button>

            </div>    

            {/*Projet 3 Mastermind */}
            <div className="project">

                <div className="project-img">

                    <a href="#" target="_blank" rel="noopener noreferrer">

                        <picture>
                            <source srcSet="/images/mastermind-square.png" media="(max-width: 768px)"/>  
                            <img src="/images/mastermind-2x1.png" alt="aperçu du site"/>
                        </picture>

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

                <button className="project-see" onClick={() => window.open('https://sandie75.github.io/Mastermind/', '_blank')}>
                        Voir le projet 
                        <span>
                            <img className="arrow" src="/icons/chevronBlanc.png" alt="icon"/>
                        </span>
                </button>  

            </div>
        </div>

        <button className="otherProjects" onClick={() => window.open('https://github.com/sandie75', '_blank')}>
                        Autres projets 
                        <span>
                            <img className="arrow" src="/icons/chevronBlanc.png" alt="icon"/>
                        </span>
        </button>

    </section>
);
};

export default Projects;

/*target="_blank": Ouvre le lien dans un nouvel onglet.
rel="noopener noreferrer": Si tu ouvres un lien dans un nouvel onglet, la page ouverte peut potentiellement accéder à ta page actuelle via window.opener. C'est une faille de sécurité.
noopener: Empêche la nouvelle page d’accéder à window.opener (évite certaines attaques).
noreferrer: Empêche d’envoyer l’info de l’origine (referer) au site cible.*/