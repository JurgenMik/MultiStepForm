import React, {useState} from 'react';
import Confirmation from "./Confirmation";

function Summary({plan, billing, view, setView} : any) {

    const [confirm, setConfirm] = useState<boolean>(false);

    const handleBack = () => {
        setView({...view, add_ons : true, summary : false});
    }

    const handleSelectPlanView = () => {
        setView({...view, summary : false, selectPlan : true});
    }

    const handleConfirm = () => {
        setConfirm(true);
    }

    return (
        <div className="w-3/4 h-full ml-auto mr-auto">
            {confirm ? <Confirmation/> :
                <>
                    <div className="w-full h-36 flex flex-col justify-center space-y-2">
                        <h1 className="text-4xl font-bold text-sky-900">
                            Finishing up
                        </h1>
                        <p className="text-gray-400 text-lg">
                            Double-check everything looks OK before confirming.
                        </p>
                    </div>
                    <div className="w-full h-3/5">
                        <div className="w-full h-24 flex border-b border-gray-300">
                            <div className="w-4/5 flex flex-col space-y-1">
                                <h1 className="text-lg text-sky-900 font-bold">
                                    {plan.plan} ({billing})
                                </h1>
                                <h1 onClick={handleSelectPlanView}
                                    className="text-gray-400 underline hover:text-gray-300">
                                    Change
                                </h1>
                            </div>
                            <div className="w-1/5 flex items-center">
                                <p className="text-lg font-bold text-sky-900">
                                    {billing === 'monthly' ? plan.cost[0] : plan.cost[1]}
                                </p>
                            </div>
                        </div>
                        <div className="w-full h-36 flex flex-col space-y-4 mt-4">
                            {plan.add_ons.map((selected : any) => {
                                return (
                                    <div className="w-full h-16 flex" key={selected.selected}>
                                        <div className="w-4/5">
                                            <h1 className="text-gray-400">
                                                {selected.selected}
                                            </h1>
                                        </div>
                                        <div className="w-1/5 text-sky-900">
                                            {billing === 'monthly' ? <p>+${selected.price.monthly}/mo</p> :
                                                <p>+${selected.price.yearly}/y</p>
                                            }
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="w-full h-16 mt-6 flex items-center">
                        <p onClick={handleBack} className="text-gray-400 font-bold hover:text-gray-300">
                            Go Back
                        </p>
                        <button onClick={handleConfirm}
                                className="p-3 w-1/5 rounded-lg bg-indigo-600 text-white ml-auto float-right">
                            Confirm
                        </button>
                    </div>
                </>
            }
        </div>
    );
}

export default Summary;