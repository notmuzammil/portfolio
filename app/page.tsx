"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Portfolio() {
  const roles = [
  "Hi I'm a Full Stack Developer",
  "Hi I'm a SQA Enthusiast",
];

const [currentRole, setCurrentRole] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }, 2000); // change text every 2 seconds

  return () => clearInterval(interval);
}, []);

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
          {/* <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 text-xl text-gray-400"
          >
            Software Engineer | MERN Stack Developer | SQA Enthusiast
          </motion.p> */}
          <motion.p
  key={currentRole}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.3 }}
  className="mt-4 text-xl md:text-2xl font-medium text-gray-300"
>
  {roles[currentRole]}
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
            <a href="/Resume.pdf.pdf" target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 flex items-center gap-2 hover:bg-gray-800 transition">
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
      {[
        {
          role: 'MERN Stack Intern',
          company: '10Pearls',
          desc: 'Worked on full stack development using React, improved UI components, built a task management system CRUD and collaborated in an agile environment.',
          link: 'https://www.linkedin.com/posts/muavgmil_10pearls-shineinternship-techforgood-activity-7331860294618509312-FMBH?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADqt8YoB04h62IEoTgYB7XG5XLu54GF9vT4' // Add your LinkedIn post URL here
        },
        {
          role: 'Full Stack Developer Intern',
          company: 'Wenawa',
          desc: 'Contributed to full-stack features, API integration, and database operations using JavaScript and SQL.',
          link: 'https://www.linkedin.com/posts/wenawa_wenawa-pakistan-independenceday-activity-7363442136635060226-xHkk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADqt8YoB04h62IEoTgYB7XG5XLu54GF9vT4' // Add your LinkedIn post URL here
        }
      ].map((exp, i) => (
        <motion.a
          key={exp.company}
          href={exp.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="block p-6 rounded-2xl bg-gray-900 hover:scale-105 transition-transform duration-300"
        >
          <h3 className="text-xl font-medium">{exp.role}</h3>
          <p className="text-gray-400">{exp.company}</p>
          <p className="mt-2 text-gray-400">{exp.desc}</p>
        </motion.a>
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
            image:'/legalEase.png'
          },{
            title:'Aasaan Shaadi-AI-PoweredWedding Planning Platform',
            desc:'Aasaan Shaadi is an AI-powered wedding planning platform built for Pakistan, enabling users to discover verified vendors, create customized wedding packages, and manage end-to-end events from a single dashboard. The platform combines vendor management, AI-driven recommendations, and localized design to make wedding planning simple, scalable, and stress-free.',
            github:'https://github.com/notmuzammil/Aasaan-Shaadi',
            image:'/Asaanshadi.jpg'
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
        <div className="mt-12 text-center">
  <a
    href="https://github.com/notmuzammil"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white transition"
  >
    <Github size={18} />
    View more projects on GitHub
  </a>
</div>

      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24 bg-gray-900/40">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
    <p className="text-gray-400 mb-12">
      I’m open to internships, trainee roles, and full-time opportunities.
    </p>

    {/* Social Links */}
    <div className="flex justify-center gap-6 mb-14">
      <a href="https://github.com/notmuzammil" target="_blank" className="hover:text-blue-400">
        <Github />
      </a>
      <a href="https://www.linkedin.com/in/muavgmil/" target="_blank" className="hover:text-blue-400">
        <Linkedin />
      </a>
      <a href="mailto:muzammil16oct2003@gmail.com" className="hover:text-blue-400">
        <Mail />
      </a>
      <a href="tel:+923322726688" className="hover:text-blue-400">
        <Phone />
      </a>
    </div>

    {/* Message Box */}
    <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Full Name"
        className="px-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="email"
        placeholder="Email Address"
        className="px-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <input
        type="text"
        placeholder="Subject"
        className="md:col-span-2 px-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
        required
      />

      <textarea
        rows={5}
        placeholder="Your Message"
        className="md:col-span-2 px-4 py-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>

      <button
        type="submit"
        className="md:col-span-2 mt-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-medium"
      >
        Send Message
      </button>
    </form>
  </div>
</section>
{/* FOOTER */}
<footer className="px-6 py-10 bg-gray-950 border-t border-gray-800">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
    
    {/* Left */}
    <p className="text-gray-400 text-sm">
      © {new Date().getFullYear()} Muzammil Ahmed. All rights reserved.
    </p>

    {/* Right */}
    <div className="flex gap-5 text-gray-400">
      <a
        href="https://github.com/notmuzammil"
        target="_blank"
        className="hover:text-white transition"
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/muavgmil/"
        target="_blank"
        className="hover:text-white transition"
      >
        LinkedIn
      </a>
      <a
        href="mailto:muzammil16oct2003@gmail.com"
        className="hover:text-white transition"
      >
        Email
      </a>
    </div>
  </div>
</footer>

    </div>
  );
}
