import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const PageCard = ({ name, image, link }) => {

    return (
        <Link className='pageCard' to={link}>
            <img src={image} alt="Page graphic"></img>
            <h3>{name}</h3>
        </Link>
    )
}

PageCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,

}

export default PageCard