import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#ececf0]">
      <div className="max-w-[430px] mx-auto h-[92px] px-5 pt-3 flex justify-end gap-3">
        <button className="h-12 px-7 rounded-full border border-[#c9cad0] bg-white text-[18px] text-[#151821]">取消退货</button>
        <button className="h-12 px-7 rounded-full border border-[#c9cad0] bg-white text-[18px] text-[#151821]">修改退货</button>
      </div>
    </footer>
  );
};

export default Footer;
