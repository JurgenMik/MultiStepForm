import React from 'react';

function SelectPlan({view, setView, setBilling, billing, plan, setPlan} : any) {

    const handleBack = () => {
        setView({...view, selectPlan : false, personalInfo : true});
    }

    const handleNext = () => {
        setView({...view, selectPlan : false, add_ons : true});
    }

    return (
        <div className="w-3/4 h-full ml-auto mr-auto">
            <div className="w-full h-36 flex flex-col justify-center space-y-2">
                <h1 className="text-4xl font-bold text-sky-900">
                    Select your plan
                </h1>
                <p className="text-gray-400 text-lg">
                    You have the option of monthly or yearly billing.
                </p>
            </div>
            <div className="w-full h-1/3 flex space-x-8">
                <div onClick={e => setPlan("arcade")} className={`w-full border ${plan === "arcade" ? "border-indigo-400" : "border-gray-300"} rounded-lg`}>
                    <img
                        src={"../assets/icon-arcade.svg"}
                        className="w-12 h-12 ml-6 mt-6"
                        alt="icon"
                    />
                    <div className="w-2/3 h-1/2 flex flex-col justify-end pl-6">
                        <h1 className="text-lg text-sky-900 font-bold">
                            Arcade
                        </h1>
                        {billing === 'monthly' ? <p className="text-gray-400">$9/mo</p> :
                            <div>
                                <p className="text-gray-400">
                                    $90/yr
                                </p>
                                <p className="text-xs text-indigo-500 mt-2 font-bold">
                                    2 months free
                                </p>
                            </div>
                        }
                    </div>
                </div>
                <div onClick={e => setPlan("advanced")} className={`w-full border ${plan === "advanced" ? "border-indigo-400" : "border-gray-300"} rounded-lg`}>
                    <img
                        src={"../assets/icon-advanced.svg"}
                        className="w-12 h-12 ml-6 mt-6"
                        alt="icon"
                    />
                    <div className="w-2/3 h-1/2 flex flex-col justify-end pl-6">
                        <h1 className="text-lg text-sky-900 font-bold">
                            Advanced
                        </h1>
                        {billing === 'monthly' ? <p className="text-gray-400">$12/mo</p> :
                            <div>
                                <p className="text-gray-400">
                                    $120/yr
                                </p>
                                <p className="text-xs text-indigo-500 mt-2 font-bold">
                                    2 months free
                                </p>
                            </div>
                        }
                    </div>
                </div>
                <div onClick={e => setPlan("pro")} className={`w-full border ${plan === "pro" ? "border-indigo-400" : "border-gray-300"} rounded-lg`}>
                    <img
                        src={"../assets/icon-pro.svg"}
                        className="w-12 h-12 ml-6 mt-6"
                        alt="icon"
                    />
                    <div className="w-2/3 h-1/2 flex flex-col justify-end pl-6">
                        <h1 className="text-lg text-sky-900 font-bold">
                            Pro
                        </h1>
                        {billing === 'monthly' ? <p className="text-gray-400">$15/mo</p> :
                            <div>
                                <p className="text-gray-400">
                                    $150/yr
                                </p>
                                <p className="text-xs text-indigo-500 mt-2 font-bold">
                                    2 months free
                                </p>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <div className="w-full h-16 flex justify-center mt-6 space-x-6">
                <h1 onClick={e => setBilling("monthly")} className="text-indigo-500 hover:text-indigo-300 font-bold">
                    Monthly
                </h1>
                <h1 onClick={e => setBilling("yearly")} className="text-indigo-500 hover:text-indigo-300 font-bold">
                    Yearly
                </h1>
            </div>
            <div className="w-full h-16 mt-6 flex items-center">
                <p onClick={handleBack} className="text-gray-400 font-bold hover:text-gray-300">
                    Go Back
                </p>
                <button onClick={handleNext} className="p-3 w-1/5 rounded-lg bg-sky-900 text-white ml-auto float-right">
                    Next Step
                </button>
            </div>
        </div>
    );
}

export default SelectPlan;