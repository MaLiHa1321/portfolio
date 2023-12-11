import { FaArrowCircleDown, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import img from '../../assets/profile.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';





const Banner = () => {
  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])


  const handleDownload = () => {
    const pdfFileName = "resume";
    const pdfFilePath =  '/public/assignment.2.pdf';
  
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = pdfFileName;
    document.body.appendChild(link);
  
    link.click();
  
    // Remove the link from the DOM after a short delay
    setTimeout(() => {
      document.body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    }, 1000);

    console.log('pdfFileName:', pdfFileName);
console.log('pdfFilePath:', pdfFilePath);
  };



    return (
        <div name="home">
            <div className="hero min-h-screen bg-gradient-to-r from-indigo-500">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <img className="mask mask-hexagon-2 w-[350px] h-[500px] object-cover" data-aos="fade-down" src={img}  />
    <div data-aos="fade-up">
    <h1 className='font-bold text-2xl  md:text-4xl text-blue-900'>
              I'm Maliha Sultana,
              
            </h1>
            <h4 className='text-2xl text-green-800'>Front-End Developer</h4>
      <p className="py-6 text-xl">As a front-end developer. I am passionate about <br /> creating meaningful software solutions. <br /> I am always eager to learn and grow exploring new technology.</p>
      <div className='flex gap-2 mb-8'>
         <div className='w-10 bg-gray-300 p-4 rounded-full text-black hover:bg-blue-600 hover:text-white'>
           <li className='list-none'><a href="https://www.linkedin.com/in/maliha-sultana-2175a7263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><FaLinkedinIn></FaLinkedinIn></a></li>
         </div>
         <div className='w-10 bg-gray-300 p-4 rounded-full text-black hover:bg-blue-600 hover:text-white'>
           <li className='list-none'><a href=""><FaFacebook></FaFacebook></a></li>
         </div>
         <div className='w-10 bg-gray-300 p-4 rounded-full text-black hover:bg-blue-600 hover:text-white'>
           <li className='list-none'><a href="https://github.com/MaLiHa1321" target='blank'><FaGithub></FaGithub></a></li>
         </div>
      </div>
      <div>
      
      <div className='btn'>
      <button onClick={handleDownload}>
        Download PDF
      </button>

      {/* <a href="../../assets/assignment.2.pdf" download>Resume<span className="hover:rotate-90 duration-300"><FaArrowCircleDown></FaArrowCircleDown></span> 
            </a> */}
      </div>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;