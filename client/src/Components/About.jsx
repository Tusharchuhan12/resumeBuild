import React from 'react'

function About() {
  return ( 
    <>
    <div> 
          <style>{`
              @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

              * {
                  font-family: 'Poppins', sans-serif;
    }
          `}</style>

          <section id='About' className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4 py-12">
              <div className="relative shadow-2xl shadow-indigo-600/40 rounded-2xl overflow-hidden shrink-0">
                  <img className="max-w-md w-full object-cover rounded-2xl"
                      src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=451&h=451&auto=format&fit=crop"
                      alt="profile" />
                      <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                          <div className="flex -space-x-4 shrink-0">
                              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
                                  className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[1]"
                                  alt="user1" />
                                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
                                      className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]"
                                      alt="user2" />
                                      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                          className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]"
                                          alt="user3" />
                                          <div
                                              className="flex items-center justify-center text-xs text-white size-9 rounded-full border-[3px] border-white bg-indigo-600 hover:-translate-y-1 transition z-[4]">
                                              50+
                                          </div>
                                      </div>
                                      <p className="text-sm font-medium text-slate-800">Developers Connected</p>
                                  </div>
                          </div>

                          <div className="text-sm text-slate-600 max-w-lg">
                      <h1 className="text-xl uppercase font-semibold text-slate-700">About SmartResume AI</h1>
                              <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-indigo-600 to-[#DDD9FF]"></div>

                      <p className='mt-5  sm:text-sm'>SmartResume AI is an intelligent web platform designed to simplify resume creation for job seekers and professionals. Built using the MERN stack (MongoDB, Express, React, Node.js), our application integrates AI technology to generate well-structured, professional resumes tailored to your profile.

                          Whether you’re a fresher or an experienced professional, SmartResume AI helps you highlight your strengths with perfectly formatted resumes — optimized for ATS (Applicant Tracking Systems) and modern hiring standards.

                          💡 Our Mission
                          To empower every individual to showcase their skills and experience confidently through AI-driven, high-quality resumes</p>
                          
                          </div>
                      </section>

    </div>
    </>
  )
}

export default About
