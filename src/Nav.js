import './Nav.css';
import { Outlet, Link } from "react-router-dom";
import { useEffect } from 'react';

const Nav = () => {
        useEffect(() => {
            const allWithClass = Array.from(
                document.getElementsByClassName('list')
              );
              
              const active = (event) => {
                  allWithClass.forEach((item) =>
                  item.classList.remove('active'));
                  event.currentTarget.classList.toggle('active');
              }
              allWithClass.forEach((item) => 
                  item.addEventListener('click', active));
              console.log(allWithClass);
        });
        

    return (
        <nav className="fill" >
        <img className="logo" alt='Logo' src={require('./logoCrustea.png')} />
        <ul>
            <li className="list active"><Link to="/Home">Home</Link></li>
            <li className="list "><Link to="/EBII">EBII</Link></li>
            <li className="list "><Link to="/Energy">Smart Energy</Link></li>
            <li className="list "><Link to="/Biomassa">Biomassa</Link></li>
            <li className="list "><Link to="/testimonial">Alarm</Link></li>
        </ul>
        <Outlet/>
    </nav>
    );
}

export default Nav;