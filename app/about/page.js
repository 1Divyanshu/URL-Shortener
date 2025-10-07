import React from 'react'

const About = () => {
  return (
    <section className="bg-gray-100 min-h-[90vh] flex items-center justify-center px-4">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">About</h1>
        <p className="text-gray-600 leading-relaxed mb-4 text-2xl">
          Hey there 👋 I’m <span className="font-semibold">Divyanshu</span>, a B.Tech student who built this URL Shortener as a small project.
          The main idea was simple — long links look messy, so why not make them short, clean, and easy to share?
        </p>
        <p className="text-gray-600 leading-relaxed mb-4 text-2xl">
          I’m still learning web development, and this project helped me understand how the backend,
          database, and frontend all connect. It’s not a big professional service, just something I made
          to practice coding and also make a useful tool.
        </p>
        <p className="text-gray-600 leading-relaxed text-2xl">
          I’ll keep adding features whenever I learn something new. You can even create your own custom short links, so instead of random text, your links can look like myapp.com/project — easier to remember and share.
          Till then, hope this makes your links look a little neater 🙂
        </p>
      </div>
    </section>
  )
}

export default About
