import React, {useState} from 'react';

function AddOns({view, setView, billing, plan, setPlan} : any) {

    const [selected, setSelected] = useState({
        service: false,
        storage: false,
        custom: false
    })

    const handleCheckBoxChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setSelected({...selected, [e.target.name] : true});

        if (selected.service) {
            let addition = [...plan.add_ons];

            addition.push({selected: 'Online Service', price: {yearly: 10, monthly: 1}});
            setPlan({...plan, add_ons : addition});
        }
        if (selected.storage) {
            let addition = [...plan.add_ons];

            addition.push({selected: 'Larger Storage', price: {yearly: 20, monthly: 2}});
            setPlan({...plan, add_ons : addition});
        }
        if (selected.custom) {
            let addition = [...plan.add_ons];

            addition.push({selected: 'Custom Profile', price: {yearly: 20, monthly: 2}});
            setPlan({...plan, add_ons : addition});
        }
    }

    const handleBack = () => {
        setView({...view, selectPlan : true, add_ons : false});
    }

    const handleNext = () => {
        setView({...view, add_ons : false, summary : true});
    }

    return (
        <div className="w-3/4 h-full ml-auto mr-auto">
            <div className="w-full h-36 flex flex-col justify-center space-y-2">
                <h1 className="text-4xl font-bold text-sky-900">
                    Pick add-ons
                </h1>
                <p className="text-gray-400 text-lg">
                    Add-ons help enhance your gaming experience.
                </p>
            </div>
            <div className="w-full h-3/5 space-y-4">
                <div className={`w-full h-24 flex rounded-lg border ${selected.service ? "border-indigo-500" : "border-gray-300"}`}>
                    <div className="w-20 h-full flex items-center justify-center">
                        <input
                            type="checkbox"
                            name="service"
                            className="h-5 w-5 focus:ring-0"
                            onChange={handleCheckBoxChange}
                        />
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-center space-y-2">
                        <h1 className="text-lg text-sky-900 font-bold">
                            Online Service
                        </h1>
                        <p className="text-gray-400">
                            Access to multiplayer games
                        </p>
                    </div>
                    <div className="w-1/5 h-full flex items-center justify-center text-indigo-500 font-bold">
                        {billing === 'monthly' ? <p>+$1/mo</p> : <p>+$10/y</p>}
                    </div>
                </div>
                <div className={`w-full h-24 flex rounded-lg border ${selected.storage ? "border-indigo-500" : "border-gray-300"}`}>
                    <div className="w-20 h-full flex items-center justify-center">
                        <input
                            type="checkbox"
                            name="storage"
                            className="h-5 w-5 focus:ring-0"
                            onChange={handleCheckBoxChange}
                        />
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-center space-y-2">
                        <h1 className="text-lg text-sky-900 font-bold">
                            Larger Storage
                        </h1>
                        <p className="text-gray-400">
                            Extra 1TB of cloud save
                        </p>
                    </div>
                    <div className="w-1/5 h-full flex items-center justify-center text-indigo-500 font-bold">
                        {billing === 'monthly' ? <p>+$2/mo</p> : <p>+$20/y</p>}
                    </div>
                </div>
                <div className={`w-full h-24 flex rounded-lg border ${selected.custom ? "border-indigo-500" : "border-gray-300"}`}>
                    <div className="w-20 h-full flex items-center justify-center">
                        <input
                            type="checkbox"
                            name="custom"
                            className="h-5 w-5 focus:ring-0"
                            onChange={handleCheckBoxChange}
                        />
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-center">
                        <h1 className="text-lg text-sky-900 font-bold">
                            Customizable profile
                        </h1>
                        <p className="text-gray-400">
                            Custom theme on your profile
                        </p>
                    </div>
                    <div className="w-1/5 h-full flex items-center justify-center text-indigo-500 font-bold">
                        {billing === 'monthly' ? <p>+$2/mo</p> : <p>+$20/y</p>}
                    </div>
                </div>
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

export default AddOns;