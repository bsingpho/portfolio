import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import twitterIconLight from '../../assets/twitter-light.svg'
import linkedinIconLight from '../../assets/linkedin-light.svg'
import gitHubIconLight from '../../assets/github-light.svg'
import twitterIconDark from '../../assets/twitter-dark.svg'
import linkedinIconDark from '../../assets/linkedin-dark.svg'
import gitHubIconDark from '../../assets/github-dark.svg'
import CV from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'

function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterIconLight : twitterIconDark;
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark;
    const gitHubIcon = theme === 'light' ? gitHubIconLight : gitHubIconDark;

    return (
        <section id="hero" className={styles.container}>
            <div>
                <img 
                    className={styles.hero} 
                    src={heroImg} 
                    alt="Profile picture of Brangong"/>
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color mode icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>
                    Brangong <br/> Sisen <br/> Singpho
                </h1>
                <h2>Software Developer</h2>
                <span>
                    <a href="https://github.com/bsingpho" target="_blank">
                        <img src={twitterIcon} alt='Twitter icon'/>
                    </a>
                    <a href="https://github.com/bsingpho" target="_blank">
                        <img src={linkedinIcon} alt='Linkedin icon'/>
                    </a>
                    <a href="https://github.com/bsingpho" target="_blank">
                        <img src={gitHubIcon} alt='GitHub icon'/>
                    </a>
                </span>
                <p className={styles.description}>
                    With a passion for Software Engineering
                </p>
                <a href={CV}>
                    <button className="hover" download> Resume </button>
                </a>
            </div>
        </section>
    )
    }

export default Hero