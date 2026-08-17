
import React, { useState } from 'react';
import Header from './components/Header';
import StatusTracker from './components/StatusTracker';
import RecipientInfo from './components/RecipientInfo';
import MyServices from './components/MyServices';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [merchantName, setMerchantName] = useState('');
  const [merchantPhone, setMerchantPhone] = useState('');
  const [merchantAddress, setMerchantAddress] = useState('');
  const [merchantMessage, setMerchantMessage] = useState('');

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
