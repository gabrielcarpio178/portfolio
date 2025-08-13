import {motion} from 'framer-motion'
export function ProjectCard(props){
    
    return (
        <>
            <motion.div initial={{opacity: 0, translateY: "100%"}} whileInView={{opacity: 1, translateY: 0}} transition={{duration: 1, type: "spring"}} className="w-full h-full relative z-10">
                <div className="flex flex-col items-center w-full shadow-md rounded-lg p-2 h-full">
                    <img src={props.project.img[0]} alt="img-alumni" className="max-w-[100%] w-72 h-56"/>
                    <div className="text-xl font-bold text-center">
                        {props.project.title}
                    </div>
                    <motion.div initial={{opacity: 0}} whileHover={{opacity: 1, bottom: 0}} transition={{duration: 0.5, type: "spring"}} className="px-10 py-5 flex flex-col justify-center items-center absolute border bg-black/50 w-full h-full rounded-lg text-white">
                        <div className='flex flex-row justify-center items-center gap-x-4'>
                            <div className='flex flex-col items-center'>
                                <div className='w-20 max-w-full bg-white rounded-lg shadow-xl h-auto'>
                                    <img src={props.project.backendImg} alt="backend"/>
                                </div>
                                <div className='text-lg font-bold'>
                                    {props.project.backend}
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-20 max-w-full bg-white rounded-lg shadow-xl h-auto'>
                                    <img src={props.project.frontendImg} alt="frontend"/>
                                </div>
                                <div className='text-lg font-bold'>
                                    {props.project.frontend}
                                </div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='w-20 max-w-full bg-white rounded-lg shadow-xl h-auto'>
                                    <img src={props.project.databaseImg} alt="database"/>
                                </div>
                                <div className='text-lg font-bold'>
                                    {props.project.database}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <button type="button" onClick={()=>props.handleViewMore(props.project.id)} className="bg-slate-700 p-3 rounded-lg font-bold shadow-xl border border-slate-700 hover:bg-transparent transition-all duration-100 w-1/2 mt-2">View More</button>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            
        </>
    )
};

export function MiniProjectCard(props){
    const {title, programmingLang, programmingName, link, img} = props.project;
    return(
        <>
            <motion.div initial={{opacity: 0, translateY: "100%"}} whileInView={{opacity: 1, translateY: 0}} transition={{duration: 1, type: "spring"}} className='w-full h-full relative'>
                <div className='flex flex-col items-center shadow-md rounded-lg h-full'>
                    <div className='w-20 max-w-full'>
                        <img src={img} alt={programmingName} />
                    </div>
                    <div className='text-md text-center font-semibold'>
                        {title}
                    </div>
                    <motion.div initial={{opacity: 0}} whileHover={{opacity: 1, bottom: 0}} transition={{duration: 0.5, type: "spring"}} className='absolute bg-black/50 w-full h-full rounded-lg flex flex-col items-center justify-center'>
                        <div className='bg-white rounded-lg shadow-md w-20 max-w-full'>
                            <img src={programmingLang} alt={programmingName} />
                        </div>
                        <div className='text-white font-semibold'>
                            {programmingName}
                        </div>
                        <div className="flex items-center justify-center w-full">
                            <a href={link} target='_black' className="bg-slate-700 p-3 rounded-lg font-bold shadow-xl border border-slate-700 hover:bg-transparent transition-all duration-100 w-1/2 mt-2 text-white text-xs text-center cursor-pointer">View</a>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}