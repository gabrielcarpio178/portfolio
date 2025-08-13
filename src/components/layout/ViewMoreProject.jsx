import { AnimatePresence, motion, useMotionValue } from "framer-motion"
import React, { useState } from "react";
import close from './../../icons/close-x-svgrepo-com.svg'

const DRAG_BUFFER = 50

function ViewMoreProject(props){
    const {id, img, title, backend, frontend, database, description} = props.project;
    const [dragImg, setDragImg] = useState(false);
    const [imgIndex, showImg] = useState(0);
    const dragX = useMotionValue(0)

    const onDragStart = ()=>{
        setDragImg(true);
    }

    const onDragEnd = ()=>{
        setDragImg(false);
        const x = dragX.get();
        if(x <= -DRAG_BUFFER && imgIndex < img.length-1){
            showImg(p => p+1)
        }else if(x >= -DRAG_BUFFER && imgIndex > 0) {
            showImg(p => p-1)
        }
    }

    const handleClickDot = id =>{
        showImg(id)
    }

    return(
        <> 
            
            <motion.section initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3}} exit={{opacity: 0}} className="fixed z-1 w-full h-full top-0 z-30">
                <div className="bg-black/20 h-full flex flex-col justify-center items-center">
                    <motion.div initial={{scale: 0, opacity: 0}} animate={{scale: 1, opacity: 1}} transition={{duration: 0.3}} exit={{scale: 0, opacity: 0}} className="flex flex-col items-center justify-center bg-slate-100 w-[70%] h-[95%] rounded-lg shadow-lg gap-y-5 relative">
                        <div className="absolute top-3 right-4 cursor-pointer" onClick={props.toggleShow}>
                            <img src={close} alt="close" className="w-5"/>
                        </div>
                        <div className="flex flex-row items-center gap-x-2 w-full justify-center h-full">
                            <div className="w-[65%] overflow-hidden mt-5">
                                <motion.div
                                 drag="x"
                                 dragConstraints={{ 
                                    right: 0,
                                    left: 0
                                 }}
                                 animate={{
                                    translateX: `-${imgIndex*100}%`
                                 }}
                                 onDragStart={onDragStart}
                                 onDragEnd={onDragEnd} 
                                 style={{
                                    x: dragX,
                                 }} className="flex flex-row items-center active:cursor-grab">
                                    <Images images={img} id={imgIndex}/>
                                </motion.div>
                                <Dots imagesData={{imgIndex, img}} handleClickDot={handleClickDot}/>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h1 className="text-center font-bold text-lg">{title}</h1>
                            <p className="p-5 text-sm">{description}</p>
                        </div>
                        
                    </motion.div>
                </div>
            </motion.section>
        </>
    )
}

function Images(props){
    const images = props.images;
    const id = props.id;
    return (
        <>
            {images.map((image, index)=>{
                return (
                    <div key={index} style={{
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    }}
                    className={`aspect-video shrink-0 object-contain w-full rounded-lg ${id!==index?"scale-95":"scale-100"}`} >
                        <img src={image} alt={index} />
                    </div>
                )
            })}
        </>
    )
}

function Dots(props){
    const {imgIndex, img} = props.imagesData;
    return(
        <>
            <div className="flex flex-row gap-x-2 items-center justify-center">
                {img.map((_, index)=>{
                    return (
                        <div key={index} onClick={()=>props.handleClickDot(index)} className={`rounded-full w-3 h-3 ${index===imgIndex?'bg-slate-500':'border border-black'} cursor-pointer`}/>
                    )
                })}
            </div>
        </>
    )
}




export default ViewMoreProject;