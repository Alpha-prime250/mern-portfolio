import { useEffect, useState } from 'react'
import axios from 'axios'


function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects')
      setProjects(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section id="projects" className="p-20">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
       <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project._id} className="bg-slate-800 p-5 rounded-xl">
            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-5">{project.description}</p>
          </div>
        ))}
       </div>
    </section>
  )
}

export default Projects 
