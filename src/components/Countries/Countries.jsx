/**==============================================
 **              Countries Component
 *?  একটি বহিরাগত API থেকে দেশের তালিকা নিয়ে এসে প্রদর্শন করে।
 *@param নেই
 *@return JSX component যা দেশের তালিকা প্রদর্শন করে
 *=============================================**/

import { useEffect } from "react"
import { useState } from "react"
import Country from "../Country/Country"

/**
 *  এখানে সর্বপ্রথম `Countries` নামক component বানানো হয়েছে।
 *  এই component টি দেশের তালিকা নিয়ে আসা এবং তা প্রদর্শনের জন্য ব্যবহৃত হয়।
 **/
const Countries = () => {
    // TODO: দেশগুলোর তথ্য সংরক্ষণ করার জন্য state আরম্ভ করা হয়েছে।
    const [countries, setCountries] = useState([])
    /**
     *  এখানে `countries` এবং `setCountries` নামে দুটি variable তৈরি করা হয়েছে।
     *  `useState([])` একটি React Hook যা state আরম্ভ করতে ব্যবহৃত হয়।
     *  `useState` মূলত দুইটি জিনিস প্রদান করে:
     *
     *  ১. প্রথমটি হলো `countries`, যা বর্তমান state এর মান ধারণ করে।
     *  প্রাথমিকভাবে এটি একটি খালি array হিসাবে আরম্ভ হয়েছে কারণ আমরা প্রথমে কোনো দেশের তথ্য রাখছি না। পরবর্তীতে API থেকে দেশের তালিকা আনা হলে এটি update হবে এবং দেশের ডেটাগুলো ধারণ করবে।
     *
     *  ২. দ্বিতীয়টি হলো `setCountries`, এটি একটি function, যা state পরিবর্তনের জন্য ব্যবহৃত হয়।
     *  যখন আমরা API থেকে নতুন তথ্য পাই, তখন এই function এর মাধ্যমে `countries` state-টি update করা হয়। সংক্ষেপে, এই অংশটি মূলত দেশের তালিকা রাখার জন্য state আরম্ভ করে, এবং পরবর্তীতে সেই state পরিবর্তন করার জন্য একটি function প্রদান করে।
     **/

    // SECTION: API থেকে দেশের তথ্য সংগ্রহ করা হচ্ছে, একবার component টি render হলে।
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json()) // REVIEW: response কে JSON ফরম্যাটে রূপান্তর করা হচ্ছে।
            .then((data) => setCountries(data)) // NOTE: API থেকে আনা তথ্য state এ সংরক্ষণ করা হচ্ছে।
    }, []) // FIXME: খালি dependency array দেয়া হয়েছে যাতে effect টি একবারই চলে।

    // SECTION: UI render করা হচ্ছে।
    return (
        <div className='text-left w-3/5 m-auto p-6'>
            <h3 className='text-2xl'>
                No. Total Countries: {countries.length}{" "}
                {/* STUB: দেশের মোট সংখ্যা প্রদর্শন করা হচ্ছে */}
            </h3>

            {/* যখন countries array এর প্রতিটি উপাদানকে map() করা হবে, আমরা প্রতিটি উপাদানকে যেকোনো একটি নাম দিতে পারি। এখানে আমরা প্রতিটি উপাদানের নাম দিয়েছি `countryInCountries` */}
            {countries.map((countryInCountries) => (
                // এখন countryInCountries এর তথ্যগুলো "Country" component এ পাঠানো হবে।
                <Country
                    key={countryInCountries.cca3}
                    country={countryInCountries}></Country> // ANCHOR: প্রতিটি দেশকে iterate করে Country component এ প্রদর্শন করা হচ্ছে।
                /**
                 *  TODO: code explanation
                 *
                 *  ? code-1: key={countryInCountries.cca3}
                 *  এখানে `key` প্রপ ব্যবহার করা হয়েছে যা React-এর জন্য গুরুত্বপূর্ণ। এটি প্রতিটি উপাদানের একটি বিশেষ সনাক্তকারী হিসেবে কাজ করে, যা React কে জানায় যে কোন উপাদানগুলি পরিবর্তিত, যোগ করা বা মুছে ফেলা হয়েছে। এখানে `countryInCountries.cca3` ব্যবহার করা হয়েছে, যা দেশের একটি ইউনিক কোড।
                 *
                 *  ? code-2: country={countryInCountries}
                 *  এখানে `country` প্রপের মাধ্যমে `countryInCountries` অবজেক্টটি `Country` component এ পাঠানো হচ্ছে। এই অবজেক্টটি দেশটির নাম এবং পতাকার তথ্য ধারণ করে, যা `Country` component-এর ভিতরে ব্যবহৃত হবে।
                 *
                 *  ? code-3: <Country></Country>
                 *  এটি একটি JSX ট্যাগ যা Country component কে রেন্ডার করে। এর মধ্যে কোনো কনটেন্ট নেই, কারণ সব তথ্য country প্রপের মাধ্যমে প্রদান করা হচ্ছে।
                 **/
            ))}
        </div>
    )
}

export default Countries
