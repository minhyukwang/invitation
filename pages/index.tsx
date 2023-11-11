import type {NextPage} from 'next';
import Nevigator from './components/navigator';
import Main from './components/main';
import Detail from './components/detail';
import Footer from './components/footer';
import Place from "./components/place";

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
