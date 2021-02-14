import React, { useState, useEffect, useMemo } from 'react'
import axios from "axios";
import Pagination from './Pagination';

function Home() {

    const [country, setCountry] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage] = useState(20);

    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v1/all')
        .then(res => {
            if(res) {
            setCountry(res.data)
            console.log(res)
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, []) 

    const indexOfLastCountry = currentPage * countryPerPage;
    const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
    const currentCountry = country.slice(indexOfFirstCountry, indexOfLastCountry);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    const countryList = useMemo(
        () => currentCountry
        .map(cty => (
                <tr key={cty.alpha2Code}>
                    <td>{cty.name}</td>
                    <td>{cty.capital}</td>
                    <td>{cty.population}</td>
                    <td>{cty.area}</td>
                    <td>{cty.region}</td>
                </tr>
            )
        ), [currentCountry]
    )

    return (
        <div className="container">
            <h2>Country Data</h2> 
            <br/>
            <div className="paging">
              <Pagination countryPerPage={countryPerPage} totalCountry={country.length} paginate={paginate} />
           </div>
            <table className="table table-striped table-bordered" >
               <thead>
                   <tr>
                    <th>Country</th>
                    <th>Capital</th>
                    <th>Population</th> 
                    <th>Area</th>    
                    <th>Region</th>           
                   </tr>
               </thead>
               <tbody>
                   { countryList }
               </tbody>               
           </table>           
        </div>
    )
}

export default Home
