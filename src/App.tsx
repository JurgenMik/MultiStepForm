import React from 'react';

function App() {
  return (
    <div className="w-full h-screen">
        <div className="w-3/5 h-3/5 ml-auto mr-auto mt-36 flex">
            <div className="w-1/4 h-full flex items-center">
                <div className="w-11/12 h-full mr-auto ml-auto rounded-xl bg-sidebar bg-cover pl-2 flex flex-col">
                    <div className="w-full h-16 mt-4 flex space-x-4">
                        <div className="w-1/4 h-full flex justify-end items-center">
                            <span className="w-10 h-10 rounded-full flex justify-center items-center border border-white font-bold">
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
                            <span className="w-10 h-10 rounded-full flex justify-center items-center border border-white font-bold">
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
                            <span className="w-10 h-10 rounded-full flex justify-center items-center border border-white font-bold">
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
                            <span className="w-10 h-10 rounded-full flex justify-center items-center border border-white font-bold">
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
            <div className="w-3/4 h-full bg-sky-400">

            </div>
        </div>
    </div>
  );
}

export default App;
