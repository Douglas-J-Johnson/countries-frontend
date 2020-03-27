import React from 'react'

export default function FilterEnumeration({displayText, filterby, filterOptions, filter}) {
    const selectedOption = () => {
        let selected = ""

        Object.keys(filterOptions).forEach(option => {
            if(filterOptions[option].filtered) {
                selected = option
            }
        })

        return selected
    }

    const selectedOptionValue = selectedOption()

    const addOptions = () => {
        const options = Object.keys(filterOptions)
        options.sort()

        return (
            options.map((option,index) => {
                return <option key={index} value={option}>{option}</option>
            })
        )  
    }

    return (
        <div className="Filter">
            <label className="FilterName">{displayText}</label>
            <select className="FilterSelect"
                value={selectedOptionValue}
                data-filterby={filterby}
                onChange={filter}>
                <option></option>
                {addOptions()}
            </select>
        </div>
    )
}
