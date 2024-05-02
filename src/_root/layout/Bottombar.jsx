import React from 'react'

const Bottombar = () => {
    return (
        <footer className='w-full bg-[#FEF3DF] dark:bg-[#451d76] relative flex-centered pt-20'>
            <div className="section-width-default">
                <div className="flex justify-evenly mb-20">
                    <div className="">
                        <img className='signature dark:hidden object-cover w-[100px] lg:w-[300px] h-auto' src="/src/assets/images/signature-dark.svg" alt="" />
                        <img className='signature hidden dark:block object-cover w-[100px] lg:w-[300px] h-auto' src="/src/assets/images/signature.svg" alt="" />
                        <p>Zurich</p>
                        <p>Switzerland</p>
                    </div>
                    <div className="">
                        <h3>Resources</h3>
                        <p>Coursera</p>
                        <p>Udemy</p>
                        <p>youtube</p>
                    </div>
                    <div className="">
                        <h3>General</h3>
                        <p>Home</p>
                        <p>Projects</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                </div>
                <hr className='w-full h-2 text-dark-1' />
                <div className="flex justify-between">
                    <span>Copyright &copy; {new Date().getFullYear()} Paulo Lopes Reizinho.</span>
                    <span>All rights reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Bottombar