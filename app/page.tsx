// pages/index.tsx
import { NextPage } from 'next';
import Link from 'next/link';
import { HomeContent } from '@/components/HomeContent';

const Home: NextPage = () => {
  return (
    <div>

      <HomeContent/>
    </div>
  );
}

export default Home;
