import Phone from "./../icons/phone.svg"
import Gmail from "./../icons/gmail.svg"
import Facebook from "./../icons/facebook.svg"
import LinkedIn from "./../icons/linkedin.svg"

import {motion} from 'framer-motion'

function Contact(){
    const contacts = [
        {
            'name':'gmail',
            'icon':Gmail,
            'link':'mailto:gabrielcarpio178@email.com"'
        }, 
        {
            'name':'Facebook',
            'icon':Facebook,
            'link':'https://www.facebook.com/gcarpio51'
        }, 
        {
            'name':'LinkedIn',
            'icon':LinkedIn,
            'link':'https://www.linkedin.com/in/gabriel-carpio-33737531b'
        }, 
        {
            'name':'+639708038647',
            'icon':Phone,
            'link':'tel:+639708038647'
        }
    ];
    return (
        <>
             <section className="pt-24" id="contact">
                <div className="text-center text-5xl font-bold">
                    Contact
                </div>
                <motion.div initial={{opacity: 0, translateY: "100%"}} whileInView={{opacity: 1, translateY: 0}} transition={{duration: 1, type: "spring"}} className="mt-5 flex flex-row items-center justify-center w-full gap-x-10 py-24">
                  {contacts.map(contact=>{
                    return (
                        <a href={contact.link} target="_blank" className="border border-1 rounded-full p-1 flex flex-col w-32 h-32 shadow-md items-center justify-center" key={contact.name}>
                            <img src={contact.icon} alt="contact image" className="w-1/2" />
                            <h3 className="capitalize text-center">{contact.name}</h3>
                        </a>
                    )
                  })}
                </motion.div>
            </section>        
        </>
    )      
}

export default Contact