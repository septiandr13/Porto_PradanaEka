import { Layout } from "./components/Layout";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { Education } from "./components/Education";
import { Certifications } from "./components/Certifications";
import { Skills } from "./components/Skills";
import { Languages } from "./components/Languages";
import { Contact } from "./components/Contact";

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <ExperienceTimeline />
      <Education />
      <Certifications />
      <Skills />
      <Languages />
      <Contact />
    </Layout>
  );
}

export default App;

