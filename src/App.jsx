import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Homecard from "./components/Homecard";
import JobListing from "./components/JobListing";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () =>{
  return (
    <>
    <Navbar/>
    <Hero title = "Become a React Dev" subtitle = "Find a react job that fits your skill set"/> 
    <Homecard />
    <JobListing/>
    <ViewAllJobs/>
    
    </>
  );
};
export default App
