import HomepageImg from './../images/porfolio-img/gabriel-carpio.jpg'
import {motion} from 'framer-motion'

function Homepage(){
    const personalData = {
        name:"gabriel h. carpio",
        discription: "Developer in profession"
      }
    return (
        <>
            <div className="pt-16 md:px-[10%] px-[5%] w-full flex md:flex-row flex-col-reverse items-center justify-between md:h-[100vh] h-full" id="home">
                <section className="flex flex-col gap-y-3 md:w-1/2 items-center">
                    <div className="text-3xl">
                        Welcome to my porfolio website
                    </div>
                    <div className="text-5xl font-bold flex gap-x-2 self-center">
                        I'm <motion.div initial={{width: 0}} whileInView={{width: "auto"}} transition={{duration: 1.5, ease: "backInOut"}} className="capitalize text-red-700 overflow-hidden whitespace-nowrap">{personalData.name}</motion.div>
                    </div>
                    <div className="text-2xl capitalize">
                        {personalData.discription}
                    </div>
                </section>
                <section className="md:w-96 md:h-96 w-80 h-80 flex items-center justify-center">
                    <img
                    className="md:w-96 w-80 md:h-96 h-80 rounded-full object-cover"
                    src={HomepageImg}
                    alt="homepage-img"
                    />
                </section>
            </div>
        </>
    )
}


export default Homepage