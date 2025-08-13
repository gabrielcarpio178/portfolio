import UserLogo from './../icons/uis--user-md.svg';
import {motion} from 'framer-motion'

import Skills from "./layout/Skills"

import Phpimg from "./../icons/php.png"
import JavaImg from "./../icons/java.svg"
import TailwindImg from "./../icons/tailwind.svg"
import BootstrapImg from "./../icons/boostrap.svg"
import VuejsImg from "./../icons/vuejs.svg"
import ReactImg from "./../icons/react.svg"
import Mysqlimg from "./../icons/mysql.svg"
import NodejsImg from "./../icons/nodejs.svg"
import LaravelImg from "./../icons/laravel.svg"
import JavaScriptImg from "./../icons/javascript.svg"

function About(){

    const charVariants = {
        hidden: {opacity: 0},
        reveal: {opacity: 1}
    }

    const skillVariants = {
        initial: {translateX: "100%"},
        end: {translateX: 0}
    }
    
    const textContent = "A passionate and driven web developer with a Bachelor of Science in Information Systems from Bago City College. During my academic journey, I was honored to be awarded Programmer of the Year upon graduation, recognizing my dedication and skills in software development. In addition to my academic achievements, I successfully completed an intensive Software Development Training Program under Coders Tribe, where I was awarded Best Programmer for creating innovative and efficient project solutions.I specialize in developing user-friendly, responsive, and dynamic web applications, and I'm always eager to learn and explore new technologies. My mission is to build impactful digital solutions that solve real-world problems and create seamless user experiences.Let's connect and build something amazing together!";

    const skills = [
        {
            icon: BootstrapImg,
            name: "Bootstrap",
            percentData: 45
        },
        
        {
            icon: TailwindImg,
            name: "Tailwind",
            percentData: 40
        },
        {
            icon: VuejsImg,
            name: "VueJs",
            percentData: 35
        },
        {
            icon: ReactImg,
            name: "ReactJs",
            percentData: 30
        },
        {
            icon: JavaScriptImg,
            name: "Javascript",
            percentData: 40
        },
        {
            icon: NodejsImg,
            nama: "NodeJs",
            percentData: 55
        },
        {
            icon: Phpimg,
            name: 'Php',
            percentData: 60
        },
        {
            icon: LaravelImg,
            name: "Laravel",
            percentData: 50
        },
        {
            icon: JavaImg,
            name: "Java",
            percentData: 30
        },
        {
            icon: Mysqlimg,
            name: "Mysql",
            percentData: 50
        }
    ];

    return (
        <>
            <section className="pt-20 overflow-hidden" id="about">
                <div className="text-center text-5xl font-bold">
                    About Me
                </div>
                <div className="flex md:flex-row flex-col gap-x-2 mx-10">
                    <motion.div initial={{opacity: 0 ,translateX: "-100%"}} whileInView={{opacity: 1, translateX: 0}} transition={{duration: 1, type: "spring"}} className="md:w-1/2 w-full mt-5">
                        <div className='w-full flex items-center gap-x-5'>
                            <img src={UserLogo} alt="profile" className='w-32 max-w-full'/>
                            <h1 className='font-bold text-4xl self-end'>
                                Hi I'm <span className='text-red-700'>Gabriel Carpio</span>
                            </h1>
                        </div>
                        <motion.div initial="hidden" whileInView="reveal" transition={{staggerChildren: .007}} className='p-4 font-sans'>
                             {textContent.split("").map((charText, index)=>{
                                return(<motion.span transition={{duration: 0.5}} variants={charVariants} key={index}>{charText}</motion.span>)
                             })}
                        </motion.div>
                    </motion.div>
                    <motion.div initial={{opacity: 0 ,translateX: "100%"}} whileInView={{opacity: 1, translateX: 0}} transition={{duration: 1, type: "spring"}} className='md:w-1/2 w-full'>
                        <div className='py-10'>
                            <h1 className='text-4xl font-bold'>
                                Skills
                            </h1>   
                        </div> 
                        <motion.div initial="initial" whileInView="end" transition={{staggerChildren: .05}} className='grid md:grid-cols-2 grid-cols-1 gap-4 w-full'>
                             {skills.map((skill, index)=>{
                                return(
                                <motion.div transition={{duration: 0.5}} variants={skillVariants} key={index}>
                                    <Skills skill={skill}/>
                                </motion.div>
                                )
                             })}
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default About