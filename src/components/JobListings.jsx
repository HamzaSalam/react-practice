import { useState,useEffect } from "react"
import Joblisting from "./Joblisting"
import Spinner from "./Spinner"

const JobListings = ({isHome = false}) => {

  const [jobs, setjobs] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    const fetchJobs = async () =>{
      const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
      try{
      const res = await fetch(apiUrl);
      const data = await res.json();
      setjobs(data)
    }
    catch(error){
      console.log(error)
    }
    finally{
      setLoading(false);
    }
    }
    fetchJobs();
  },[])
  // const JobListings = ({isHome = false}) => {

  // const joblistings = isHome ? jobs.slice(0,3) : jobs

  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {isHome ? 'Recent Jobs' : 'Browse jobs'}
      </h2>
    
      {loading ? (
        <Spinner loading={loading}/>
        ): (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs.map((job , index)=>(
            <Joblisting key={index} jobss={job}/>
            
        ))}

      </div>
      )}
   
    </div>
  </section>
  )
}

export default JobListings


 