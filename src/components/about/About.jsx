import './about.css';

const About = () => {
    return <section className ="about">
        <h1>Bonjour, c'est Sandie.</h1>
         <h2>Développeuse web.</h2>  
         <p className="intro">Bienvenue sur mon portfolio ! J'aime construire des interfaces simples et efficaces. Après un bac +2 en développement d'applications web et mobiles, j'ai fait quelques projets.</p> 
         
         <button className="cv">
                        Télécharger mon CV 
                        <span>
                            <img className="arrow" src="/icons/chevronBlanc.png" alt="icon"/>
                        </span>
        </button>
        
    </section>
}

export default About;