import React from 'react';

const BackIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-[#11131a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const MoreIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#11131a]" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="5" cy="12" r="1.75" />
    <circle cx="12" cy="12" r="1.75" />
    <circle cx="19" cy="12" r="1.75" />
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="bg-white z-20">
      <div className="h-10 px-3 pt-2 flex items-center justify-between text-[13px] font-semibold text-[#30333a]">
        <span>09:50</span>
        <div className="flex items-center gap-1 text-[11px]">
          <span>WiFi</span>
          <span>5G</span>
          <span className="rounded-md bg-[#5a5c63] text-white px-1.5 py-0.5">52</span>
        </div>
      </div>
      <div className="h-16 flex justify-between items-center px-4">
        <button className="p-1 -ml-1" aria-label="返回">
          <BackIcon />
        </button>
        <div className="flex-1 text-center text-[16px] whitespace-nowrap">
          <span className="text-[#b9bbc2]">商家审核</span>
          <span className="mx-1 text-[#d6d6dc]">-</span>
          <span className="text-[#151821] font-medium">寄回商品</span>
          <span className="mx-1 text-[#d6d6dc]">-</span>
          <span className="text-[#b9bbc2]">商家退款</span>
          <span className="mx-1 text-[#d6d6dc]">-</span>
          <span className="text-[#b9bbc2]">退款完成</span>
        </div>
        <div className="relative w-12 flex justify-end">
          <button className="p-1" aria-label="更多">
            <MoreIcon />
          </button>
          <span className="absolute -right-2 -top-4 min-w-7 h-7 rounded-full bg-[#f23373] text-white text-[15px] font-bold flex items-center justify-center">59</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
