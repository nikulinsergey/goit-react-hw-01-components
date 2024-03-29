import React from 'react';
import Profile from './componets/Profile/Profile';
import Stats from './componets/Stats/Stats';
import PricingPlan from './componets/PricingPlan/PricingPlan';
import pricingPlan from './assets/pricing-plan.json';
import TransactionHistory from './componets/TransactionHistory/TransactionHistory';
import transaction from './assets/transactions.json';

const user = {
  name: 'Jacques Gluke',
  tag: '@jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const stats = [
  { id: 'id-1', label: '.docx', percentage: 22 },
  { id: 'id-2', label: '.pdf', percentage: 4 },
  { id: 'id-3', label: '.mp3', percentage: 17 },
  { id: 'id-4', label: '.psd', percentage: 47 },
  { id: 'id-5', label: '.pdf', percentage: 10 },
];

function App() {
  return (
    <>
      <Profile {...user} />
      <Stats stats={stats} title="UPLOAD STATS" />
      <PricingPlan items={pricingPlan} />
      <TransactionHistory items={transaction} />
    </>
  );
}

export default App;
