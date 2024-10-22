/**==============================================
 **              Countries Component
 *?  Fetches and displays a list of countries from an external API.
 *@param none
 *@return JSX component displaying countries
 *=============================================**/

import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"

const Countries = () => {
    // TODO: Initialize state to store countries' data
    const [countries, setCountries] = useState([])

    // SECTION: Fetching countries data from the API once when the component mounts
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json()) // REVIEW: Parsing the response to JSON format
            .then((data) => setCountries(data)) // NOTE: Storing fetched data in the state
    }, []) // FIXME: Empty dependency array ensures the effect runs only once

    // SECTION: Rendering the component's UI
    return (
        <div className='text-left w-3/5 m-auto p-6'>
            <h3 className='text-2xl'>
                Number of Total Countries: {countries.length}{" "}
                {/* STUB: Display the total number of countries */}
            </h3>
            {countries.map((country) => (
                <Country key={country.cca3} country={country}></Country> // ANCHOR: Iterating over each country and rendering Country component
            ))}
        </div>
    )
}

export default Countries
