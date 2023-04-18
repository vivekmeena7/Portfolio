import React from 'react'
import{motion} from "framer-motion"

const Skill =({name,x,y})=>{
    return(
      <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 sahdow-dark cursor-pointer absolute dark:text-dark dark:bg-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' whileHover={{scale:1.05}} initial={{x:0,y:0}} whileInView={{  x:x,y:y,transition:{duration:1.5}  }}  viewport={{once: true}}>
                {name}
            </motion.div>
    )
}

const Skills = () => {
  return (
    <div>
      <>
        <h2 className='font-bold text-8xl mt-56 w-full text-center mb-8 md:text-6xl md:mt-32'>
            Skills
        </h2>
        <div className='w-full  h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] md:h-[60vh] xs:h-[45vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg 
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        '>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 sahdow-dark cursor-pointer  dark:text-dark dark:bg-light lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale:1.05}}>
                Web
            </motion.div>

            <Skill name="CSS" x="-5vw" y="-13vw"/>
            <Skill name="HTML" x="22vw" y="11vw"/>
            <Skill name="Javascript" x="-23vw" y="10vw"/>
            <Skill name="ReactJS" x="-24vw" y="-8vw"/>
            <Skill name="NextJS" x="19vw" y="-13vw"/>
            <Skill name="Web Design" x="-24vw" y="-16vw"/>
            <Skill name="Python" x="2vw" y="14vw"/>
            <Skill name="C++" x="9vw" y="-6vw"/>
            <Skill name="Figma" x="12vw" y="22vw"/>
            <Skill name="Firebase" x="-13vw" y="2vw"/>
            <Skill name="MySQL" x="31vw" y="-8vw"/>
            <Skill name="MongoDB" x="-17vw" y="20vw"/>
            <Skill name="Tailwind CSS" x="-34vw" y="2vw"/>
            <Skill name="Flutter" x="20vw" y="-2vw"/>
            <Skill name="Bootstrap" x="8vw" y="-22vw"/>
            <Skill name="NodeJS" x="32vw" y="7vw"/>
        </div>
      </>
    </div>
  )
}

export default Skills
