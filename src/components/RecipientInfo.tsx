import React, { useEffect, useRef } from 'react';

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="9" y="9" width="11" height="11" rx="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#9699a2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

interface RecipientInfoProps {
  merchantName: string;
  merchantPhone: string;
  merchantAddress: string;
  merchantMessage: string;
  setMerchantName: (value: string) => void;
  setMerchantPhone: (value: string) => void;
  setMerchantAddress: (value: string) => void;
  setMerchantMessage: (value: string) => void;
}

const inputClass = 'bg-transparent border-0 outline-none p-0 text-inherit placeholder:text-[#b7bac2]';

const RecipientInfo: React.FC<RecipientInfoProps> = ({
  merchantName,
  merchantPhone,
  merchantAddress,
  merchantMessage,
  setMerchantName,
  setMerchantPhone,
  setMerchantAddress,
  setMerchantMessage,
}) => {
  const addressRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = addressRef.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }, [merchantAddress]);

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (!text) {
        alert('剪贴板为空');
        return;
      }

      let remainingText = text;
      let parsedName = '';
      let parsedPhone = '';
      let parsedAddress = '';

      const phoneMatch = remainingText.match(/1[3-9]\d{9}/);
      if (phoneMatch) {
        parsedPhone = phoneMatch[0];
        remainingText = remainingText.replace(parsedPhone, '').trim();
      }

      const cleanedText = remainingText
        .replace(/商家|收货人|姓名|寄件人|手机号|手机号码|电话|收件地址|寄件地址|地址/g, '')
        .replace(/[:：,，]/g, ' ')
        .trim();

      const parts = cleanedText.split(/\s+/).filter(Boolean);
      if (parts.length > 0) {
        const nameIndex = parts.findIndex(
          (part) => part.length >= 2 && part.length <= 4 && !/[省市区县路道街号村镇仓库]/.test(part)
        );

        if (nameIndex !== -1) {
          parsedName = parts.splice(nameIndex, 1)[0];
          parsedAddress = parts.join('');
        } else if (parts.length > 1) {
          parsedName = parts[0];
          parsedAddress = parts.slice(1).join('');
        } else if (/[省市区县路道街号村镇仓库]/.test(parts[0]) || parts[0].length > 4) {
          parsedAddress = parts[0];
        } else {
          parsedName = parts[0];
        }
      }

      if (parsedName) setMerchantName(parsedName);
      if (parsedPhone) setMerchantPhone(parsedPhone);
      if (parsedAddress) setMerchantAddress(parsedAddress);

      if (!parsedName && !parsedPhone && !parsedAddress) {
        alert('无法识别剪贴板中的地址信息');
      }
    } catch {
      alert('读取剪贴板失败，请检查浏览器剪贴板权限。');
    }
  };

  return (
    <section className="bg-white rounded-[18px] px-4 pt-5 pb-6 mb-3">
      <div className="grid grid-cols-[88px_1fr] gap-y-7 text-[16px]">
        <div className="text-[#151821]">商家地址</div>
        <div className="text-right leading-6 text-[#151821]">
          <div className="flex justify-end items-center gap-3">
            <input
              value={merchantName}
              onChange={(event) => setMerchantName(event.target.value)}
              aria-label="商家姓名"
              className={`${inputClass} w-14 text-right`}
            />
            <input
              value={merchantPhone}
              onChange={(event) => setMerchantPhone(event.target.value)}
              aria-label="商家电话"
              className={`${inputClass} w-[118px] text-right font-semibold`}
            />
          </div>
          <div className="mt-1 flex items-start justify-end gap-2 font-medium">
            <textarea
              ref={addressRef}
              value={merchantAddress}
              onChange={(event) => setMerchantAddress(event.target.value)}
              aria-label="商家地址"
              rows={1}
              className={`${inputClass} w-full min-h-12 resize-none overflow-hidden text-right leading-6`}
            />
            <button onClick={handlePaste} className="inline-flex items-center gap-1 pt-1 text-[#2d86a9] flex-shrink-0" aria-label="从剪贴板粘贴地址">
              <CopyIcon />
              <span>复制</span>
            </button>
          </div>
        </div>

        <div className="text-[#151821]">商家留言</div>
        <div className="min-w-0 flex items-center justify-between gap-2 text-[#9699a2]">
          <input
            value={merchantMessage}
            onChange={(event) => setMerchantMessage(event.target.value)}
            aria-label="商家留言"
            className={`${inputClass} min-w-0 flex-1 truncate`}
          />
          <ChevronDownIcon />
        </div>
      </div>

      <div className="h-px bg-[#ececf0] my-6" />

      <div className="space-y-7">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[21px] leading-7 text-[#151821]">上门取件|驿站</h2>
            <p className="mt-1 text-[16px] text-[#8f929a]">2小时上门·免填地址·极速退款</p>
          </div>
          <button className="h-12 px-8 rounded-full bg-gradient-to-r from-[#ff8a1f] via-[#ff2f6f] to-[#f50068] text-white text-[20px] font-medium">
            我要寄件
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-[21px] leading-7 text-[#151821]">我已自行寄回商品</h2>
            <p className="mt-1 text-[16px] text-[#8f929a]">运费需您自付/垫付</p>
          </div>
          <button className="h-12 px-8 rounded-full border border-[#d5d6dc] text-[#151821] text-[18px] bg-white">
            填写单号
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecipientInfo;
