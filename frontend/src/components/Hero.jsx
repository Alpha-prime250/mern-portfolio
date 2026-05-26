import {
  FaGithub,
  FaLinkedin,
  FaInstagram
} from 'react-icons/fa'
import profile from "../assets/Profile1.jpeg";


function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-5"
    >
      <img
        src={profile}
        alt="Profile"
        className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg mb-6"
      />

      <h1 className="text-6xl font-bold mb-4">
        Hi, I'm Yash Parashar
      </h1>

      <p className="text-2xl text-gray-300 mb-6">
        Full Stack Developer
      </p>

      <p className="max-w-3xl text-gray-400 leading-8 mb-8">
        Aspiring Full Stack Developer with strong knowledge of JavaScript,
        React.js, Node.js, Express.js, and MongoDB. Passionate about building
        scalable and modern web applications with clean UI and efficient backend
        architecture.
      </p>

      <div className="flex gap-5">
        <a
          href="Yash_Parashar_CV.pdf"
          download
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Download CV
        </a>

        <a
          href="#projects"
          className="border border-white px-6 py-3 rounded-lg font-semibold"
        >
          View Projects
        </a>
      </div>
    </section>
 
)
}
<div className="flex gap-6 mt-10 text-4xl">
  <a
    href="https://github.com/yourgithub"
    target="_blank"
    className="
      hover:text-blue-400
      hover:scale-125
      hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]
      transition-all
      duration-300
    "
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/yourlinkedin"
    target="_blank"
    className="
      hover:text-blue-400
      hover:scale-125
      hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]
      transition-all
      duration-300
    "
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/yashparashar632"
    target="_blank"
    className="
      hover:text-pink-500
      hover:scale-125
      hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]
      transition-all
      duration-300
    "
  >
    <FaInstagram />
  </a>
</div>

export default Hero