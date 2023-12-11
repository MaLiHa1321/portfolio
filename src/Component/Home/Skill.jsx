import img1 from '../../assets/html.png'
import img2 from '../../assets/css.png'
import img3 from '../../assets/tailwind.png'
import img4 from '../../assets/bootstrap.jpeg'
import img5 from '../../assets/java.png'
import img6 from '../../assets/react.png'
import img7 from '../../assets/node.png'
import img8 from '../../assets/express.png'
import img9 from '../../assets/mongo.jpeg'

const Skill = () => {

    return (
        <div name="skill" className='w-10/12 mx-auto mt-12'>

        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='flex-1'>
                <h2 className="text-2xl font-bold text-blue-500 md:text-4xl mb-3">My Skill</h2>
                <p className='text-lg'>I have experience with these things.</p>
            </div>
            <div className='flex-1'>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8'>
                <div className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>

            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img1} />
                </div>
                <div  className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>
            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img2} />
            </div>
            <div  className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>
            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img3} />
            </div>
            <div  className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>
            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img4} />
            </div>
            <div  className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>
            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img5} />
            </div>
            <div  className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>
            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img6} />
            </div>
            <div  className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>
            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img7} />
            </div>
            <div  className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>
            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img8} />
            </div>
            <div  className='shadow-2xl p-4 hover:border-2 hover:border-blue-600'>
            <img className="mask mask-square w-[100px] h-[100px]  object-cover" src={img9} />
            </div>
    
               
            
                
             
                   
                </div>
            </div>


            </div>
            </div>
     
            
  
    );
};

export default Skill;