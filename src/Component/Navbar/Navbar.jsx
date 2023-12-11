import { Link } from "react-scroll";
const Navbar = () => {
  const links = [
    {
      id: 1,
      link: 'home'
    },
    {
      id: 2,
      link: 'about'
    },
    {
      id: 3,
      link: 'skill'
    },
    {
      id: 4,
      link: 'project'
    },
    {
      id: 5,
      link: 'academic'
    },
    {
      id: 6,
      link: 'contact'
    }
  ]
    return (
        <div className="">

        <div className="navbar bg-gradient-to-r from-indigo-500 text-black">
        <div className="navbar-start">
          <div className="dropdown relative">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 absolute z-50 p-2 shadow bg-white rounded-box w-52">
              {
                links.map(({id,link}) => (
                  <li key={id} className="uppercase font-bold"><a>
                     <Link to={link} smooth duration={500} offset={-50}>{link}</Link>
                    </a></li>
                ))
              }
            
            </ul>
          </div>
          <a className="btn btn-ghost text-xl italic">Maliha</a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {
                links.map(({id,link}) => (
                  <li key={id} className="uppercase"><a>
                     <Link to={link} smooth duration={500} offset={-50}>{link}</Link>
                    </a></li>
                ))
              }
          </ul>
        </div>
      
      </div>
        </div>
    );
};

export default Navbar;