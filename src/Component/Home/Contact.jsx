

const Contact = () => {
    return (
        <div name="contact" className="bg-red-100">

            <div className="w-10/12 mx-auto mt-12">
                <div className="flex flex-col md:flex-row justify-center items-center">
    
                <div className="flex-1">
                    <h2 className="text-2xl md:text-5xl font-bold text-emerald-500 text-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% mb-3">Lets Connect</h2>
                    <p>Please fill out the form on this section to contact with me.</p>
                </div>
              
                <div className="hero min-h-screen flex-1">
      <div className="hero-content flex-col">
        <div className="card w-full bg-red-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input type="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea className="textarea textarea-info" placeholder="Message"></textarea>
            </div>
    
         
    
            <div className="form-control mt-6">
              <button className="btn text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Let's Talk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
                </div>
                </div>
                
        </div>
   
    );
};

export default Contact;