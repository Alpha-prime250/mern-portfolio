import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post(
        'http://localhost:5000/api/contact',
        formData
      )

      alert('Message Sent')

      setFormData({
        name: '',
        email: '',
        message: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section
      id="contact"
      className="p-20"
    >
      <h2 className="text-4xl font-bold mb-10">
        Contact
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 max-w-xl"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-4 rounded-lg bg-slate-800"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-4 rounded-lg bg-slate-800"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="p-4 rounded-lg bg-slate-800"
          rows="5"
        />

        <button className="bg-blue-600 p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact