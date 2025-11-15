import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Chatbot from "./components/Chatbot";
import FloatingSocials from "./components/FloatingSocials";
import ThemePicker from "./components/ThemePicker";
import Loader from "./components/Loader";
import ParticlesBG from "./effects/ParticlesBG";
import CustomCursor from "./effects/CustomCursor";


export default function App() {
return (
<div className="relative overflow-hidden">
<Loader />
<ParticlesBG />
<CustomCursor />


<Navbar />
<ThemePicker />


<section id="home">
<Hero />
</section>


<section id="projects">
<Projects />
</section>


<section id="skills">
<Skills />
</section>


<FloatingSocials />
<Chatbot />
</div>
);
}
