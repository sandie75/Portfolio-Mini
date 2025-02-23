import './about.css';
import {motion} from "framer-motion";

const textVariants = {
    initial: {
        x: -500,  // Déplacement hors de l’écran (à gauche)
        opacity: 0, // Invisible
    },
    animate: {
        x: 0,  // Revient à sa position normale
        opacity: 1, // Devient visible
        transition:{
            duration: 1, // Animation dure 1 seconde
            type: "spring",
            stiffness: 50,
            staggerChildren: 0.1 // Décalage de 0.1s entre chaque enfant animé
        },
    },
}

const About = () => {
    return <section className ="about">
        <motion.h1 variants={textVariants} initial="initial" animate="animate">Bonjour, c'est Sandie,</motion.h1>
         <motion.h2 variants={textVariants} initial="initial" animate="animate">développeuse web.</motion.h2>  
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