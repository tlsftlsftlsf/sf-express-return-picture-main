
import React from 'react';

const StatusTracker: React.FC = () => {
  return (
    <section className="bg-white rounded-b-[18px] pt-14 pb-6 -mx-3 mb-3 text-center">
      <h1 className="text-[38px] leading-none font-medium tracking-normal text-[#151821]">请寄回商品</h1>
      <p className="mt-5 text-[16px] text-[#151821]">
        商家已同意退货，请您在
        <span className="text-[#f23570] font-medium"> 6天23小时59分 </span>
        内寄回商品
      </p>
    </section>
  );
};

export default StatusTracker;
