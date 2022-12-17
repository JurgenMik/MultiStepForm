import React, {useState} from 'react';

function PersonalInfo({personalDetails, setDetails, setView, view} : any) {
    const [validate, setValidate] = useState({
        nameError: '',
        emailError: '',
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setDetails({...personalDetails, [e.target.name] : e.target.value});
    }

    const handleValidation = () => {
        let nameError = '';
        let emailError = '';

        if (!personalDetails.name) { nameError = 'Please provide your name in the field'; }

        if (!personalDetails.email || !personalDetails.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
            emailError = 'Invalid or Empty email';
        }

        if (nameError) {
            setValidate({...validate, nameError: nameError});
            return false;
        }

        if (emailError) {
            setValidate({...validate, emailError: emailError});
            return false;
        }
        return true;
    }

    const handleNext = () => {
        const isValid : boolean = handleValidation();

        if (isValid) { setView({...view, personalInfo : false, selectPlan : true});}
    }

    return (
        <div className="w-3/4 h-full ml-auto mr-auto">
            <div className="w-full h-36 flex flex-col justify-center space-y-2">
                <h1 className="text-4xl font-bold text-sky-900">
                    Personal Info
                </h1>
                <p className="text-gray-400 text-lg">
                    Please provide your name, email address, and phone number
                </p>
            </div>
            {validate.nameError || validate.emailError ?
                <div className="text-red-600 mb-2">
                    <h1>{validate.nameError}</h1>
                    <h1>{validate.emailError}</h1>
                </div>
            : null}
            <div className="w-full h-1/2 flex flex-col space-y-3">
                <label className="text-sky-900 font-bold text-sm">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="e.g Stephen King"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    onChange={handleChange}
                />
                <label className="text-sky-900 font-bold text-sm">
                    Email Address
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="e.g stephenking@lorem.com"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    onChange={handleChange}
                />
                <label className="text-sky-900 font-bold text-sm">
                    Phone Number
                </label>
                <input
                    type="number"
                    name="phone_nb"
                    placeholder="e.g + 1 234 567 890"
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    onChange={handleChange}
                />
            </div>
            <div className="w-full h-36 flex items-center justify-end">
                <button onClick={handleNext} className="p-3 w-1/5 rounded-lg bg-sky-900 text-white">
                    Next Step
                </button>
            </div>
        </div>
    );
}

export  default PersonalInfo;