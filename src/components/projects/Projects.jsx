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

                    <a href="https://sandieemonts.sites.3wa.io/Concerts/index.php" target="_blank" rel="noopener noreferrer">

                        <picture>
                            <source srcSet="/images/concert-square.png" media="(max-width: 768px)"/>  
                            <img src="/images/concert-2x1.png" alt="aperçu du site"/>
                        </picture>

                    </a>

                </div>

                <div className="project-text">
                    <h3>Salle de concert</h3>
                    <p>Un site web pour une salle de concert, incluant un agenda des événements et une présentation des artistes programmés, avec un espace administrateur sécurisé par authentification pour la gestion du contenu (CRUD). Le site est également optimisé pour le SEO, garantissant une meilleure visibilité sur les moteurs de recherche.</p>

                    <div className="project-tech">
                        <ul>
                            <li>Html/CSS</li>
                            <li>Javascript</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                    </div>

                    <button className="project-see" onClick={() => window.open('https://sandieemonts.sites.3wa.io/Concerts/index.php','_blank')}>
                        Voir le projet 
                        <span>
                            <img className="arrow" src="/icons/flecheOrange.png" alt="icon"/>
                        </span>
                    </button>

                </div>

            </div>

            {/*Projet 2 Quiz */}
            <div className="project">
                <div className="project-img">

                    <a href="https://sandie75.github.io/Quiz-Got/" target="_blank" rel="noopener noreferrer">

                        <picture>
                            <source srcSet="/images/quiz-square.png" media="(max-width: 768px)"/>  
                            <img src="/images/quiz-2x1.png" alt="aperçu du site"/>
                        </picture>

                    </a>

                </div>

                <div className="project-text">
                    <h3>Quiz Game of Thrones</h3>
                    <p>Un quiz interactif sur les citations de Game of Thrones qui utilise les données d'une API pour tester les connaissances de l'utilisateur.</p>

                    <div className="project-tech">
                        <ul>
                            <li>Html/CSS</li>
                            <li>React</li>
                        </ul>
                    </div>

                    <button className="project-see" onClick={() => window.open('https://sandie75.github.io/Quiz-Got/', '_blank')}>
                        Voir le projet 
                        <span>
                            <img className="arrow" src="/icons/flecheOrange.png" alt="icon"/>
                        </span>
                    </button>
                </div>

            </div>    

            {/*Projet 3 Mastermind */}
            <div className="project">

                <div className="project-img">

                    <a href="https://sandie75.github.io/Mastermind/" target="_blank" rel="noopener noreferrer">

                        <picture>
                            <source srcSet="/images/mastermind-square.png" media="(max-width: 768px)"/>  
                            <img src="/images/mastermind-2x1.png" alt="aperçu du site"/>
                        </picture>

                    </a>
                </div>

                <div className="project-text">
                        <h3>Mastermind</h3>
                        <p>Un jeu où l'utilisateur doit deviner une combinaison de couleurs en dix essais.</p>

                        <div className="project-tech">
                            <ul>
                                <li>Html/CSS</li>
                                <li>React</li>
                            </ul>
                        </div>

                        <button className="project-see" onClick={() => window.open('https://sandie75.github.io/Mastermind/', '_blank')}>
                        Voir le projet 
                            <span>
                                <img className="arrow" src="/icons/flecheOrange.png" alt="icon"/>
                            </span>
                        </button> 

                </div>

            </div>
        </div>

        <button className="otherProjects" onClick={() => window.open('https://github.com/sandie75', '_blank')}>
                        Autres projets 
                        <span>
                            <img className="arrow" src="/icons/flecheBlanche.png" alt="icon"/>
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