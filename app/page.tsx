"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* NAVBAR */}
<header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800">
  <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <span className="font-bold text-lg">Muzammil</span>

    <div className="flex gap-6 text-sm text-gray-300">
      <a href="#home" className="hover:text-white transition">Home</a>
      <a href="#about" className="hover:text-white transition">About</a>
      <a href="#projects" className="hover:text-white transition">Projects</a>
      <a href="#skills" className="hover:text-white transition">Skills</a>
    </div>
  </nav>
</header>

      {/* HERO */}
     <section id="home" className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-32 text-center md:text-left">
        {/* Profile Picture */}
        <motion.img
          src="/profile.jpg.jpeg"
          alt="Muzammil Ahmed"
          className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
        />

        {/* Hero Text */}
        <div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold"
          >
            Muzammil Ahmed Khan
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-gray-400"
          >
            Software Engineer | MERN Stack Developer | SQA Enthusiast
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-gray-400"
          >
            Software Engineering graduate from FAST NUCES with strong fundamentals in programming, full-stack development, and Software Quality Assurance (SQA). 
            Passionate about learning, building, and ensuring high-quality software solutions.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-4 mt-8"
          >
            <a href="#contact" className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:bg-gray-300 transition">Contact Me</a>
            <a href="#projects" className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition">View Projects</a>
            <a href="/MuzammiLaAhmedKhanResume.pdf" download className="px-6 py-3 rounded-xl border border-gray-700 flex items-center gap-2 hover:bg-gray-800 transition">
              <Download size={18} /> Resume
            </a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT ME */}
      <section id="about" className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10 text-center">About Me</h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 p-8 rounded-2xl shadow text-gray-400"
        >
          <p className="mb-4">I am a Software Engineering graduate from FAST NUCES, with strong foundations in programming, data structures, algorithms, and full-stack development.</p>
          <p className="mb-4">Alongside development, I am also open to Software Quality Assurance (SQA) roles, where I apply my strong analytical skills, attention to detail, and understanding of software workflows to ensure reliable and high-quality products.</p>
          <p>My academic journey—from Cambridge Public School to Dehli InterScience College—helped shape my discipline, problem-solving mindset, and passion for continuous learning. I am a quick learner, adaptable, and eager to grow in a professional tech environment.</p>
        </motion.div>
      </section>

      {/* SKILLS */}
     <section id="skills" className="px-6 py-24 max-w-5xl mx-auto">
      <p className="text-gray-400 mb-10">
  Open to Full-Stack Developer, Frontend Developer, and SQA roles
</p>

  <h2 className="text-3xl font-semibold mb-10">Skills</h2>

  <div className="grid md:grid-cols-2 gap-8">

    {/* CORE DEVELOPMENT SKILLS */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 p-8 rounded-2xl shadow"
    >
      <h3 className="text-xl font-medium mb-4">Core Development Skills</h3>
      <div className="grid grid-cols-2 gap-4 text-gray-400">
        {[
          'JavaScript (ES6+)',
          'TypeScript (Basic)',
          'React.js',
          'Next.js (Basic)',
          'Node.js',
          'Express.js',
          'REST APIs',
          'JWT Authentication',
          'MongoDB',
          'MySQL',
          'HTML5 & CSS3',
          'Tailwind CSS',
          'OOP',
          'Data Structures & Algorithms'
        ].map((skill, i) => (
          <div
            key={skill}
            className="bg-gray-950 px-4 py-2 rounded-lg text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>

    {/* SQA & AI SKILLS */}
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="bg-gray-900 p-8 rounded-2xl shadow"
    >
      <h3 className="text-xl font-medium mb-4">SQA & AI Skills</h3>
      <div className="grid grid-cols-2 gap-4 text-gray-400">
        {[
          'Manual Testing',
          'Test Case Design',
          'Functional Testing',
          'Regression Testing',
          'API Testing (Postman)',
          'Bug Reporting',
          'SDLC & STLC',
          'RAG (Retrieval-Augmented Generation)',
          'LLMs',
          'Groq API',
          'Prompt Engineering',
          'Document Parsing'
        ].map((skill) => (
          <div
            key={skill}
            className="bg-gray-950 px-4 py-2 rounded-lg text-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </motion.div>

  </div>
</section>

      {/* EXPERIENCE */}
      <section className="px-6 py-24 bg-gray-900/40">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-10">Experience</h2>
          <div className="space-y-6">
            {[{
              role:'MERN Stack Intern',
              company:'10Pearls',
              desc:'Worked on full stack development using React, improved UI components, built a task management system CRUD and collaborated in an agile environment.'
            },{
              role:'Full Stack Developer Intern',
              company:'Wenawa',
              desc:'Contributed to full-stack features, API integration, and database operations using JavaScript and SQL.'
            }].map((exp,i)=>(
              <motion.div key={exp.company} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}} className="p-6 rounded-2xl bg-gray-900 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-medium">{exp.role}</h3>
                <p className="text-gray-400">{exp.company}</p>
                <p className="mt-2 text-gray-400">{exp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[{
            title:'LegalEase_AI - AI-Powered Legal Assistant',
            desc:'LegalEase_AI is an AI-powered legal assistant leveraging RAG architecture and LLMs through Groq to deliver accurate, context-aware legal guidance. The system features JWT-based authentication, protected routes, RESTful APIs, and a responsive full-stack implementation with React, Node.js, and MongoDB.',
            github:'https://github.com/notmuzammil/LegalEaseAI-Final-FYP-',
            image:'/legalEase.jpeg'
          },{
            title:'Task Management Dashboard',
            desc:'CRUD dashboard with role-based access, charts, and clean component architecture.',
            github:'https://github.com/yourusername/task-dashboard',
            image:'/projects/task-dashboard.png'
          }].map((p,i)=>(
            <motion.div key={p.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{once:true}} transition={{duration:0.5,delay:i*0.1}} className="p-6 rounded-2xl bg-gray-900 hover:scale-105 transition-transform duration-300">
              <img src={p.image} alt={p.title} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-gray-400">{p.desc}</p>
              <a href={p.github} target="_blank" className="inline-flex items-center gap-2 mt-4 text-sm border border-gray-700 px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                <Github size={16} /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 bg-gray-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Let’s Connect</h2>
          <p className="text-gray-400 mb-10">
            I’m open to internships, trainee roles, and full-time opportunities.
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/notmuzammil" target="_blank"><Github /></a>
            <a href="https://www.linkedin.com/in/muavgmil/" target="_blank"><Linkedin /></a>
            <a href="muzammil16oct2003@gmail.com"><Mail /></a>
            <a href="tel:+923322726688"> <Phone /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
