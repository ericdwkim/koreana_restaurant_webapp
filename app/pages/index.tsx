// pages/index.tsx
import { NextPage } from 'next';
import Link from 'next/link';
import { HomeContent } from '@/components/HomeContent';

const Home: NextPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>
      <HomeContent/>
    </div>
  );
}

export default Home;
