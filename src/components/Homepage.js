import React from 'react'


export default function Homepage() {
    return (
        <div> 

            {/* Navbar */}

            <nav className="container m-auto">
                <div className="max-w-7xl m-auto mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative container m-auto flex items-center justify-between h-16 ">
                        <div className="flex m-auto">
                            <img src={"./images/Logo.png"} alt='' />
                            <a href="/" className="px-3 pt-7 ml-16 rounded-md text-lg font-bold">About Us</a>
                            <a href="/" className="px-3 pt-7 rounded-md text-lg font-bold">Product</a>
                            <a href="/" className="px-3 pt-7 rounded-md text-lg font-bold">Pricing</a>
                            <a href="/" className="px-3 pt-7 rounded-md text-lg font-bold">Contact</a>
                            <a href="/" className="px-3 pt-7 rounded-md text-lg font-bold">Download</a>
                        </div>
                        <div className='flex m-auto w-max gap-4'>
                            <h1 className='pt-3'>Login</h1>
                            <button className="ml-7 mt-2 p-1 pl-3 pr-3 font-semibold rounded-sm outline outline-offset-2 outline-1 ...">Try For Free</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}

            {/* A */}

            <div>
                <img className='m-auto mt-[6%] w-[50%] h-[50%]' src='./images/img1.png' alt='' />
                <h1 className='text-center text-2xl'>Build your own workspace to replace isolated tools <br /> and bring everyone together.</h1>
            </div>
            <div className='text-center'>
                <button className="p-4 pl-14 pr-14 mt-10 font-bold rounded-md bg-orange-400 text-white">Try For Free</button>
                <img className='m-auto inline-block pl-5 mb-1' src='./images/img2.png' alt='' />
            </div>
            <div>
                <img className='m-auto mt-[3%] w-[85%] h-[50%]' src='./images/img3.png' alt='' />
                <h1 className='text-center text-2xl mt-5 font-semibold'>Tools erect walls</h1>
                <p className='text-center text-1xl mt-1'>Collaboration is a struggle, when everybody uses a different app. <br /> We have the solution for that. </p>
            </div>
            <div>
                <img className='float-right m-auto w-[50%] h-[50%] mb-2' src='./images/img4.png' alt='' />
                <div className='mt-[6%] container mx-auto px-4'>
                    <h1 className='font-serif text-7xl'>Build your <br /> <a className='bg-clip-border bg-emerald-200 mt-2' href='/'>own</a> workspace.</h1>
                    <h2 className='text-xl mt-3 ml-2'>It will take a couple of hours, but will save your <br /> company weeks in the long term.</h2>
                    <br />
                    <h1 className='font-bold text-lg'> {'>'} Create </h1>
                    <p className='ml-4 mt-1'>Easy-to-use apps for each team with no code</p>
                    <hr
                        style={{
                            background: "orange",
                            height: "3px",
                            width: "400px",
                            border: "none",
                            marginLeft: "15px",
                            marginTop: "20px",
                        }}
                    />
                    <h1 className='font-bold text-lg ml-4 mt-2'>Organize</h1>
                    <p className='ml-4 mt-1'>Work into custom hierarchies, feilds and formulas</p>
                    <br />
                    <h1 className='font-bold text-lg ml-4 mt-2'>Visualize</h1>
                    <p className='ml-4 mt-1'>Workflows with Tables, Boards, Timelines, <br /> Charts & more.</p>
                </div>
            </div>
            <br />

            {/* B */}

            <div>
                <div className='container mx-auto'>
                    <h1 className='font-serif text-7xl mt-[15%] text-center'>Bring all the roles <a className='bg-clip-border bg-sky-200 mt-2' href='/'>together.</a> </h1>
                    <p className='text-center text-2xl mt-5'>We believe in autonomous teams that own their <br /> work and their pieace of workspace.</p>
                    <div className="grid gap-4 grid-cols-3 grid-rows-1">
                        <div className=''>
                            <hr
                                style={{
                                    background: "orange",
                                    height: "3px",
                                    width: "100%",
                                    border: "none",
                                    marginLeft: "15px",
                                    marginTop: "70px",
                                }}
                            />
                            <h1 className='font-bold text-lg mt-5 ml-3'> {'>'} Align</h1>
                            <p className='mt-2 ml-7'>Ideas and knowledge with real-time <br /> collaborative wiki.</p>
                        </div>
                        <div className=''>
                            <hr className='bg-gray-200'
                                style={{
                                    height: "3px",
                                    width: "100%",
                                    border: "none",
                                    marginLeft: "15px",
                                    marginTop: "70px",
                                }}
                            />
                            <h1 className='font-bold text-lg mt-5 ml-7'>Link</h1>
                            <p className='mt-2 ml-7'>Visually by building roadmaps that <br /> are always up-to-date. </p>
                        </div>
                        <div className=''>
                            <hr className='bg-gray-200'
                                style={{
                                    height: "3px",
                                    width: "100%",
                                    border: "none",
                                    marginLeft: "15px",
                                    marginTop: "70px",
                                }}
                            />
                            <h1 className='font-bold text-lg mt-5 ml-7'> Decentralize </h1>
                            <p className='mt-2 ml-7'>Smoothly when everybody knows <br /> what's important. </p>
                        </div>
                    </div>
                    <img className='m-auto mt-[3%] w-[85%] h-[50%]' src='./images/img5.png' alt='' />
                </div>
            </div>
            <br />

            {/* C */}
            <div>
                <div className='container mx-auto mt-[10%]'>
                    <img className='float-right container m-auto w-[50%] h-[50%] mb-2' src='./images/img6.png' alt='' />
                    <div className='container mx-auto px-4'>
                        <h1 className=' font-serif text-7xl'>Focus on <br /> <a className='bg-emerald-300' href='/' >meaningful</a> work.</h1>
                        <p className='text-xl mt-3 ml-2'>Your workspace naturally maps the way you work, <br /> so there is nothing to be distracted by.</p>
                        <br />
                        <h1 className='font-bold text-lg mt-5 ml-7'>Capture</h1>
                        <p className='mt-2 ml-7'>Easy-to-use apps for each team with no code</p>

                        <h1 className='font-bold text-lg mt-3 ml-7'> {'>'} Plan </h1>
                        <p className='mt-2 ml-7'>Work into custom hierachines, fields and formulas</p>
                        <hr
                            style={{
                                background: "orange",
                                height: "3px",
                                width: "400px",
                                border: "none",
                                marginLeft: "15px",
                                marginTop: "20px",
                            }}
                        />

                        <h1 className='font-bold text-lg mt-3 ml-7'>Execute</h1>
                        <p className='mt-2 ml-7'>Workflows with Tables, Boards, Templates <br /> Charts & more.</p>
                    </div>
                </div>
            </div>
            <br />

            {/* D */}

            <div className='container m-auto mt-[10%]'>
                <div className='inline-flex ml-[10%]'>
                    <img className='m-auto w-[13%] h-[5%]' src='./images/img7.png' alt='' />
                    <h1 className='font-serif text-7xl'>Loved by so many people <br /> around the world</h1>
                </div>
                <div className='flex space-x-60 mt-[5%] ml-[11%]'>
                    <div>
                        <p>"I received great custmer service <br />
                            from the specialists who helped <br />
                            me. I would recommnend to anyone <br />
                            who wants great dashboard that <br />
                            has great quality"</p>
                    </div>
                    <div >
                        <p>"It really boils down to this: that all <br />
                            life is interrelated. We are all <br />
                            caught in an inescapable network <br />
                            of mutuality, tied into a single <br />
                            garment of destiny"</p>
                    </div>
                    <div>
                        <p>"Really excited to see the progress <br />
                            that Fibery team are making on the <br />
                            product. There's a lot of potential <br />
                            with this one!"</p>
                    </div>
                </div>

            </div>
            <br />

            {/* E */}

            <div className='container m-auto mt-[10%]'>
                <p className='float-right mr-[22%] text-2xl opacity-70'>Buisnesses all over the world <br />
                    trust Oval to build thier own <br />
                    workflow</p>

                <h1 className='float-left ml-[22%]  mt-[8%] text-center '>
                    <a className='underline decoration-emerald-400 italic font-serif text-7xl' href="/">10 years</a>
                    <br /> in buisness
                </h1>

                <h1 className='float-right mr-[24%]  mt-[5%] text-center '>
                    <a className='underline decoration-emerald-400 italic font-serif text-7xl' href="/">75,000+</a>
                    <br /> Customers
                </h1>

                <h1 className='float-left ml-[24%]  mt-[5%] text-center '>
                    <a className='underline decoration-emerald-400 italic font-serif text-7xl' href="/">1,092</a>
                    <br /> Partner company
                </h1>

                <h1 className='float-left ml-[24%] mt-[5%] text-center '>
                    <a className='underline decoration-emerald-400 italic font-serif text-7xl' href="/">39+</a>
                    <br /> Branch office
                </h1>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

            <img className='float-left m-auto w-[15%] mb-2' src='./images/img8.png' alt='' />

            {/* F */}

            <div className='mt-[20%] ml-[25%] container m-auto'>
                <h1 className='font-serif m-auto text-7xl'>Oval Plans and Pricing</h1>
                <p className='ml-[15%] mt-5'> 30 days free trial, cancel any time. No credit card required.</p>
            </div>
            <section className="text-gray-600 body-font overflow-hidden mr-[15%]">
                <div className="container px-5 py-16 mx-auto">
                    <label className="relative inline-flex items-center cursor-pointer ml-[35%] mt-10 mb-10">
                        <input type="checkbox" value="" className="sr-only peer" checked />
                        <span className="ml-3 mr-3 text-lg font-medium text-gray-900 dark:text-gray-300">Annual Plans</span>
                        <div className="w-20 h-10 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-amber-300 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-2.5 after:left-[113px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-300"></div>
                        <span className="ml-3 text-lg font-medium text-gray-900 dark:text-gray-300">Monthly Plans</span>
                    </label>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                                <h2 className="text-lg tracking-widest title-font font-bold text-center">Starter</h2>
                                <h3 className='text-center text-sm mb-2'>Up to 20 people</h3>
                                <h1 className="text-4xl text-center font-serif text-gray-900 pb-4 mt-5 mr-2 border-b border-gray-200 leading-none">$199</h1>
                                <p className='text-sm text-center'> Per month, bited <br /> annually in USD </p>

                                <p className='text-sm text-center text-emerald-400 underline decoration-emerald-400 mt-10 '> Contact us for a Quote </p>

                                <button className="center mt-16 ml-[20%] mr-[20%] text-white bg-emerald-500 py-2 focus:outline-none hover:bg-emerald-600 rounded">Buy Now
                                </button>

                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                                <h2 className="text-lg tracking-widest title-font font-bold text-center">Growth</h2>
                                <h3 className='text-center text-sm mb-2'>Up to 60 people</h3>
                                <h1 className="text-4xl text-center font-serif text-gray-900 pb-4 mt-5 mr-2 border-b border-gray-200 leading-none">$499</h1>
                                <p className='text-sm text-center'> Per month, bited <br /> annually in USD </p>

                                <p className='text-sm text-center text-emerald-400 underline decoration-emerald-400 mt-10 '> Contact us for a Quote </p>

                                <button className="center mt-16 ml-[20%] mr-[20%] text-white bg-emerald-500 py-2 focus:outline-none hover:bg-emerald-600 rounded">Buy Now
                                </button>

                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                                <h2 className="text-lg tracking-widest title-font font-bold text-center">Midsize</h2>
                                <h3 className='text-center text-sm mb-2'>Up to 100 people</h3>
                                <h1 className="text-4xl text-center font-serif text-gray-900 pb-4 mt-5 mr-2 border-b border-gray-200 leading-none">$899</h1>
                                <p className='text-sm text-center'> Per month, bited <br /> annually in USD </p>

                                <p className='text-sm text-center text-emerald-400 underline decoration-emerald-400 mt-10 '> Contact us for a Quote </p>

                                <button className="center mt-16 ml-[20%] mr-[20%] text-white bg-emerald-500 py-2 focus:outline-none hover:bg-emerald-600 rounded">Buy Now
                                </button>

                            </div>
                        </div>
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                            <div className="h-full p-6 rounded-lg flex flex-col relative overflow-hidden">
                                <h2 className="text-lg tracking-widest title-font font-bold text-center">Large</h2>
                                <h3 className='text-center text-sm mb-2'>Up to 300 people</h3>
                                <h1 className="text-4xl text-center font-serif text-gray-900 pb-4 mt-5 mr-2 border-b border-gray-200 leading-none">$1,999</h1>
                                <p className='text-sm text-center'> Per month, bited <br /> annually in USD </p>

                                <p className='text-sm text-center text-emerald-400 underline decoration-emerald-400 mt-10 '> Contact us for a Quote </p>

                                <button className="center mt-16 ml-[20%] mr-[20%] text-white bg-emerald-500 py-2 focus:outline-none hover:bg-emerald-600 rounded">Buy Now
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className='flex mt-20'>
                        <h1 className='ml-12'> <a className='font-bold text-2xl ml-20 mr-10' href='/'> Enterprise </a>  For company with over 1,000+ people</h1>
                        <button className="ml-60 text-white bg-emerald-500 py-1 px-5 focus:outline-none hover:bg-emerald-600 rounded">Contact Us
                        </button>
                    </div>
                    <div className='mt-20'>
                        <p className='text-xl text-center'>See how an all-in-one Oval plan stacks up against the competition and saves you money</p>
                        <h1 className='font-bold text-center'>Compare Prices</h1>
                    </div>
                </div>
            </section>

            {/* G */}

            <footer className="text-gray-400 bg-black body-font">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <img className='m-auto pr-5' src='./images/img9.png' alt='' />
                        <span className="inline-flex p-auto m-auto  sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="ml-3 mt-3 text-gray-400 border rounded-2xl p-1" href='/'>
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="text-gray-400 ml-3 mt-3 border rounded-2xl p-1" href='/'>
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 mt-3 text-gray-400 border rounded-2xl p-1" href='/'>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Product</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Landingpage</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Features</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Documentation</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Referral Program</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Pricing</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Services</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Documentation</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Design</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Themes</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Illustrations</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>UI Kit</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-lg mb-3">Company</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>About</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Terms</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Privacy Policy</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/'>Careers</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">More</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/' >Documentation</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/' >License</a>
                                </li>
                                <li>
                                    <a className="text-gray-400 hover:text-white" href='/' >Changelog</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
