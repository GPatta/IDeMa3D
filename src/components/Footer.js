import PropTypes from 'prop-types'

const Footer = ({ year, copyright }) => {

    return (
        <footer className='footer'>
            <ul>

            </ul>
            <p>Copyright {year} @{copyright} - Tutti i diritti riservati</p>
        </footer>
    )
}

Footer.propTypes = {
    year: PropTypes.number.isRequired,
    copyright: PropTypes.string.isRequired,
}

export default Footer