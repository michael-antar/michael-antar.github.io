import './App.css';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { experienceData } from './data/experiences';
import { projectsData } from './data/projects';

function App() {
    return (
        <Layout>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="lg:col-span-1 flex flex-col gap-8">
                    <HeroSection />
                    <EducationSection />
                </div>

                <div className="lg:col-span-1">
                    <ExperienceSection experiences={experienceData} />
                </div>

                <div className="lg:col-span-3">
                    <ProjectsSection projects={projectsData} />
                </div>
            </div>
        </Layout>
    );
}

export default App;
