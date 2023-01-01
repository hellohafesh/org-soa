import React from 'react';

const Progress = () => {
    return (
        <>
            <div className="stats shadow mt-10 p-5 w-full">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Volunteer</div>
                    <div className="stat-value text-primary">100 +</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Happy People</div>
                    <div className="stat-value text-secondary">1 k +</div>
                    <div className="stat-desc">33% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-24 rounded-full">
                                <img alt='' src="https://i.ibb.co/3pRKnP0/307314424-385836870431319-3448937172785325094-n-1-removebg-preview.png" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">23</div>
                    <div className="stat-title">Team Member</div>
                    <div className="stat-desc text-secondary">Regional Team Comming</div>
                </div>

            </div>








            <div className='' style={{ backgroundImage: `url("https://as1.ftcdn.net/v2/jpg/03/20/76/68/1000_F_320766804_s59tRo6X9cxZL0g1s7bZEZA9STBCF3bx.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className=" bg-gradient-to-tl from-current ">
                    <div className=' h-auto w-full  bg-gradient-to-r from-current grid xl:grid-cols-4 2xl:grid-cols-4  lg:grid-cols-4 sm:grid-cols-1 grid-cols-1 justify-between item-center'>

                        <div className='p-4 mx-auto'>
                            <div className="radial-progress text-gray-300 font-bold text-2xl" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }}>70%</div>
                            <h2 className='text-gray-300 mx-auto text-xl font-bold w-1/2 text-center mt-2'>VOLUNTEER ENGAGEMENT</h2>
                        </div>
                        <div className='p-4 mx-auto'>
                            <div className="radial-progress text-gray-300 font-bold text-2xl" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }}>70%</div>
                            <h2 className='text-gray-300 mx-auto text-xl font-bold w-1/2 text-center mt-2'>PATIENT RECOVERY RATE</h2>
                        </div>
                        {/* <div className='p-4 mx-auto'>
                            <div className="radial-progress text-gray-300 font-bold text-2xl" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }}>70%</div>
                            <h2 className='text-gray-300 text-xl font-bold w-1/2 text-center mt-2'>EMERGENCY SITUATION RESPONSE RATE</h2>
                        </div> */}
                        <div className='p-4 mx-auto'>
                            <div className="radial-progress mx-auto text-gray-300 font-bold text-2xl" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }}>70%</div>
                            <h2 className='text-gray-300 mx-auto text-xl font-bold w-1/2 text-center mt-2'>EMERGENCY RESPONSE </h2>
                        </div>
                        <div className='p-4 mx-auto'>
                            <div className="radial-progress text-gray-300 font-bold text-2xl" style={{ "--value": "70", "--size": "12rem", "--thickness": "1rem" }}>70%</div>
                            <h2 className='text-gray-300 mx-auto text-xl font-bold w-1/2 text-center mt-2'>STUDENTS PASSING RATE</h2>
                        </div>
                    </div>

                </div>
            </div>








        </>
    );
};

export default Progress;