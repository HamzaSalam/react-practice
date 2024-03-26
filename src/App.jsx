import Hero from "./components/Hero"
import HomeCard from "./components/HomeCard"
import JobListings from "./components/JobListings"
import Navbar from "./components/Navbar"
import ViewAllJobs from "./components/ViewAllJobs"

function App() {
  // const namee = "hamza";
  // const x= 7;
  // const y = 9;
  // const furit = ['mango','apple','orange']

  // const loggedIn = false;

  return (
    // <div>
    //   <h1>Hello {namee}</h1>
    //   <p>Sum of {x} and {y} is {x+y}</p>
    //   <ul>{furit.map((furites,index)=>(
    //     <li key={index}>{furites}</li>
    //   ))}
    //   </ul>
    //   {loggedIn ? <h1>Hello member</h1>:<h1>hello guest</h1>}
    // </div>
    <>
      <Navbar/>
      <Hero title='Title here hello' subtitle='subtitle here' /> 
      <HomeCard/>
      <JobListings/> 
      <ViewAllJobs/>  

 

    </>
  )
}

export default App