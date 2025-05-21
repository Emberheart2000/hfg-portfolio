<template>
    <div class="wrapper">
        <section id="home" class="hero-section maxwidth">
            <div class="hero-content">
                <h5 class="subtitle-text teal-text">HELLO THERE! MY NAME IS</h5>
                <h1 class="neo-title">Jannik Fauser</h1>
                <p class="hero-description">I'm a passionate interaction design student who likes to design and test ideas. I really like to explore new problems and test if my solution could fit the problem. I'm really into smart home and plants, but I haven't found a good way to connect them together yet.</p>
                <div class="hero-buttons">
                    <a href="#projects" class="neo-button">View Projects</a>
                    <NuxtLink to="/contact" class="neo-button outline">Get in Touch</NuxtLink>
                </div>
            </div>
            <div class="hero-image neo-card">
                <img src="/images/IMG_4643_k.png" alt="Jannik Fauser">
            </div>
        </section>
        <section id="projects" class="projects-section maxwidth">
            <div class="section-header">
                <div class="neo-separator"></div>
                <h5 class="subtitle-text teal-text">RECENT PROJECTS</h5>
            </div>

            <div class="projects-grid">
                <ProjectCard title="FOCAL" 
                    subtitle="INVENTION DESIGN" 
                    image="/images/invention/invention_cover.png"
                    url="/projects/invention"
                    description="Verlierst du beim Arbeiten am Laptop oft den Überblick über deine geöffneten Apps? Focal bringt Ordnung in dein digitales Arbeitsumfeld, indem Anwendungen räumlich anordnet werden können – direkt an den Wänden um dich herum." />
                    
                <ProjectCard title="NERVOUS SYSTEM" 
                    subtitle="INTERACTIVE COMMUNICATION" 
                    image="/images/ics/ics_cover.png"
                    url="/projects/iks" 
                    description="An interactive exhibition piece that explores the connection between technology and human nervous systems." />
                    
                <ProjectCard title="INVENTION" 
                    subtitle="INTERFACE DESIGN" 
                    image="/images/interface/interface_cover.png"
                    url="/projects/invention"
                    description="Exploring new ways of communication through innovative design concepts and strategies." />
                
                <ProjectCard title="PROGRAMMING" 
                    subtitle="ANIMAL JOURNEY" 
                    image="/images/programming/programming_cover.png"
                    url="/projects/invention"
                    description="What if people could explore their favourite animals on an interactive Website?" />
            </div>
        </section>

<<<<<<< HEAD
        <!-- CV Section -->
        <section id="cv" class="cv-section maxwidth">
            <div class="section-header">
                <div class="neo-separator"></div>
                <h5 class="subtitle-text teal-text">MY EXPERIENCE</h5>
                <h2 class="section-title">Curriculum Vitae</h2>
            </div>

            <div class="cv-container">
                <!-- Education Section -->
                <div class="cv-category neo-container">
                    <div class="cv-category-header">
                        <div class="cv-icon">🎓</div>
                        <h3 class="cv-category-title teal-accent">Education</h3>
                    </div>
                    
                    <div class="cv-items">
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2023 - Present</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Bachelor of Arts, Interaction Design</h4>
                                <p class="cv-location">HfG – University of Design, Schwäbisch Gmünd</p>
                                <p class="cv-description">Focused on creating intuitive user experiences and innovative interactive systems. Developed skills in UX/UI design, prototyping, and user research methods. Also really interested in design management and speculative design approaches.</p>
                            </div>
                        </div>
                        
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2020 - 2023</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">State-certified Graphic Designer</h4>
                                <p class="cv-location">Vocational college Kolping, Schwäbisch Gmünd</p>
                                <p class="cv-description">Focused on layout and print, corporate design and illustration. Graduated with honors.</p>
                            </div>
                        </div>
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2019-2020</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Bachelor of Engineering, Industrial Engineering and Management (incomplete)</h4>
                                <p class="cv-location">University of Applied Sciences, Aalen</p>
                                <p class="cv-description">Focused on manufacturing products and how to manage an own buisness.</p>
                            </div>
                        </div>
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2010 - 2018</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Abitur</h4>
                                <p class="cv-location">Franziskus Gymnasium, Mutlangen</p>
                                <p class="cv-description">Focused on science and technology, also interested in economics.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Work Experience Section -->
                <div class="cv-category neo-container">
                    <div class="cv-category-header">
                        <div class="cv-icon">💼</div>
                        <h3 class="cv-category-title teal-accent">Work Experience</h3>
                    </div>
                    
                    <div class="cv-items">
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2023</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Corporate Design and Marketing</h4>
                                <p class="cv-location">Fechner Sauna</p>
                                <p class="cv-description">Designed custom sauna concepts and represented the company at trade fairs.</p>
                            </div>
                        </div>
                        
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2022 - 2023</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Design Internship </h4>
                                <p class="cv-location"> dickekreativ </p>
                                <p class="cv-description">Package design for clients, operating on a large format Plotter, developing websites with the UI department.</p>
                            </div>
                        </div>
                    
                        <div class="cv-item">
                            <div class="cv-timeline">
                                <span class="cv-year">2019</span>
                                <div class="cv-timeline-line"></div>
                            </div>
                            <div class="cv-content">
                                <h4 class="cv-title">Product testing</h4>
                                <p class="cv-location">ZF TRW Alfdorf</p>
                                <p class="cv-description">Evaluating Long-term, load, and safety tests for seat belts to check their durability under prolonged use, measure their strength under high forces, and verify their reliable performance in crash scenarios to ensure compliance with international safety standards</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <!-- Skills Section -->
                <div class="cv-category neo-container">
                    <div class="cv-category-header">
                        <div class="cv-icon">🛠️</div>
                        <h3 class="cv-category-title teal-accent">Skills</h3>
                    </div>
                    
                    <div class="skills-container">
                        <div class="skills-group">
                            <h4 class="skills-title">Design</h4>
                            <div class="skills-items">
                                <div class="skill-pill">UI/UX Design</div>
                                <div class="skill-pill">Interaction Design</div>
                                <div class="skill-pill">Wireframing</div>
                                <div class="skill-pill">Prototyping</div>
                                <div class="skill-pill">User Research</div>
                                <div class="skill-pill">Visual Design</div>
                            </div>
                        </div>
                        
                        <div class="skills-group">
                            <h4 class="skills-title">Tools</h4>
                            <div class="skills-items">
                                <div class="skill-pill">Figma</div>
                                <div class="skill-pill">Adobe XD</div>
                                <div class="skill-pill">Photoshop</div>
                                <div class="skill-pill">Illustrator</div>
                                <div class="skill-pill">After Effects</div>
                                <div class="skill-pill">Sketch</div>
                            </div>
                        </div>
                        
                        <div class="skills-group">
                            <h4 class="skills-title">Development</h4>
                            <div class="skills-items">
                                <div class="skill-pill">HTML/CSS</div>
                                <div class="skill-pill">JavaScript</div>
                                <div class="skill-pill">Vue.js</div>
                                <div class="skill-pill">React</div>
                                <div class="skill-pill">Processing</div>
                                <div class="skill-pill">Arduino</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Download CV Button -->
                <div class="cv-download">
                    <a href="/files/Jannik_Fauser_CV.pdf" download class="neo-button">
                        <span class="download-icon">📄</span>
                        Download Full CV
                    </a>
                </div>
            </div>
        </section>

=======
        <section id="projects" class="projects-section maxwidth">
            <div class="section-header">
                <div class="neo-separator"></div>
                <h5 class="subtitle-text teal-text">RECENT PROJECTS</h5>
            </div>

            <div class="projects-grid">
                <ProjectCard title="FOCAL" 
                    subtitle="INVENTION DESIGN" 
                    image="/images/invention_cover.png"
                    url="/projects/invention"
                    description="Verlierst du beim Arbeiten am Laptop oft den Überblick über deine geöffneten Apps? Focal bringt Ordnung in dein digitales Arbeitsumfeld, indem Anwendungen räumlich anordnet werden können – direkt an den Wänden um dich herum." />
                    
                <ProjectCard title="NERVOUS SYSTEM" 
                    subtitle="INTERACTIVE COMMUNICATION" 
                    image="/images/ics/ics_cover.png"
                    url="/projects/iks" 
                    description="An interactive exhibition piece that explores the connection between technology and human nervous systems." />
                    
                <ProjectCard title="INVENTION" 
                    subtitle="INNOVATIVE KOMMUNIKATIONSSTRATEGIEN" 
                    image="/images/invention_cover.png"
                    url="/projects/invention"
                    description="Exploring new ways of communication through innovative design concepts and strategies." />
            </div>
        </section>
>>>>>>> parent of d21e414 (Refactor code structure for improved readability and maintainability)
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// Scroll behavior helper for smooth anchor navigation
onMounted(() => {
  // Handle anchor links with smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = (this as HTMLAnchorElement).getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});
</script>

<style>
/* Teal text styling */
.teal-text {
  color: var(--neo-accent-color) !important;
}

.teal-accent {
  color: var(--neo-accent-color);
  font-weight: 600;
}

/* Hero Section */
.hero-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8rem;
    padding: 2rem 0;
    scroll-margin-top: 6rem; /* For anchor navigation */
}

.hero-content {
    width: 50%;
    padding-right: 4rem;
}

.subtitle-text {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    margin-bottom: 1rem;
}

.neo-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: 0.05em;
    color: var(--neo-text-color);
}

.hero-description {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #555;
    margin-bottom: 2rem;
}

.hero-buttons {
    display: flex;
    gap: 1.5rem;
    margin-top: 2rem;
}

.neo-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    font-weight: 600;
    font-size: 1rem;
    color: var(--neo-text-color);
    background-color: var(--neo-bg-color);
    border-radius: 0.8rem;
    text-decoration: none;
    box-shadow: 
        8px 8px 16px var(--neo-shadow-dark), 
        -8px -8px 16px var(--neo-shadow-light);
    transition: all 0.3s ease;
}

.neo-button:hover {
    transform: translateY(-3px);
    box-shadow: 
        10px 10px 20px var(--neo-shadow-dark), 
        -10px -10px 20px var(--neo-shadow-light);
}

.neo-button:active {
    transform: translateY(0);
    box-shadow: 
        inset 5px 5px 10px var(--neo-shadow-dark), 
        inset -5px -5px 10px var(--neo-shadow-light);
}

.neo-button.outline {
    background-color: transparent;
    box-shadow: none;
    position: relative;
    border: 2px solid var(--neo-shadow-dark);
}

.neo-button.outline:hover {
    background-color: var(--neo-bg-color);
    box-shadow: 
        5px 5px 10px var(--neo-shadow-dark), 
        -5px -5px 10px var(--neo-shadow-light);
}

.hero-image {
    width: 45%;
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 
        15px 15px 30px var(--neo-shadow-dark), 
        -15px -15px 30px var(--neo-shadow-light);
}

.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

/* Projects Section */
.projects-section {
    padding: 4rem 0;
    scroll-margin-top: 6rem; /* For anchor navigation */
}

.section-header {
    margin-bottom: 4rem;
}

.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

/* Media Queries */
@media (max-width: 1024px) {
    .hero-section {
        flex-direction: column;
    }
    
    .hero-content, .hero-image {
        width: 100%;
    }
    
    .hero-content {
        padding-right: 0;
        margin-bottom: 3rem;
    }
}
</style>