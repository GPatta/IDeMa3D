import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';

const DesignCard = ({ name, image, link, onClk }) => {

    return (
        <Link className='designCard' to={link} onClick={onClk} >
            <img src={image} alt="Object cover"></img>
            <h3 key={name}>{name}</h3>
        </Link>
    )
}

DesignCard.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    onClk: PropTypes.func
}

export default DesignCard