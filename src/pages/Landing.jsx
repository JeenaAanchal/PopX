import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="h-full flex flex-col justify-end px-6 pb-8 ">
            <h1 className="text-[34px] leading-[28px] font-semibold tracking-[-0.02em] text-[#1C1C1E] font-rubik mb-6">Welcome to PopX</h1>

            <div className="text-gray-500 text-lg mb-6">
                <p >
                    Lorem ipsum dolor sit amet,
                </p>
                <p>consectetur adipiscing elit.</p>
            </div>


            <button
                onClick={() => navigate("/create-account")}
                className="w-full bg-[#6C2BD9] text-white py-3 rounded-lg mb-3 text-[18px] font-semibold">
                Create Account
            </button>

            <button
                onClick={() => navigate("/login")}
                className="w-full bg-[#c4b3e7] text-black py-3 rounded-lg text-[18px] font-semibold">
                Already Registered? Login
            </button>
        </div>
    );
};

export default Landing;
