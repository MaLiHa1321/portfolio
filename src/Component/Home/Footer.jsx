import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-scroll";

const Footer = () => {
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
        <footer className="footer footer-center w-full p-10 bg-gradient-to-r from-cyan-300 to-blue-400 text-base-content rounded">
        <nav className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-6">
        {
                links.map(({id,link}) => (
                  <li key={id} className="uppercase list-none font-bold"><a>
                     <Link to={link} smooth duration={500} offset={-50}>{link}</Link>
                    </a></li>
                ))
              }
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
          <a href="https://www.linkedin.com/in/maliha-sultana-2175a7263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='blank'><FaLinkedinIn size={30}></FaLinkedinIn></a>
          <a href="https://github.com/MaLiHa1321" target='blank'><FaGithub size={30}></FaGithub></a>
          <a href="https://www.facebook.com/profile.php?id=100085430847888" target='blank'><FaFacebook size={30}></FaFacebook></a>
          </div>
        </nav> 
        <aside>
          <p className="text-base">Copyright © 2023 - All right reserved by Maliha Sultana</p>
        </aside>
      </footer>
    );
};

export default Footer;