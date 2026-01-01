// import React from 'react'
// import D from '../assets/D.jpg'
// import r from '../assets/r.jpeg'
// import k from '../assets/k.jpeg'

// const about = () => {
//   return (
//     <section className='bg-white dark:bg-gray-900 pt-20'>
//       <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 '>
//         <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8'>
//           <h1 className='text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2'>
//             About DJ TECH  Virtual Digital Assets           </h1>
//           <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-6'>Revolutionizing the Virtual Digital Assets Industry with Tailored SaaS Solutions and seamless transfer of assets.</p>

//         </div>
//         <div className='grid md:grid-cols-2 gap-8'>
//           <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
//             <h2 className='text-gray-900 dark:text-white text-2xl font-extrabold mb-2'>Our Services</h2>
//             <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>

//               At DJ TECH , we provide cutting-edge SaaS services specifically designed for all players in the virtual digital assets field. Our solutions are tailored to address the unique challenges and opportunities in the virtual digital assets industry, focusing on:

//             </p>
//             <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
//               <li>

//                 Regulatory compliance tools
//               </li>
//               <li>
//                 Virtual Digital Assets-Api integrated transfer assistance
//               </li>
//             </ul>

//           </div>

//           <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
//             <h2 className='text-gray-900 dark:text-white text-2xl font-extrabold mb-2'>Our Mission</h2>
//             <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>

//               We are committed to empowering virtual digital assets businesses with innovative SaaS solutions that drive growth, enhance security, and streamline operations in the dynamic world of digital assets.

//             </p>
//             {/* <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
//               <li>
               
//                 Regulatory compliance tools
//               </li>
//               <li>
//                 Virtual Digital Assets-Api integrated transfer assistance
//               </li>
//             </ul> */}

//           </div>

//         </div>

//         <div className='mt-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
//           <h2 className='text-gray-900 dark:text-white text-2xl font-extrabold mb-4'>Our Leadership</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Founder */}
//             <div>
//               <div className="flex items-center mb-4 gap-x-4">
//                 {/* Name + Role stacked */}
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                     Ramakant Rajpoot
//                   </h3>
//                   <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
//                     Co-Founder & Director
//                   </p>
//                 </div>
//                 {/* Avatar */}
//                 {/* <img
//                   className="w-20 h-30 h-rounded rounded-full"
//                   src={r}
//                   alt="Ramakant Rajpoot"
//                 /> */}
//               </div>
//               <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
//                 RamaKant is a visionary leader with a passion for technology and innovation.
//               </p>
//             </div>

//             {/* Co-Founder */}
//             <div>
//               <div className="flex items-center mb-4 gap-x-4">

//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 dark:text-white">
//                     Kartikey
//                   </h3>
//                   <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
//                     Co-Founder & Director
//                   </p>
//                 </div>

//                 {/* <img
//                   className="w-20 h-30 h-rounded rounded-full "
//                   src={k}
//                   alt="Kartikey Rajpoot"
//                 /> */}
//               </div>
//               <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
//                 Kartikey is a dynamic entrepreneur with a strong background in software
//                 development and a keen interest in blockchain technology.
//               </p>
//             </div>
//           </div>


//         </div>

//       </div>
//     </section>
//   )
// }

// export default about


import React from 'react'

const About = () => {
  return (
    <section className='bg-white dark:bg-gray-900 pt-24'>
      <div className='max-w-screen-xl mx-auto px-4 py-10 lg:py-16'>

        {/* HERO */}
        <div className='bg-gradient-to-br from-gray-50 to-white 
                        dark:from-gray-800 dark:to-gray-900
                        border border-gray-200 dark:border-gray-700 
                        rounded-2xl p-10 md:p-14 mb-12 
                        animate-fade-up'>
          <h1 className='text-gray-900 dark:text-white 
                         text-4xl md:text-5xl font-extrabold mb-4'>
            About <span className="text-blue-600">DJ TECH</span>  
            <span className="block text-2xl md:text-3xl font-semibold mt-2">
              Virtual Digital Assets
            </span>
          </h1>

          <p className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl'>
            Revolutionizing the Virtual Digital Assets industry with
            tailored SaaS solutions and seamless digital asset transfers.
          </p>
        </div>

        {/* INFO CARDS */}
        <div className='grid md:grid-cols-2 gap-8 mb-12'>

          {/* SERVICES */}
          <div className='bg-gray-50 dark:bg-gray-800 
                          border border-gray-200 dark:border-gray-700 
                          rounded-xl p-8 md:p-10 
                          card-hover animate-fade-up delay-100'>
            <h2 className='text-gray-900 dark:text-white 
                           text-2xl font-extrabold mb-3'>
              Our Services
            </h2>

            <p className='text-lg text-gray-600 dark:text-gray-400 mb-4'>
              At DJ TECH, we deliver cutting-edge SaaS solutions designed
              specifically for the evolving virtual digital assets ecosystem.
            </p>

            <ul className='space-y-2 text-gray-600 dark:text-gray-400 list-disc pl-5'>
              <li>Regulatory compliance tools</li>
              <li>API-integrated digital asset transfer assistance</li>
            </ul>
          </div>

          {/* MISSION */}
          <div className='bg-gray-50 dark:bg-gray-800 
                          border border-gray-200 dark:border-gray-700 
                          rounded-xl p-8 md:p-10 
                          card-hover animate-fade-up delay-200'>
            <h2 className='text-gray-900 dark:text-white 
                           text-2xl font-extrabold mb-3'>
              Our Mission
            </h2>

            <p className='text-lg text-gray-600 dark:text-gray-400'>
              To empower virtual digital asset businesses with innovative,
              secure, and scalable SaaS solutions that accelerate growth,
              enhance trust, and streamline operations.
            </p>
          </div>

        </div>

        {/* LEADERSHIP */}
        <div className='bg-gray-50 dark:bg-gray-800 
                        border border-gray-200 dark:border-gray-700 
                        rounded-2xl p-10 md:p-12 
                        animate-fade-up delay-300'>
          <h2 className='text-gray-900 dark:text-white 
                         text-3xl font-extrabold mb-8'>
            Our Leadership
          </h2>

          <div className='grid md:grid-cols-2 gap-10'>

            {/* LEADER 1 */}
            <div className='card-hover rounded-xl p-6'>
              <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                Ramakant Rajpoot
              </h3>
              <p className='text-blue-600 font-medium mb-3'>
                Co-Founder & Director
              </p>

              <p className='text-lg text-gray-600 dark:text-gray-400'>
                A visionary leader with a deep passion for technology,
                innovation, and building scalable digital ecosystems.
              </p>
            </div>

            {/* LEADER 2 */}
            <div className='card-hover rounded-xl p-6'>
              <h3 className='text-xl font-bold text-gray-900 dark:text-white'>
                Kartikey
              </h3>
              <p className='text-blue-600 font-medium mb-3'>
                Co-Founder & Director
              </p>

              <p className='text-lg text-gray-600 dark:text-gray-400'>
                A dynamic entrepreneur with strong expertise in software
                development and a keen interest in blockchain technologies.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default About
