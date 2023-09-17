import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      <Navbar title="TextUtils" about="About" />
      <div className="container">
      <TextForm heading="Enter the text to Analyze below"/>
      </div>
    </>
  );
}
export default App;
