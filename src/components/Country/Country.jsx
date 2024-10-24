/**==============================================
 **              Country Component
 *?  একটি দেশের নাম, পতাকা, জনসংখ্যা, এলাকা এবং কোড প্রদর্শন করে।
 *?  প্রপ যাচাইকরণ এবং ভিজিটেড স্টেট হ্যান্ডলিংয়ের সাথে।
 *@param country অবজেক্ট
 *@return JSX component যা দেশের নাম, পতাকা, জনসংখ্যা, এলাকা এবং কোড প্রদর্শন করে
 *=============================================**/

import { useState } from "react"
import "./Country.css"
import PropTypes from "prop-types"

// এখানে `Country` একটি functional component হিসেবে সংজ্ঞায়িত করা হয়েছে, যা একটি `country` প্রপ গ্রহণ করে। এই country অবজেক্টটি দেশের তথ্য ধারণ করে।
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    // TODO: country অবজেক্ট [prop] থেকে name, flags, population, area, এবং cca3 প্রপার্টিগুলো বের করা হচ্ছে।
    const { name, flags, population, area, cca3 } = country

    // NOTE: একটি ভিজিটেড স্টেট তৈরি করা হয়েছে যা দেখাবে দেশটি ভিজিট করা হয়েছে কিনা।
    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(true) // 'visited' স্টেট true করা হচ্ছে
        // setVisited(!visited)  // বিকল্প হিসেবে স্টেট পরিবর্তন করা হতে পারে পূর্বের বিপরীতে
    }

    // console.log(handleVisitedCountries)

    /*
    const passWithParams = () => {
        handleVisitedCountries(country)
    }
    */

    // SECTION: component এর UI render করা হচ্ছে
    return (
        <div className={`country ${visited && "visited-bg"}`}>
            <p className='country-name'>
                {/* ইহা একটি JSX এক্সপ্রেশন যা দেশের সাধারণ নাম প্রদর্শন করার জন্য ব্যবহৃত হচ্ছে। */}
                Country: {name?.common}
                {/** Code explanation
                 * ? code: {name?.common}
                 *
                 *  এখানে {} ব্যবহার করা হয়েছে যাতে JavaScript এক্সপ্রেশনকে JSX এর ভিতরে অন্তর্ভুক্ত করা যায়।
                 *
                 *  `name?.common` এর মাধ্যমে name অবজেক্ট থেকে common প্রপার্টি বের করা হচ্ছে।
                 *  `?.` অপারেটরটি অপশনাল চেইনিং অপারেটর, যা নিশ্চিত করে যে যদি `name` অবজেক্টটি `undefined` বা `null` হয়, তবে এটি একটি ত্রুটি ছাড়াই `undefined` ফেরত দেবে। এর ফলে, যদি দেশের নাম উপলব্ধ না হয়, তবে UI তে কিছু দেখাবে না।
                 **/}
            </p>
            <img src={flags.png} alt='img pay nai' />
            {/* FIXME: দেশের পতাকা প্রদর্শন করা হচ্ছে, বিকল্প alt টেক্সট সহ */}

            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>

            {/* SECTION: ভিজিটেড স্টেট পরিবর্তন করার জন্য একটি বাটন */}
            <button
                onClick={handleVisited}
                className={`${
                    visited
                        ? " bg-blue-600 cursor-not-allowed"
                        : "bg-opacity-40"
                }`}>
                {/** Button Explanation:
                 * ? code: {visited ? "Visited" : "Not visited"}
                 *
                 *  বাটনটি `handleVisited` ফাংশনকে ট্রিগার করবে, যা `visited` স্টেটকে পরিবর্তন করবে।
                 *  যদি `visited` স্টেট true হয়, তবে বাটনে "Visited" দেখাবে, নইলে "Not visited"।
                 **/}
                {visited ? "Visited" : "Not visited"}
            </button>
            {/* {visited && "The country is visited"} */}
            {/* {visited ? "Visited" : "Not visited"} */}

            {/* TODO: mark visited btn */}
            {/* <button onClick={passWithParams}>Mark Visited</button> */}
            <button onClick={() => handleVisitedCountries(country)}>
                Mark Visited
            </button>
        </div>
    )
}

// SECTION: দেশ অবজেক্ট এবং এর নেস্টেড প্রপার্টিগুলোর জন্য প্রপ যাচাইকরণ
Country.propTypes = {
    country: PropTypes.shape({
        name: PropTypes.shape({
            common: PropTypes.string.isRequired // ANCHOR: country.name.common কে প্রয়োজনীয় string হিসেবে যাচাইকরণ করা হচ্ছে
        }).isRequired,
        flags: PropTypes.shape({
            png: PropTypes.string.isRequired // ANCHOR: country.flags.png কে প্রয়োজনীয় string হিসেবে যাচাইকরণ করা হচ্ছে
        }).isRequired,
        population: PropTypes.number.isRequired, // FIX: population কে সরাসরি number হিসেবে যাচাইকরণ করা হচ্ছে
        area: PropTypes.number.isRequired, // FIX: area কে সরাসরি number হিসেবে যাচাইকরণ করা হচ্ছে
        cca3: PropTypes.string.isRequired // NOTE: country's code (cca3) প্রয়োজনীয় হিসেবে যাচাইকরণ করা হয়েছে
    }).isRequired // REVIEW: country অবজেক্টকে প্রয়োজনীয় হিসেবে যাচাইকরণ করা হচ্ছে
}

export default Country
