import React from 'react'
import CTAButton from "./Button"
import HignlightText from "./HighlightText"
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({ active, position, heading, subheading, ctabtn1, ctabtn2, codeblocks, backgroundGradient, codeColor }) => {

    return (
        <div className={`w-11/12 flex ${position} my-20 justify-between mx-auto gap-10 items-center`}>
            {/* section 1  */}
            <div className="w-[50%] flex flex-col gap-8 ml-[20px]">
                {heading}
                <div className="text-gray-300 font-bold">
                    {subheading}
                </div>

                <div className="flex gap-7 mt-7">
                    <CTAButton active={ctabtn1.active} linkto={ctabtn1.linkto}>
                        <div className="flex gap-2 items-center">
                            {ctabtn1.btnText}
                            <FaArrowRight />
                        </div>
                    </CTAButton>

                    <CTAButton active={ctabtn2.active} linkto={ctabtn2.linkto}>

                        {ctabtn2.btnText}
                    </CTAButton>

                </div>
            </div>

            {/* section 2 */}

            <div className={`h-fit flex flex-row ${backgroundGradient} py-3 text-[10px] border border-slate-400 sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px] mr-[20px]`}>
                {/*background gradient  */}
                {/* indexing */}
                <div className="text-center flex flex-col w-[10%] select-none text-gray-400 font-inter font-bold">
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
                {/* codes */}
                <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono  ${codeColor} pr-1`}>
                    <TypeAnimation
                        sequence={[codeblocks, 2000, ""]}
                        repeat={Infinity}
                        cursor={true}
                        omitDeletionAnimation={true}

                        style={
                            {
                                whiteSpace: "pre-line",
                                display: "block",
                            }
                        }

                    />
                </div>
            </div>

        </div>
    )

}
export default CodeBlocks