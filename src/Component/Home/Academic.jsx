import { FaSchool, FaUniversity } from "react-icons/fa";


const Academic = () => {
    return (
        <div name="academic">
            <div className="w-10/12 mx-auto mt-12">
                <h2 className="text-2xl md:text-4xl text-blue-700 mb-3 font-bold"> Academic Info</h2>
                <p className="text-base mb-3 mt-4">Checkout my academic information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                  <div className="card w-78 border-2 border-gray-400 shadow-2xl">
  <div className="card-body">
    <h2 className="flex justify-center"><FaUniversity size={30}></FaUniversity></h2>
    <h2 className="card-title">Bechelor of Science</h2>
    <p><span className="font-bold text-base">Status:</span> Running</p>
    <p>Department of CSE</p>
    <p>Port City International Uniersity, Chittagong</p>
  </div>

                    </div>
                  <div className="card w-78 border-2 border-gray-400 shadow-2xl">
  <div className="card-body">
  <h2 className="flex justify-center"><FaSchool size={30}></FaSchool></h2>
    <h2 className="card-title">H.S.C</h2>
    <p><span className="text-base font-bold">Status:</span> Completed</p>
    <p> <span className="text-base font-bold">GPA:</span> 4.00</p>
    
    <p>Omar Gani M.E.S Collage, Chittagong</p>
  </div>

                    </div>
                    <div className="card w-78 border-2 border-gray-400 shadow-2xl">
  <div className="card-body">
  <h2 className="flex justify-center"><FaSchool size={30}></FaSchool></h2>
    <h2 className="card-title">S.S.C</h2>
    <p><span className="text-base font-bold">Status:</span> Completed</p>
    <p> <span className="text-base font-bold">GPA:</span> 4.64</p>
    <p>pahartali Girls High School & Collage, Chittagong</p>
  </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Academic;