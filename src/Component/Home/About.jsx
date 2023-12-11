import img11 from '../../assets/profile1.jpeg';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const About = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
      },[])
    
    return (
        <div name="about" className="flex flex-col md:flex-row justify-center items-center w-10/12 mx-auto mt-12 ">
            <div className="flex-1" data-aos="fade-up">
            <img className="mask mask-circle w-[400px] h-[500px] object-cover" src={img11} />
             
            </div>
            <div className="flex-1" data-aos="fade-down">
               
            <h2 className="underline text-2xl md:text-3xl border-l-4 border-indigo-500 font-bold mb-3">  About Me</h2>
                <p className="text-lg">Hello! This is Maliha Sultana, a passionate front-end developer with a knack for turning ideas into interactive, visually appealing web experiences. With a strong foundation in HTML, CSS, and JavaScript, I specialize in crafting seamless, responsive, and user-friendly websites. <br /> <br />
                I believe in the power of a well-designed user interface to enhance the overall user experience. My journey into front-end development began with a fascination for the intersection of creativity and technology. I love the challenge of transforming a static design into a dynamic, engaging website that not only meets but exceeds user expectations.
                </p>

            </div>
            
        </div>
    );
};

export default About;