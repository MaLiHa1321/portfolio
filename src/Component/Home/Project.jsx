
import img10 from '../../assets/event.png'
import img11 from '../../assets/library.png'
import img12 from '../../assets/invent.png'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Project = () => {

    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])
    return (
        <div name="project" className="w-10/12 mx-auto mt-12">
        

                <div data-aos="fade-down">
                    <h2 className="text-2xl md:text-4xl text-blue-600 font-bold mb-2">Project</h2>
                    <p className='text-base mb-12'>Check out some of my recent work right here....</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                <div className="card w-78 bg-base-100 shadow-2xl hover:bg-gradient-to-r from-indigo-500" data-aos="flip-left">
  <figure><img src={img10} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Event management system
  
    </h2>
    <p>This system is designed to streamline and enhance the process of organizing and managing events, making event planning a seamless experience.</p>
    <div className="card-actions justify-end">
     <a href="https://event-planner-3931c.web.app" target='blank'><div className="badge badge-outline badge-secondary">Demo</div></a>
      <a href="https://github.com/MaLiHa1321/event-planner.git" target='blank'><div className="badge badge-outline badge-warning">Code</div></a>
    </div>
  </div>
</div>
               
                <div className="card w-78 bg-base-100 shadow-2xl  hover:bg-gradient-to-r from-indigo-500" data-aos="flip-right">
  <figure><img src={img11} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Library management system
  
    </h2>
    <p>This system is designed to streamline and enhance the user experience in managing and exploring the library's book collection.</p>
    <div className="card-actions justify-end">
     <a href="https://library-management-7f05c.web.app" target='blank'><div className="badge badge-outline badge-secondary">Demo</div> </a>
      <a href="https://github.com/MaLiHa1321/Library-management-system.git" target='blank'><div className="badge badge-outline badge-warning">Code</div></a>
    </div>
  </div>
</div>
                <div className="card w-78 bg-base-100 shadow-2xl hover:bg-gradient-to-r from-indigo-500" data-aos="flip-left">
  <figure><img src={img12} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
    Inventory management system
  
    </h2>
    <p>This system is designed to streamline and enhance the process of facilitates a seamless process for users to create shops, manage products, analyze sales, and provides administrative functionalities for both shop managers and the system administrator..</p>
    <div className="card-actions justify-end">
     <a href="https://inventory-management-pro-5216c.web.app" target='blank'><div className="badge badge-outline badge-secondary">Demo</div> </a>
     <a href="https://github.com/MaLiHa1321/inventory-management-system.git" target='blank'></a> <div className="badge badge-outline badge-warning">Code</div>
    </div>
  </div>
</div>
                  

            
           </div>
        
            
        </div>
      
    );
};

export default Project;