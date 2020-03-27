import React from 'react';
import '../App.css';
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faGlobe, faUsers, faLanguage, faCoins, faGlobeAsia } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CountryCard ({id, country, filter, setDBInformation}) {
    const listLanguages = country.languages.map((language, index) => {
        return (
            <div className="CountryLanguage"
                key={index}
                data-filterby="language"
                data-filtervalue={language.name}
                onClick={filter}>
                    {language.name}
            </div>
        )
    })

    const listCurrencies = country.currencies.map((currency, index) => {
        return (
            <div className="CountryCurrency"
                key={index}
                data-filterby="currency"
                data-filtervalue={currency.code}
                onClick={filter}>
                    {currency.code}
            </div>
        )
    })

    const commafy = (number) => {
        const nfObject = new Intl.NumberFormat('en-US'); 
        const formattedNumber = nfObject.format(number); 

        return formattedNumber
    }

    return (
        <div id={id} className="CountryCard">
            <div className="CountryName">
                {country.name}
            </div>
            <div className="CountryNativeName">
                ({country.nativeName})
            </div>
            <div className="CountryCapitalConatiner">
                <FontAwesomeIcon icon={faStar}/>
                <div className="CountryCapital">
                    {country.capital}
                </div>
            </div>
            <img className="CountryFlag" src={country.flag} alt={country.flag}/>
            <div className="CountryRegionSubregion">
                <FontAwesomeIcon icon={faGlobe}/> 
                <div className="CountryRegion"
                    data-filterby="region"
                    data-filtervalue={country.region}
                    onClick={filter}>
                        {country.region} - 
                </div>
                <div className="CountrySubregion" 
                    data-filterby="subregion" 
                    data-filtervalue={country.subregion} 
                    onClick={filter}>
                        {country.subregion}
                </div>
            </div>
            <div className="CountryLanguagesList">
                <FontAwesomeIcon icon={faLanguage}/>
                {listLanguages}
            </div>
            <div className="CountryCurrenciesList">
                <FontAwesomeIcon icon={faCoins}/>
                {listCurrencies}
            </div>
            <div className="CountryPopulationConatiner">
            <FontAwesomeIcon icon={faUsers}/> 
                <div className="CountryPopulation">
                    {commafy(country.population)}
                </div>
            </div>
            <div className="CountryAreaConatiner">
            <FontAwesomeIcon icon={faGlobeAsia}/> 
                <div className="CountryArea">
                    {commafy(country.area)} km<sup>2</sup>
                </div>
            </div>
        </div>
    )
}

/*            <div className="CountryVisitInfo">
                {country.visited ? 
                    <div className="CountryVisitItem"
                        data-setattribute="visited"
                        data-countryname = {country.name}
                        onClick={setDBInformation}>
                        Visited
                    </div> : 
                    <div className="CountryVisitItem"
                        data-setattribute="visited"
                        data-countryname = {country.name}
                        onClick={setDBInformation}>
                        Not Visited
                    </div>}
                {country.wantToVisit ? 
                    <div className="CountryVisitItem"
                        data-setattribute="wantToVisit" 
                        data-countryname = {country.name} 
                        onClick={setDBInformation}>
                        Not on my list.
                    </div> : 
                    <div className="CountryVisitItem"
                        data-setattribute="wantToVisit"
                        data-countryname = {country.name}
                        onClick={setDBInformation}>
                        I want to go!
                    </div>}
            </div> */