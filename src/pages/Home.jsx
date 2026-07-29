import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighlightText from "../components/core/Homepage/HighlightText"
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/codeBlocks"

const Home = () => {
    return (
        <div>
            {/* section 1 */}
            <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
                <Link to={"/signup"}>
                    <div className="group mx-auto rounded-full bg-gray-800 font-bold text-gray-200 transition-all duration-200 hover:scale-95 w-fit mt-16 p-1">
                        <div className="flex flex-row items-center gap-2 rounded-full px-10 py-[5px] group-hover:bg-black">
                            <p>Become an instructure</p>
                            <FaArrowRight />
                        </div>
                    </div>
                </Link>

                <div className="text-center text-4xl font-semibold mt-7 ">
                    Empower Your Future With
                    <HighlightText text={"Coding Skills"} />

                </div>

                <div className="mt-4 w-[70%] text-center text-lg font-bold text-gray-500">
                    With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                </div>

                <div className="flex flex-row gap-7 mt-4">
                    <CTAButton active={true} linkto={"/signup"}>
                        Learn More
                    </CTAButton>
                    <CTAButton active={false} linkto={"/login"}>
                        Book a Demo
                    </CTAButton>

                </div>
                <div className="max-w-[1200px] mx-3 my-12 shadow-blue-200 shadow-lg">
                    <video
                        className=""
                        muted
                        loop
                        autoPlay
                    >
                        <source src={Banner} type="video/mp4" />
                    </video>
                </div>
                {/* core section 1*/}

                <div>
                    <CodeBlocks
                        position={"lg:flex-row"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock Your
                                <HighlightText text={"Coding potential"} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }

                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblocks={`<!DOCTYPE html> 
                            <html> 
                            head><title>Example</ 
                            title><link rel="stylesheet" href="styles.css"> 
                            </head> 
                            <body> 
                            <h1><a href="/">Header</a> 
                            </h1> 
                            <nav><a href="one/">One</a><a href="twoe/">Two</a>  
                            <a href="three/">Three</a> 
                            </nav>`

                        }
                        codeColor={
                            "text-yellow-300"

                        }
                    // backgroundGradient={
                    //     "bg-[radial-gradient(circle,_rgba(61,54,1,1)_21%,_rgba(3,3,0,1)_42%)]"
                    // }
                    />
                </div>

                {/* core section 2  */}

                <div>
                    <CodeBlocks
                        position={"lg:flex-row-reverse"}
                        heading={
                            <div className="text-4xl font-semibold">
                                Unlock Your
                                <HighlightText text={"Coding potential"} />
                                with our online courses
                            </div>
                        }
                        subheading={
                            "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                        }
                        ctabtn1={
                            {
                                btnText: "try it yourself",
                                linkto: "/signup",
                                active: true,
                            }
                        }

                        ctabtn2={
                            {
                                btnText: "learn more",
                                linkto: "/login",
                                active: false,
                            }
                        }

                        codeblocks={`<!DOCTYPE html> 
                            <html lang="en"> 
                            <head>
                            <title><link rel="stylesheet" href="styles.css"> 
                            </head> 
                            <body> 
                            <h1><a href="/">Header</a> 
                            </h1> 
                            <nav><a href="one/">One</a><a href="twoe/">Two</a>  
                            <a href="three/">Three</a> 
                            </nav>`


                        }
                        codeColor={
                            "text-cyan-200"
                        }

                    // backgroundGradient={
                    //     "bg-[radial-gradient(circle,_rgba(4,138,138,1)_0%,_rgba(2,2,94,1)_35%,_rgba(0,0,0,1)_100%)]"
                    // }
                    />
                </div>

            </div>

            {/* section 2 */}
            <div className="bg-gray-100 text-gray-700">
                <div className="homepage_bg h-[333px]">
                    <div className="w-11/12 max-w-maxContent flex items-center gap-5 mx-auto" ></div>

                </div>

            </div>


            {/* section 3 */}

            {/* footer */}

        </div>
    )
}

export default Home