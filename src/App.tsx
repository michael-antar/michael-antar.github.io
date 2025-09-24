import './App.css';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { experienceData } from './data/experiences';
import { projectsData } from './data/projects';

function App() {
    return (
        <Layout>
            <HeroSection />
            <ExperienceSection experiences={experienceData} />
            <ProjectsSection projects={projectsData} />
        </Layout>
    );
}

export default App;
