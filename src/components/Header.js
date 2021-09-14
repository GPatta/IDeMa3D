import PropTypes from 'prop-types'
import idemaLogo from './logo.png'
import {HiMenu} from 'react-icons/hi'
import {IoClose} from 'react-icons/io5'
import {Link} from "react-router-dom";

const Header = ({ title }) => {

    /*
    var scrollValue;

    window.addEventListener("scroll", () => {
        scrollValue = window.pageYOffset;

        if (scrollValue > 50)
        {
            if (document.getElementById("myHeader").classList.contains('notScrolled'))
            {
                document.getElementById("myHeader").classList.remove('notScrolled');
                document.getElementById("myHeader").classList.add('scrolled');
            }
        }
        else if (scrollValue < 100)
        {
            if (document.getElementById("myHeader").classList.contains('scrolled'))
            {
                document.getElementById("myHeader").classList.remove('scrolled');
                document.getElementById("myHeader").classList.add('notScrolled');
            }
        }
    });*/
    
    const sideMenu = () => {
        if (document.getElementById('myHeader').classList.contains('headerClosed'))
        {
            document.getElementById('myHeader').classList.remove('headerClosed');
            document.getElementById('myHeader').classList.add('headerOpened');
        }
        else
        {
            document.getElementById('myHeader').classList.remove('headerOpened');
            document.getElementById('myHeader').classList.add('headerClosed');
        }
    }

    return (
        <header id='myHeader' className='header headerClosed notScrolled'>
            <div className='title'>
                <img src={idemaLogo} alt="IDeMa 3D logo" />
                <h1><b>I</b><b>D</b>e<b>M</b>a 3<b>D</b></h1>
            </div>
            <HiMenu className='menuIcon' onClick={sideMenu} />
            <IoClose className='closeIcon' onClick={sideMenu} />
            <ul>
                <Link className="link" to="/">home</Link>
                <Link className="link" to="/designs">designs</Link>
                <Link className="link" to="/store">store</Link>
                <Link className="link" to="/about">about</Link>
            </ul>
        </header>
    )
}

Header.defaultProps = {
    title: "Hello world",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header