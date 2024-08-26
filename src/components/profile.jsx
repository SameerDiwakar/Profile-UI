import React from "react";

const Profile = () => {
    return (
        <div className="bg-gray-100">
            <div className="w-full bg-blue-800 min-h-14 flex items-center justify-between">
                <div className="logo-section flex gap-3 items-center p-3">
                    <i class="fa-solid fa-dumbbell text-2xl text-white"></i>
                    <div className="name text-white font-bold text-2xl">VPeakFit</div>
                </div>
        
                <div className="logo-section flex gap-3 items-center p-4">
                    <i class="fa-solid fa-user text-xl text-white"></i>
                    <div className="name text-white font-semibold text-xl">User Name</div>
                </div>
        
            </div>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                    <div className="col-span-4 sm:col-span-3">
                        <div className="bg-white shadow rounded-lg p-6">
                            <div className="flex flex-col items-center">
                                <div className="mt-2 mb-8 flex flex-wrap gap-4 justify-center">
                                    <a href="#" className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">Home</a>
                                    <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Contact Us</a>
                                </div>
                                <img src="https://randomuser.me/api/portraits/men/94.jpg" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">

                                </img>
                                <h1 className="text-xl font-bold">User Name</h1>
                            </div>
                            <hr className="my-6 border-t border-gray-300" />
                            <div className="flex flex-col">
                                <span className="text-gray-700 uppercase font-bold tracking-wider mt-4 mb-2 text-lg">Hightlights</span>
                                <ul>
                                    <li className="mb-2 font-semibold">Contact: 9887654321</li>
                                    <li className="mb-2 font-semibold">Email: sample@gmail.com</li>
                                    <li className="mb-2 font-semibold">Points: 7889</li>
                                    <li className="mb-2 font-semibold">Streak: </li>
                                    <li className="mb-2 font-semibold">Calories Burned: </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4 sm:col-span-9">
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4">Workout Consistency</h2>
                            <div className="flex justify-center items-center gap-6 my-6">
                            </div>
                            <h2 className="text-xl font-bold mb-4">Recommended Exercise </h2>
                            <div className="flex justify-center items-center gap-6 my-6">
                            </div>
                            <h2 className="text-xl font-bold mb-4">Achievements</h2>
                            <div className="flex justify-center items-center gap-6 my-6">
                            </div>

                            <h2 className="text-xl font-bold mt-6 mb-4">Google Fit Data</h2>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Sample Data</span>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Sample Data</span>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div>
                            <div className="mb-6">
                                <div className="flex justify-between flex-wrap gap-2 w-full">
                                    <span className="text-gray-700 font-bold">Sample Data</span>
                                </div>
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae
                                    tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas
                                    suscipit.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
