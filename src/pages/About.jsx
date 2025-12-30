import React from 'react'
import D from '../assets/D.jpg'
import r from '../assets/r.jpeg'
import k from '../assets/k.jpeg'

const about = () => {
  return (
    <section className='bg-white dark:bg-gray-900 pt-20'>
      <div className='py-8 px-4 mx-auto max-w-screen-xl lg:py-16 '>
        <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8'>
          <h1 className='text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2'>
            About DJ TECH  Virtual Digital Assets           </h1>
          <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-6'>Revolutionizing the Virtual Digital Assets Industry with Tailored SaaS Solutions and seamless transfer of assets.</p>

        </div>
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
            <h2 className='text-gray-900 dark:text-white text-2xl font-extrabold mb-2'>Our Services</h2>
            <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>

              At DJ TECH , we provide cutting-edge SaaS services specifically designed for all players in the virtual digital assets field. Our solutions are tailored to address the unique challenges and opportunities in the virtual digital assets industry, focusing on:

            </p>
            <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
              <li>

                Regulatory compliance tools
              </li>
              <li>
                Virtual Digital Assets-Api integrated transfer assistance
              </li>
            </ul>

          </div>

          <div className='bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
            <h2 className='text-gray-900 dark:text-white text-2xl font-extrabold mb-2'>Our Mission</h2>
            <p className='text-lg font-normal text-gray-500 dark:text-gray-400 mb-4'>

              We are committed to empowering virtual digital assets businesses with innovative SaaS solutions that drive growth, enhance security, and streamline operations in the dynamic world of digital assets.

            </p>
            {/* <ul className='list-disc pl-5 text-gray-500 dark:text-gray-400'>
              <li>
               
                Regulatory compliance tools
              </li>
              <li>
                Virtual Digital Assets-Api integrated transfer assistance
              </li>
            </ul> */}

          </div>

        </div>

        <div className='mt-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12'>
          <h2 className='text-gray-900 dark:text-white text-2xl font-extrabold mb-4'>Our Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Founder */}
            <div>
              <div className="flex items-center mb-4 gap-x-4">
                {/* Name + Role stacked */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Ramakant Rajpoot
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Co-Founder & Director
                  </p>
                </div>
                {/* Avatar */}
                {/* <img
                  className="w-20 h-30 h-rounded rounded-full"
                  src={r}
                  alt="Ramakant Rajpoot"
                /> */}
              </div>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                RamaKant is a visionary leader with a passion for technology and innovation.
              </p>
            </div>

            {/* Co-Founder */}
            <div>
              <div className="flex items-center mb-4 gap-x-4">

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Kartikey
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    Co-Founder & Director
                  </p>
                </div>

                {/* <img
                  className="w-20 h-30 h-rounded rounded-full "
                  src={k}
                  alt="Kartikey Rajpoot"
                /> */}
              </div>
              <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                Kartikey is a dynamic entrepreneur with a strong background in software
                development and a keen interest in blockchain technology.
              </p>
            </div>
          </div>


        </div>

      </div>
    </section>
  )
}

export default about
