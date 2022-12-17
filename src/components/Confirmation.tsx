import React from 'react';

function Confirmation() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
            <img
                src={"../assets/icon-thank-you.svg"}
                alt="icon"
            />
            <h1 className="text-2xl text-sky-900 font-bold">
                Thank you!
            </h1>
            <p className="text-gray-400 text-lg text-center">
                Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support,
                please feel free to email us at support@loremgaming.com
            </p>
        </div>
    );
}

export default Confirmation;