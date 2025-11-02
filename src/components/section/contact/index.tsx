'use client'
import { sendEmail } from '@/app/_actions/sendEmail';
import React, { useState } from 'react';
const Contact = () => {
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (formData: FormData) => {
    setLoading(true)
    const result = await sendEmail(formData);
    console.log("handleSubmit", result)
    if (result.success) {
      setLoading(false)
    } else {
      setLoading(false)
    }
  };

  console.log('loading',{loading})

  return (
    <div className='flex flex-col gap-5 items-start mt-40'>
      <button className='px-3 py-2 border border-gray-400 rounded text-white hover:text-secondary transition'> Contact</button>
      <div className="text-start mb-8">
        <h4 className="text-4xl text-white font-bold">Get in</h4>
        <div className="flex items-center justify-center gap-4 mt-2">
          <span className="w-12 h-1 bg-secondary"></span>
          <p className="text-4xl text-secondary font-semibold">Touch</p>
        </div>
      </div>
      <h1 className='text-3xl font-extrabold leading-[1] ' >Lets
        👋
        Work
        Together</h1>
      <p className='text-sm leading-[1.3`]'>Lets Build Something Amazing Together! feel free to reach out if you are looking for a passionate developer to bring your ideas to life.I am always excited to colliborate on meaningful Project.</p>


      <div className="w-full bg-slate-800 rounded">
        <form action={handleSubmit} className="w-full max-w-4xl mx-auto p-4 flex flex-col items-center gap-6">
          <div className="w-full flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your name"
              name="name"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Enter your email"
              name="email"
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              placeholder="Enter your phone number"
              name="phone"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            <textarea
              placeholder="Type details about your inquiry"
              name="description"
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full">
            {loading ?
              (<button
                disabled
                className="w-full bg-secondary text-white p-3 rounded-md"
              >
                Loading......
              </button>) : (
                <button
                  type="submit"
                  className="w-full bg-secondary text-white p-3 rounded-md hover:bg-primary cursor-pointer transition duration-300"
                >
                  Send Message
                </button>
              )}
          </div>
        </form>

      </div>
    </div>
  )
}

export default Contact