/**==============================================
 **              Country Component
 *?  Displays a single country's name and flag with prop validation.
 *@param country object
 *@return JSX component showing the country's name and flag
 *=============================================**/

import "./Country.css"
import PropTypes from "prop-types"

const Country = ({ country }) => {
    // SECTION: Destructuring the country's name and flags from the passed-in country object
    const { name, flags } = country

    // SECTION: Rendering the component's UI
    return (
        <div className='country'>
            <p className='country-name'>
                Country: {name?.common}{" "}
                {/* NOTE: Displaying the country's common name */}
            </p>
            <img className='w-40 h-30' src={flags.png} alt='img pay nai' />{" "}
            {/* FIXME: Displaying the country's flag with fallback alt text */}
        </div>
    )
}

// SECTION: Prop validation for the country object and its nested properties
Country.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.shape({
            common: PropTypes.string.isRequired // ANCHOR: Validating country.name.common as a required string
        }).isRequired,
        flags: PropTypes.shape({
            png: PropTypes.string.isRequired // ANCHOR: Validating country.flags.png as a required string
        }).isRequired
    }).isRequired // REVIEW: Validating country object as required
}

export default Country
