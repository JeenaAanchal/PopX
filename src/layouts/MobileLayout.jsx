const MobileLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#F6F6F6] flex items-center justify-center">
      <div className="w-full sm:w-[390px] h-screen sm:h-[650px] shadow-xl sm:rounded-2xl overflow-hidden">
        {children}
      </div>
    </div>
  );
};

export default MobileLayout;
