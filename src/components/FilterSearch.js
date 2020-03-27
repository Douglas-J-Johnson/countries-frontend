import React from 'react'
import FilterEnumeration from './FilterEnumeration'
import Sort from './Sort'

export default function FilterSearch({search, searchText, sortAlpha, sortNumeric, maps, filter, unfilter}) {
    return (
        <div className="FilterAndSearch">
            <div className="Sorts">
                <Sort displayText="Name" sortby="name" sort={sortAlpha}/>
                <Sort displayText="Population" sortby="population" sort={sortNumeric}/>
                <Sort displayText="Area" sortby="area" sort={sortNumeric}/>
            </div>
            <div className="Filters">
                <div className="Search">
                    <input className="SearchText"
                        type="text"
                        onChange={search} 
                        placeholder="Search Country Name"
                        value={searchText}>
                    </input>
                </div>
                <FilterEnumeration displayText="Region" filterby="region" filterOptions={maps["region"]} filter={filter}/>
                <FilterEnumeration displayText="Subregion" filterby="subregion" filterOptions={maps["subregion"]} filter={filter}/>
                <FilterEnumeration displayText="Time Zone" filterby="timezone" filterOptions={maps["timezone"]} filter={filter}/>
                <FilterEnumeration displayText="Language" filterby="language" filterOptions={maps["language"]} filter={filter}/>
                <FilterEnumeration displayText="Currency" filterby="currency" filterOptions={maps["currency"]} filter={filter}/>
            </div>
            <button className="Unfilter" onClick={unfilter}>Clear Filters</button>
        </div>
    )
}
