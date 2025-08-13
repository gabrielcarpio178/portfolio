
export default function Skills(props){
    const {icon, name, percentData} = props.skill
    return(
        <>
            <div className="flex flex-row w-full shadow-lg rounded-lg items-center px-2">
                <div className="flex flex-col w-1/6 items-center">
                    <img src={icon} alt={name} className="w-10 max-w-full"/>
                </div>
                <div className="border border-slate-700 shadow-inner w-5/6 h-[50%] rounded-sm">

                    <div className="bg-slate-700 h-full rounded-sm font-bold flex items-center justify-center text-white" style={{
                        width: `${percentData}%`
                    }}>
                        {percentData}%
                    </div>

                </div>
            </div>
        </>
    )
}