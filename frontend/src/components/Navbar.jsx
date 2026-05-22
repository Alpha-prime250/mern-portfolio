import { Link } from 'react-scroll'

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 bg-slate-900/90 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <h1 className="text-3xl font-bold text-blue-500 cursor-pointer hover:scale-105 transition duration-300">
        Portfolio
      </h1>

      <div className="flex gap-6 text-lg font-medium">
        <Link
          to="home"
          smooth={true}
          className="cursor-pointer hover:text-blue-400 hover:-translate-y-1 transition duration-300"
        >
          Home
        </Link>

        <Link
          to="about"
          smooth={true}
          className="cursor-pointer hover:text-blue-400 hover:-translate-y-1 transition duration-300"
        >
          About
        </Link>

        <Link
          to="skills"
          smooth={true}
          className="cursor-pointer hover:text-blue-400 hover:-translate-y-1 transition duration-300"
        >
          Skills
        </Link>

        <Link
          to="projects"
          smooth={true}
          className="cursor-pointer hover:text-blue-400 hover:-translate-y-1 transition duration-300"
        >
          Projects
        </Link>
         <Link
          to="contact"
          smooth={true}
          className="cursor-pointer hover:text-blue-400 hover:-translate-y-1 transition duration-300"
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar