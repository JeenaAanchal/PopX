import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount = ({ formData, setFormData }) => {
  const navigate = useNavigate();

  const [localFormData, setLocalFormData] = useState(
    formData || {
      fullName: "",
      phone: "",
      email: "",
      password: "",
      company: "",
      option: "",
    }
  );

  const currentFormData = formData || localFormData;

  // Handle field change
  const handleChange = (e) => {
    if (setFormData) {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else {
      setLocalFormData({
        ...localFormData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Handle form submit
  const handleSubmit = () => {
    const requiredFields = ["fullName", "phone", "email", "password", "option"];

    const hasRequiredFields = requiredFields.every(
      (key) => currentFormData[key]?.trim() !== ""
    );

    const isEmailValid = currentFormData.email?.includes("@");
    const isPasswordValid = currentFormData.password?.length >= 6;
    const isPhoneValid = /^\d{10,15}$/.test(currentFormData.phone);

    if (!hasRequiredFields) {
      alert("Please fill all required fields!");
      return;
    }
    if (!isEmailValid) {
      alert("Email must include '@'");
      return;
    }
    if (!isPasswordValid) {
      alert("Password must be at least 6 characters");
      return;
    }
    if (!isPhoneValid) {
      alert("Phone number must be 10-15 digits");
      return;
    }



    navigate("/account-settings");
  };

  return (
    <div className="p-4 px-6">
      <h1 className="font-semibold text-3xl w-60 mt-4 mb-9">
        Create your PopX account
      </h1>

      {/* Full Name */}
      <div className="relative mt-5">
        <label
          htmlFor="fullName"
          className="absolute left-2 -translate-y-1/2 text-purple/20 text-md bg-[#F5F5F5] pl-1 pr-2 text-purple-600 "
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Enter full Name"
          value={currentFormData.fullName}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#CBCBCB] px-4 py-2.5 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
        />
      </div>

      {/* Phone */}
      <div className="relative mt-4">
        <label
          htmlFor="phone"
          className="absolute left-2 -translate-y-1/2 text-purple/20 text-md bg-[#F5F5F5] pl-1 pr-2 text-purple-600"
        >
          Phone Number <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="text"
          id="phone"
          name="phone"
          placeholder="Enter phone Number"
          value={currentFormData.phone}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#CBCBCB] px-4 py-2.5 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
        />
      </div>

      {/* Email */}
      <div className="relative mt-4">
        <label
          htmlFor="email"
          className="absolute left-2 -translate-y-1/2 text-purple/20 text-md bg-[#F5F5F5] pl-1 pr-2 text-purple-600 "
        >
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="text"
          id="email"
          name="email"
          placeholder="Enter email Address"
          value={currentFormData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#CBCBCB] px-4 py-2.5 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
        />
      </div>

      {/* Password */}
      <div className="relative mt-4">
        <label
          htmlFor="password"
          className="absolute left-2 -translate-y-1/2 text-purple/20 text-md bg-[#F5F5F5] pl-1 pr-2 text-purple-600 "
        >
          Password <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="password"
          id="password"
          name="password"
          placeholder="Enter Password"
          value={currentFormData.password}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#CBCBCB] px-4 py-2.5 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
        />
      </div>

      {/* Company */}
      <div className="relative mt-4">
        <label
          htmlFor="company"
          className="absolute left-2 -translate-y-1/2 text-purple/20 text-md bg-[#F5F5F5] pl-1 pr-2 text-purple-600 "
        >
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Enter Company Name"
          value={currentFormData.company}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#CBCBCB] px-4 py-2.5 outline-none focus:border-[#E70B897B] focus:ring-0 text-sm"
        />
      </div>

      {/* Radio */}
      <div className="mt-4">
        <p className="text-md">
          Are you an Agency? <span className="text-red-500">*</span>
        </p>
        <div className="flex gap-6">
          {["Yes", "No"].map((val) => {
            const isChecked = currentFormData.option === val;
            return (
              <label
                key={val}
                className="flex items-center gap-x-4 cursor-pointer text-md"
              >
                <input
                  type="radio"
                  name="option"
                  value={val}
                  checked={isChecked}
                  onChange={handleChange}
                  className={`w-3 h-3 ${isChecked ? "accent-[#7431FE]" : "accent-gray-400"
                    }`}
                />
                {val}
              </label>
            );
          })}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full mt-28 bg-[#7431FE] px-4 py-2 rounded-lg text-lg text-white cursor-pointer"
      >
        Create Account
      </button>
    </div>
  );
};

export default CreateAccount;
