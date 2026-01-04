import CameraIcon from "../assets/camera.png";


const AccountSettings = () => {
    return (

        <div className="w-full">

            {/* Header */}
            <div className="bg-white px-6 pt-6 pb-4 
                shadow-[0_2px_4px_rgba(0,0,0,0.06)] 
                relative z-10">
                <h2 className="text-2xl font-medium text-gray-800">
                    Account Settings
                </h2>
            </div>



            {/* Content Section (NOT white) */}
            <div className="px-6 py-6 bg-gray-100">
                <div className="flex items-center gap-4">

                    {/* Avatar */}
                    <div className="relative">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="profile"
                            className="w-22 h-22 rounded-full object-cover"
                        />

                        {/* Camera Icon */}
                        <div className="absolute  bottom-0 right-0 w-10 h-10 bg-purple-600 rounded-full border-2 border-white flex items-center justify-center cursor-pointer">
                            <img
                                src={CameraIcon}
                                alt="camera"
                                className="w-5 h-5 absolute left-2"
                            />
                        </div>
                    </div>

                    {/* Name & Email */}
                    <div>
                        <p className="text-[20px] font-semibold text-gray-800">
                            Marry Doe
                        </p>
                        <p className="text-[16px] text-black">
                            Marry@gmail.com
                        </p>
                    </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-[15px] text-black leading-6">
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                    SedDiam Nonumy Eirmod Tempor Invidunt Ut Labore Et
                    Dolore Magna Aliquyam Erat, Sed Diam
                </p>
            </div>

            {/* Dashed Divider */}
            <div className="border-t border-dashed border-gray-300 "></div>

            <div className="h-32 bg-gray-100"></div>
        </div>

    );
};

export default AccountSettings;
