function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Tailwind CSS'
  ]

  return (
    <section
      id="skills"
      className="p-20"
    >
      <h2 className="text-4xl font-bold mb-12 text-center">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-slate-800
              p-6
              rounded-2xl
              text-center
              text-lg
              font-semibold
              cursor-pointer
              border border-slate-700
              hover:bg-blue-600
              hover:-translate-y-3
              hover:scale-105
              hover:shadow-[0_0_25px_rgba(59,130,246,0.7)]
              transition-all
              duration-300
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills