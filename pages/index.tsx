import type { NextPage } from 'next';
import Nevigator from './components/Navigator';
import Main from './components/Main';
import Detail from './components/Detail';
import Footer from './components/Footer';
import Place from './components/Place';

/* This example requires Tailwind CSS v2.0+ */

const Home: NextPage = () => {
  return (
    <div>
      <Nevigator />
      <Main />
      <Detail />
      <Place />
      <Footer />
    </div>
  );
};

export default Home;
