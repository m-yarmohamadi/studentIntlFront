import React, { useEffect, useState } from 'react';
import countries from '/data/countries.json'
import { parse } from 'dotenv';
const test03 = () => {
    const [country, setCountry] = useState()

    useEffect(() => {
        setCountry(JSON.parse(countries))



    }, []);
    return (
        <div>
            <select>
                {country.map((item) => {
                    <option value="">
                        {item}
                    </option>
                })}

            </select>
        </div>
    );
};

export default test03;