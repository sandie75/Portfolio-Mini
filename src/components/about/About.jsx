import './about.css';

const About = () => {
    return <section className ="about">
        <h1>Bonjour, c'est Sandie.</h1>
         <h2>Développeuse web.</h2>  
         <p className="intro">Bienvenue dans mon portfolio&nbsp;! J'aime construire des interfaces simples et efficaces. Après un bac +2 en développement d'applications web et mobiles, j'ai fait quelques projets.</p> 
         
        <a href="/cv.pdf" download="CV_Sandie_Emonts" className="cv-download-link">
            <button className="cv">
                            Télécharger mon CV 
                            <span>
                                <img className="arrow" src="/icons/flecheBlanche.png" alt="icon"/>
                            </span>
            </button>
        </a>
        
    </section>
}

export default About;