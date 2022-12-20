import React, {useState} from 'react';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from "./components/SelectPlan";
import AddOns from "./components/AddOns";
import Summary from "./components/Summary";
import {info} from './Interfaces/PersonalInfo';
import {plan} from "./Interfaces/Plan";

function App() {

    const [view, setView] = useState({
        personalInfo: true,
        selectPlan: false,
        add_ons: false,
        summary: false
    })
    const [personalDetails, setDetails] = useState<info>({
        name: '',
        email: '',
        phone_nb: 0
    })
    const [plan, setPlan] = useState<plan>({
        plan: '',
        cost: [],
        add_ons: []
    });
    const [selected, setSelected] = useState({
        service: false,
        storage: false,
        custom: false
    })
    const [billing, setBilling] = useState<string>();

  return (
    <div className="w-full h-screen overflow-y-hidden">
        <div className="w-3/5 h-3/5 ml-auto mr-auto mt-36 flex">
            <div className="w-1/4 h-full flex items-center">
                <div className="w-11/12 h-full mr-auto ml-auto rounded-xl bg-sidebar bg-cover pl-2 flex flex-col">
                    <div className="w-full h-16 mt-4 flex space-x-4">
                        <div className="w-1/4 h-full flex justify-end items-center">
                            <span className={`w-10 h-10 rounded-full flex justify-center items-center ${view.personalInfo ? "border-0 bg-cyan-400" : "border border-white text-white"} font-bold`}>
                                <p>1</p>
                            </span>
                        </div>
                        <div className="w-3/4 flex flex-col justify-center">
                            <h1 className="text-sm text-gray-400">
                                STEP 1
                            </h1>
                            <p className="text-white font-semibold">
                                YOUR INFO
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-16 mt-4 flex space-x-4">
                        <div className="w-1/4 h-full flex justify-end items-center">
                            <span className={`w-10 h-10 rounded-full flex justify-center items-center ${view.selectPlan ? "border-0 bg-cyan-400" : "border border-white text-white"} font-bold`}>
                                <p>2</p>
                            </span>
                        </div>
                        <div className="w-3/4 flex flex-col justify-center">
                            <h1 className="text-sm text-gray-400">
                                STEP 2
                            </h1>
                            <p className="text-white font-semibold">
                                SELECT PLAN
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-16 mt-4 flex space-x-4">
                        <div className="w-1/4 h-full flex justify-end items-center">
                            <span className={`w-10 h-10 rounded-full flex justify-center items-center ${view.add_ons ? "border-0 bg-cyan-400" : "border border-white text-white"} font-bold`}>
                                <p>3</p>
                            </span>
                        </div>
                        <div className="w-3/4 flex flex-col justify-center">
                            <h1 className="text-sm text-gray-400">
                                STEP 3
                            </h1>
                            <p className="text-white font-semibold">
                                ADD-ONS
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-16 mt-4 flex space-x-4">
                        <div className="w-1/4 h-full flex justify-end items-center">
                            <span className={`w-10 h-10 rounded-full flex justify-center items-center ${view.summary ? "border-0 bg-cyan-400" : "border border-white text-white"} font-bold`}>
                                <p>4</p>
                            </span>
                        </div>
                        <div className="w-3/4 flex flex-col justify-center">
                            <h1 className="text-sm text-gray-400">
                                STEP 4
                            </h1>
                            <p className="text-white font-semibold">
                                SUMMARY
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-3/4 h-full">
                {view.personalInfo ? <PersonalInfo personalDetails={personalDetails} setDetails={setDetails} setView={setView} view={view} /> : null}
                {view.selectPlan ? <SelectPlan view={view} setView={setView} setBilling={setBilling} billing={billing} plan={plan} setPlan={setPlan} /> : null}
                {view.add_ons ? <AddOns view={view} setView={setView} billing={billing} plan={plan} setPlan={setPlan} selected={selected} setSelected={setSelected} /> : null}
                {view.summary ? <Summary plan={plan} billing={billing} view={view} setView={setView} /> : null}
            </div>
        </div>
    </div>
  );
}

export default App;
