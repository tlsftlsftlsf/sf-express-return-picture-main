import React from 'react';

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#151821]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8f929a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12a8 8 0 0 1-8 8H8l-5 3 1.6-4.2A8 8 0 1 1 21 12Z" />
    <circle cx="9" cy="12" r="1" fill="currentColor" />
    <circle cx="14" cy="12" r="1" fill="currentColor" />
  </svg>
);

const ProductThumb = () => (
  <div className="h-[58px] w-[58px] overflow-hidden rounded-md bg-[#d6d0ca] flex-shrink-0">
    <div className="h-full w-full bg-gradient-to-br from-[#f2f0ec] via-[#bfc2bf] to-[#3f3f42] relative">
      <div className="absolute left-5 top-1 h-16 w-7 rounded-t-full bg-[#c8bbb2]" />
      <div className="absolute left-3 top-5 h-8 w-10 rounded-t-[22px] bg-[#b9b8b4]" />
      <div className="absolute left-2 top-12 h-3 w-14 bg-[#2b2c30]" />
    </div>
  </div>
);

const MyServices: React.FC = () => {
  return (
    <>
      <section className="bg-white rounded-[18px] px-4 py-5 mb-3">
        <h2 className="text-[22px] text-[#151821]">服务保障</h2>
        <div className="mt-7 flex items-center gap-2 text-[16px]">
          <ShieldIcon />
          <span className="text-[#151821]">7天无理由退货</span>
          <span className="text-[#8f929a]">您已享受服务</span>
        </div>
      </section>

      <section className="bg-white rounded-[18px] px-4 py-5 mb-3 flex items-center justify-between">
        <h2 className="text-[22px] text-[#151821]">协商记录</h2>
        <ChevronRightIcon />
      </section>

      <section className="bg-white rounded-t-[18px] px-4 pt-5 pb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-[22px] text-[#151821]">退货信息</h2>
          <button className="flex items-center gap-1 text-[16px] text-[#151821]">
            <ChatIcon />
            联系商家
          </button>
        </div>
        <div className="mt-6 flex gap-3">
          <ProductThumb />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[16px] leading-6 text-[#151821]">95棉圆领正肩短袖t恤女2026夏季新款胖mm大码内...</p>
            <p className="mt-1 text-[16px] text-[#8f929a]">浅灰/L(100-120斤)</p>
          </div>
        </div>
        <div className="mt-8 space-y-5 text-[16px]">
          <div className="flex justify-between">
            <span className="text-[#8f929a]">退货件数</span>
            <span className="text-[#555861]">1件</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#8f929a]">退款金额</span>
            <span className="text-[#555861]">¥20.00</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyServices;
