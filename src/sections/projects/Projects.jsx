import './Projects.css';
import pizzaria from '../../assets/Pizzaria-landingpage-image.png';
import pomodoro from '../../assets/PomoClock-image.png';
import Card from '../../components/card/Card';

export default function Projects() {
    return (
        <div id='projects' className='container'>
            <h1 className="sectionTitle">Projetos</h1>
            <div className="projectsContainer">
                <Card
                    title="Landing page"
                    image={pizzaria}
                    description={'Landing page com cardápio para pizzaria'}
                    techs={["Next", "Tailwind", "Shand ui", "Figma"]}
                >
                    <a 
                        href="https://github.com/giselaAS/landing-page-pizzaria.git"
                        target="_blank"
                    >
                        <h4>Ver código</h4>
                    </a>
                </Card>
                <Card
                    title="Relógio e Pomodoro"
                    image={pomodoro}
                    description={'Aplicação de relógio e pomodoro com timer'}
                    techs={["React", "Tailwind", "Figma", "Vite"]}
                >
                    <a 
                        href="https://github.com/giselaAS/clock-pomodoro.git"
                        target="_blank"
                    >
                        <h4>Ver código</h4>
                    </a>
                </Card>
            </div>
        </div>
    );
}
