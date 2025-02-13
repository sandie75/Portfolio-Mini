import './about.css';

const About = () => {
    return <section className ="about">
        <h1>Bonjour, c'est Sandie.</h1>
         <h2>Développeuse web basée à Montpellier.</h2>  
         <p className="intro">Bienvenue sur mon portfolio ! J'aime construire des interfaces simples et efficaces. Après un bac +2 en développement full stack d'applications web et mobiles, j'ai fait quelques projets.</p> 
         
         <button className="cv">Télécharger mon CV <span className="arrow">→</span></button>
        
    </section>
}

export default About;