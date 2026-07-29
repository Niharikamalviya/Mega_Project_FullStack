import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

import Banner from "../assets/Images/banner.mp4"
//import Footer from "../components/Common/Footer"
// import ReviewSlider from "../components/Common/ReviewSlider"
import CTAButton from "../components/core/HomePage/Button"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
// import ExploreMore from "../components/core/HomePage/ExploreMore"
import HighlightText from "../components/core/HomePage/HighlightText"
// import InstructorSection from "../components/core/HomePage/InstructorSection"
// import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection"
// import TimelineSection from "../components/core/HomePage/Timeline"

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
            <div className="bg-pure-greys-5 text-richblack-700">
                <div className="homepage_bg h-[320px]">
                    {/* Explore Full Catagory Section */}
                    <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
                        <div className="lg:h-[150px]"></div>
                        <div className="flex flex-row gap-7 text-white lg:mt-8">
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="flex items-center gap-2">
                                    Explore Full Catalog
                                    <FaArrowRight />
                                </div>
                            </CTAButton>
                            <CTAButton active={false} linkto={"/login"}>
                                Learn More
                            </CTAButton>
                        </div>
                    </div>
                </div>

                <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
                    {/* Job that is in Demand - Section 1 */}
                    <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
                        <div className="text-4xl font-semibold lg:w-[45%] ">
                            Get the skills you need for a{" "}
                            <HighlightText text={"job that is in demand."} />
                        </div>
                        <div className="flex flex-col items-start gap-10 lg:w-[40%]">
                            <div className="text-[16px]">
                                The modern Learn Kode is the dictates its own terms. Today, to
                                be a competitive specialist requires more than professional
                                skills.
                            </div>
                            <CTAButton active={true} linkto={"/signup"}>
                                <div className="">Learn More</div>
                            </CTAButton>
                        </div>
                    </div>
                    {/* 
                    Timeline Section - Section 2 */}
                    {/* <TimelineSection /> */}

                    {/* Learning Language Section - Section 3 */}
                    {/* <LearningLanguageSection /> */}
                </div>
            </div>


            {/* section 3 */}
            <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
                {/* Become a instructor section */}
                {/* <InstructorSection /> */}

                {/* Reviws from Other Learner */}
                <h1 className="text-center text-4xl font-semibold mt-8">
                    Reviews from other learners
                </h1>
                {/* <ReviewSlider /> */}
            </div>

            {/* footer */}
            {/* <Footer /> */}

        </div>
    )
}

export default Home