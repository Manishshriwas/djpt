import React from 'react'
import { ArrowRight, ArrowLeftRight, Cloudy, LockKeyhole, CircleCheckBig } from 'lucide-react';

const Home = () => {
  return (
    <>
      <section className='bg-white dark:bg-gray-800 pt-20'>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Welcome to
            <span className="text-blue-600 dark:text-blue-500"> DJ TECH PVT LTD Digital Assets</span>
          </h1>
          <p className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400'>
            Your trusted partner for buying and selling digital assets and distributed ledger technology solutions
          </p>
          <div className='flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
            <a href="#services" className='smooth-scroll inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900'>Explore Our Solutions
              <ArrowRight className='ml-3' />
            </a>
            <a href="#contacts" className='smooth-scroll inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800'>Schedule a Consultation</a>
          </div>
        </div>

      </section>

      <section id="services" className='bg-gray-50 dark:bg-gray-900 py-12'>
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className='mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl'>Our Comprehensive Solutions</h2>
          <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
            {/* <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
                <ArrowLeftRight className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300' />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">P2P Transaction Management</h3>
              <p className='text-gray-500 dark:text-gray-400'>Seamless peer-to-peer transaction management for Virtual Digital Assets (VDA), enabling secure, direct transfers between users without intermediaries.</p>

            </div> */}

            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
                <Cloudy className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300' />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Cloud Computing</h3>
              <p className='text-gray-500 dark:text-gray-400'>Leverage the power of cloud computing to streamline your digital asset management processes, ensuring scalability, reliability, and security.</p>

            </div>

            <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
              <div className='flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900'>
                <LockKeyhole className='w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300' />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">Customised Software Solutions</h3>
              <p className='text-gray-500 dark:text-gray-400'>Leverage our expertise to develop custom software solutions tailored to your unique needs, ensuring optimal performance and reliability.</p>

            </div>


          </div>

        </div>

      </section>


      <section className='dark:bg-gray-800 py-16 pb-16'>
        <div className='px-4 mx-auto max-w-screen-xl'>
          <h2 className='mb-12 py-12 text-4xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-5xl'>Why Choose DJ TECH Digital Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className='flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg'>
              <CircleCheckBig className='w-10 h-10 mb-4 text-blue-600 dark:text-blue-400' />
              <h3 className='mb-3 text-xl font-bold text-gray-900 dark:text-white'>Industry-leading Expertise</h3>
              <p className='text-center text-gray-600 dark:text-gray-300'>Our team of seasoned
                professionals brings decades of combined experience in blockchain technology, finance, and cybersecurity. We stay at the forefront of industry developments to provide
                you with unparalleled insights and strategies.
              </p>
            </div>

            <div className='flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg'>
              <CircleCheckBig className='w-10 h-10 mb-4 text-blue-600 dark:text-blue-400' />
              <h3 className='mb-3 text-xl font-bold text-gray-900 dark:text-white'>Cutting-edge Technology</h3>
              <p className='text-center text-gray-600 dark:text-gray-300'>We leverage state-of-the-art blockchain and fintech solutions to deliver superior results. Our proprietary algorithms and advanced analytics ensure optimal performance and security for your digital assets.
              </p>
            </div>

            <div className='flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg'>
              <CircleCheckBig className='w-10 h-10 mb-4 text-blue-600 dark:text-blue-400' />
              <h3 className='mb-3 text-xl font-bold text-gray-900 dark:text-white'>Client-Centric Approach</h3>
              <p className='text-center text-gray-600 dark:text-gray-300'>Your success is our priority. We offer personalized strategies tailored to your unique needs and goals. Our dedicated support team is available 24/7 to assist you every step of the way.
              </p>
            </div>

            <div className='flex flex-col items-center bg-gray-50 dark:bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:shadow-lg'>
              <CircleCheckBig className='w-10 h-10 mb-4 text-blue-600 dark:text-blue-400' />
              <h3 className='mb-3 text-xl font-bold text-gray-900 dark:text-white'>Uncompromising Security</h3>
              <p className='text-center text-gray-600 dark:text-gray-300'>We implement industry-leading security measures to protect your assets. Our multi-layered approach includes advanced encryption, regular security audits, and cold storage solutions for maximum protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id='contacts' className='bg-gray-50 dark:bg-gray-900 py-12'>
        <div className='px-4 mx-auto max-w-screen-xl'>
          <h2 className='mb-8 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl'>Start Your Digital Asset Journey Today</h2>
          <br />
          <li className="dark:text-gray-400">
            <span className="mb-2 text-2xl font-semibold text-gray-900 dark:text-white">Transaction Services Pricing</span>

            <ol className="ps-5 mt-2 space-y-2 list-disc list-inside">
              <li>
                <strong>Basic Trading Services:</strong>
                Starting from ₹8,500, basic order types, and standard transaction processing. Order value limit ₹200 - ₹2,000.
              </li>
              <li>
                <strong>Advanced Trading Services:</strong>
                Priced between ₹85,000 and ₹8,50,000, covering P2P transactions, API access, and advanced order types.
              </li>
              <li>
                <strong>Enterprise Transaction Solutions:</strong>
                Custom pricing between ₹8,50,000 and ₹20,00,000, offering institutional-grade custody, dedicated infrastructure, and priority support.
              </li>
              <li>
                The upper limit is based on the availability of stocks. For detailed transaction fee schedules and enterprise pricing, please contact our business development team.
              </li>
            </ol>
          </li>

          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">

              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>

              <h3 className="mb-2 text-xl font-bold dark:text-white">Free Consultation</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Speak with our experts to explore how we can transform your approach to digital asset management.
              </p>

              <a href="#" className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               Get Demo
              </a>

            </div>


            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">

              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-blue-900">
                <svg className="w-5 h-5 text-blue-600 lg:w-6 lg:h-6 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
                </svg>
              </div>

              <h3 className="mb-2 text-xl font-bold dark:text-white">Request a Demo </h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                See our cutting-edge solutions in action and discover how they can benefit your organization.
              </p>

              <a href="#" className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Book Now
              </a>

            </div>


          </div>
        </div>
      </section>
    </>
  )
}

export default Home;
