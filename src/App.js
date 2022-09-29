import './App.css';
import Header from './components/Header/Header';
import Exercise from './components/Exercise/Exercise';
import Footer from './components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { Slide, ToastContainer } from 'react-toastify';

function App() {
  return (
    <div >
      <ToastContainer position='top-center' transition={Slide} />
      <Header></Header>
      <Exercise></Exercise>
      <Footer></Footer>
    </div>
  );
}

export default App;
