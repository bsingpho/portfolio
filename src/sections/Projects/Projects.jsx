import React from 'react'
import styles from './ProjectStyles.module.css'
import Viberr from '../../assets/viberr.png'
import ProjectCard from '../../common/ProjectCard'
import freshBurger from '../../assets/fresh-burger.png'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={Viberr} 
                link='https://github.com/bsingpho/iSangeet'
                h3='Viberr'
                p='Streaming App'
            />
            <ProjectCard 
                src={freshBurger} 
                link='https://github.com/bsingpho/iSangeet'
                h3='Fresh Burger'
                p='Shopping App'
            />
        </div>
    </section>
  )
}

export default Projects