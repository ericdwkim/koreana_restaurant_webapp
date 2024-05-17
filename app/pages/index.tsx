// pages/index.tsx
import { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
