import {ProjectCard, MiniProjectCard} from "./layout/ProjectCard"

import AlumniHome from "./../images/project-img/alumni-home.jpg"
import AlumnDashboard from "./../images/project-img/alumni-dashboard.jpg"
import AlumniEditProfile from "./../images/project-img/alumni-edit-profile.jpg"
import AlumniListUser from "./../images/project-img/alumni-list-user.jpg"
import AlumniLogin from "./../images/project-img/alumni-login.jpg"

import DigitalPayAdminDashboard from "./../images/project-img/digital-pay-admin-dashboard.jpg"
import DigiatalPayCashierHome from "./../images/project-img/digital-pay-cashier-home.jpg"
import DigitalPayUserHome from "./../images/project-img/digital-pay-user-home.jpg"
import DigitalPayLogin from "./../images/project-img/digital-pay-login.jpg"
import DigitalPayCanteenStaff from "./../images/project-img/digital-pay-canteen-staff-home.jpg"

import NCMSHomepage from "./../images/project-img/homepage_ncms.png"
import NCMSLoginUser from "./../images/project-img/login-user_ncms.png"
import NCMSOfficerProgramManagement from "./../images/project-img/officer_program_management_ncms.png"
import NCMSRegistration from "./../images/project-img/registration_ncms.png"
import NCMSStaffDashBoard from "./../images/project-img/staff_dashboard_ncms.png"
import NCMSAboutUs from "./../images/project-img/aboutus_ncms.png"
import NCMSAdminDashBoard from "./../images/project-img/admin_dashboard_ncms.png"

import HouseholdHomepage from './../images/project-img/Our Lady of Peace-household home.png'
import HouseholdLogin from './../images/project-img/Our Lady of Peace-login.png'
import HouseholdDashboard from './../images/project-img/Our Lady of Peace-Dashboard.png'
import HouseholdBarangay from './../images/project-img/Our Lady of Peace-barangay.png'
import HouseholdHousehold from './../images/project-img/Our Lady of Peace-household.png'
import HouseholdAccessUser from './../images/project-img/Our Lady of Peace-access-user.png'
import HouseholdRecord from './../images/project-img/Our Lady of Peace-Records.png'
import HouseholdSetting from './../images/project-img/Our Lady of Peace-settings.png'
import HouseholdSurveyForm from './../images/project-img/Our Lady of Peace-survey-form.png'

import ProfilingDashboard from './../images/project-img/OLPP Cemetery Profiling-dashboard.png'
import ProfilingGroup from './../images/project-img/OLPP Cemetery Profiling-group.png'
import ProfilingLogin from './../images/project-img/OLPP Cemetery Profiling-login.png'
import ProfilingHomepage from './../images/project-img/OLPP Cemetery Profiling-homepage.png'
import ProfilingMasterList from './../images/project-img/OLPP Cemetery Profiling-master-list.png'
import ProfilingPayment from './../images/project-img/OLPP Cemetery Profiling-payment.png'
import ProfilingSettings from './../images/project-img/OLPP Cemetery Profiling-settings.png'
import ProfilingUserAccess from './../images/project-img/OLPP Cemetery Profiling-user-access.png'

import GuestFlagImg from "./../images/project-img/guestFlag.png"
import YoutubeMp3Downloader from "./../images/project-img/youtubeMp3Dwonloadv2.png"

import Phpimg from "./../icons/php.png"
import Htmlimg from "./../icons/html.svg"
import TailwindImg from "./../icons/tailwind.svg"
import { ReactComponent as VueIcon } from './../icons/Vuejs.svg';
import Mysqlimg from "./../icons/mysql.svg"
import Nodejs from "./../icons/nodejs.svg"
import LaravelImg from "./../icons/laravel.svg"
import JavaScript from "./../icons/javascript.svg"
import ReactJs from "./../icons/react.svg"

import ViewMoreProject from "./layout/ViewMoreProject"

import React, {useState} from "react"
import { AnimatePresence } from "framer-motion"
import { img } from "motion/react-client"

function Project(){
    const myProject = [
        {
            id: 1,
            img: [DigitalPayLogin, DigitalPayAdminDashboard, DigiatalPayCashierHome, DigitalPayUserHome, DigitalPayCanteenStaff], 
            title:"Bago City College Digital Payment System", 
            backend: "PHP", 
            frontend: "HTML/CSS", 
            database: "Mysql", 
            backendImg: Phpimg,
            frontendImg: Htmlimg,
            databaseImg: Mysqlimg,
            description: 'The BCC digital payment system, developed in PHP, efficiently manages school fees and canteen transactions for Bago City College. Key features include integration with the Technopal student API for cash-ins, transaction history, and reporting. The system supports four levels of user authentication for security, allowing administrators, canteen staff, students, and cashiers to perform specific tasks like managing payments, generating reports, and making transactions. The platform is mobile-friendly, customizable, and scalable, providing a secure and transparent solution for managing financial transactions at the school.'
        },
        {
            id: 2,
            img: [NCMSLoginUser, NCMSHomepage, NCMSAboutUs, NCMSRegistration, NCMSAdminDashBoard, NCMSOfficerProgramManagement, NCMSStaffDashBoard], 
            title:"NOLITC Content Management System", 
            backend: "Laravel", 
            frontend: "Tailwind", 
            database: "Mysqli",
            backendImg: LaravelImg,
            frontendImg: TailwindImg,
            databaseImg: Mysqlimg,
            description: "A web application for managing website content and applicant registrations with roles for admin, officers, and staff. Admins handle both post management and applicant oversight, ensuring smooth operations. Officers oversee applicant processes, while staff focus on updating content. The system offers secure registration, form validation, user dashboards, and status tracking, with robust security and scalability features."
        },
        {
            id: 3,
            img: [AlumniLogin, AlumniHome, AlumnDashboard, AlumniEditProfile, AlumniListUser], 
            title:"I Tech Alumni Information System", 
            backend: "NodeJS", 
            frontend: "VueJS", 
            database: "Mysqli",
            backendImg: Nodejs,
            frontendImg: VueIcon,
            databaseImg: Mysqlimg,
            description: "The Alumni Information System is designed to engage alumni by managing profiles, tracking job statuses, and providing job opportunities and event organization. Key features include job status updates, event registration, networking, and news sharing. Alumni can post job openings, connect with peers, and stay updated on events. Administrators can manage profiles, track engagement, and generate reports. The system supports career development, professional networking, and community engagement while streamlining communication and event management for the institution."
        },
        {
            id: 4,
            img: [HouseholdHomepage, HouseholdLogin, HouseholdDashboard, HouseholdBarangay, HouseholdHousehold, HouseholdRecord, HouseholdAccessUser, HouseholdSetting, HouseholdSurveyForm], 
            title:"Our Lady of Peace Parish Diocese of Bacolod", 
            backend: "NodeJS", 
            frontend: "ReactJs", 
            database: "Mysqli",
            backendImg: Nodejs,
            frontendImg: ReactJs,
            databaseImg: Mysqlimg,
            description: "The Our Lady of Peace Parish Household System is a community-focused initiative designed to strengthen the spiritual and social connections among parish families. It organizes households to encourage active participation in church activities, promote spiritual growth, and foster a sense of belonging. Key features include spiritual formation, community engagement, pastoral care, event coordination, and streamlined communication. This system helps ensure that every household is supported and connected, reflecting the values of peace and unity within the Diocese of Bacolod."
        },
        {
            id: 5,
            img: [ProfilingHomepage, ProfilingLogin, ProfilingDashboard, ProfilingGroup, ProfilingMasterList, ProfilingPayment, ProfilingSettings, ProfilingUserAccess], 
            title:"OLPP Cemetery Profiling", 
            backend: "NodeJS", 
            frontend: "ReactJs", 
            database: "Mysqli",
            backendImg: Nodejs,
            frontendImg: ReactJs,
            databaseImg: Mysqlimg,
            description: "The OLPP Cemetery Profiling system organizes and manages gravesite information at the Our Lady of Peace Parish cemetery. It includes detailed records of burials, tracks maintenance needs, and groups family plots for easy navigation. The system also enables easy searching for grave locations, helps coordinate memorial services, and ensures the security of cemetery records, offering both accessibility and respect for the deceased."
        },
       
    ]

    const myMiniProject = [
        {
            title: "Guest Flag",
            programmingLang:  JavaScript,
            programmingName: "Javascript",
            link: "https://gabrielcarpio178.github.io/guess_the_flag_country/",
            img: GuestFlagImg
        },
        {
            title: "Youtube to MP3 Download v2",
            programmingLang:  JavaScript,
            programmingName: "Javascript",
            link: "https://gabrielcarpio178.github.io/Youtube-to-mp3-v2/",
            img: YoutubeMp3Downloader
        },
    ]

    const [isShow, isShowState] = useState(false);
    const [selectedProject, selectedProjectState] = useState({})

    const handleViewMore = id =>{
        isShowState(!isShow);
        const seletectedProjectContent = myProject.filter(project =>{ return project.id === id })[0];
        console.log(id)
        selectedProjectState(seletectedProjectContent)
    }
    return(
        <>
            <section className="pt-24" id="project">
                <div className="text-center text-5xl font-bold">
                    Projects
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-3 grid-cols-1 p-5">
                    {myProject.reverse().map((project, index)=>{
                       return(<ProjectCard project={project} key={index} handleViewMore={handleViewMore}/>)
                    })}
                </div>
                <div className="mt-2 grid md:grid-cols-6 grid-cols-2 p-5 gap-5 w-full h-full">
                    {myMiniProject.reverse().map((project, index)=>{
                        return(<MiniProjectCard project={project} key={index}/>)
                    })}
                </div>
            </section>
            <AnimatePresence>
                {isShow && <ViewMoreProject project={selectedProject} toggleShow={()=>isShowState(!isShow)}/>}
            </AnimatePresence>
            
        </>
    );
}

export default Project;