
import React, { useState } from 'react';
import Header from './components/Header';
import StatusTracker from './components/StatusTracker';
import RecipientInfo from './components/RecipientInfo';
import MyServices from './components/MyServices';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [merchantName, setMerchantName] = useState('小润');
  const [merchantPhone, setMerchantPhone] = useState('18316652843');
  const [merchantAddress, setMerchantAddress] = useState('广东省揭阳市普宁市下架山镇中央浦村PPP云仓60号仓库');
  const [merchantMessage, setMerchantMessage] = useState('您好亲，拒收到付件哦。（亲，请原包装袋、吊牌一起寄回）');

  return (
    <div className="max-w-[430px] mx-auto bg-[#f7f7fb] font-sans text-[#151821] min-h-screen relative pb-24 overflow-hidden">
      <Header />
      <main className="px-3">
        <StatusTracker />
        <RecipientInfo
          merchantName={merchantName}
          merchantPhone={merchantPhone}
          merchantAddress={merchantAddress}
          merchantMessage={merchantMessage}
          setMerchantName={setMerchantName}
          setMerchantPhone={setMerchantPhone}
          setMerchantAddress={setMerchantAddress}
          setMerchantMessage={setMerchantMessage}
        />
        <MyServices />
      </main>
      <Footer />
    </div>
  );
};

export default App;
