import Navbar from './components/Navbar';
import './App.css';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <>

    <Navbar/>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl justify-between mx-auto'>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    <CourseCard/>
    </div>
    
    
    </>
  );
}

export default App;
