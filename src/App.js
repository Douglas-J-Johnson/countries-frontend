import React from 'react';
import './Reset.css';
import './App.css';

import CountryCard from './components/CountryCard'
import FilterSearch from './components/FilterSearch'
import Map from './components/Map'
import { faDatabase, faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class App extends React.Component {
  state = {
    viewMode: "cards",
    selectedMap: "area",
    searchText: "",
    countries: [],
    maps: {
      region: {},
      subregion: {},
      currency: {},
      language: {},
      timezone: {}
    },
    currencyConversions: {}
  }

  getSingleValueEnumerationList(countries, key) {
    let values = []

    countries.forEach(country => {
      const keyValue = country[key]

      if (values.indexOf(keyValue) === -1 && keyValue !== "" && keyValue !== null) {
        values.push(keyValue)
      }
    })

    return values
  }

  getSingleValueEnumerationMap(countries, uniqueValues, key, referenceKey) {
    let valuesMap = {}
    let namesForValue = []

    uniqueValues.forEach(uniqueValue => valuesMap[uniqueValue] = { countries: [], filtered: false })

    countries.forEach(country => {
      const countryName = country[referenceKey]
      const keyValue = country[key]

      if (keyValue !== "" && keyValue !== null) {
        namesForValue = valuesMap[keyValue].countries
        namesForValue.push(countryName)
        valuesMap[keyValue].countries = namesForValue
      }
    })

    return valuesMap
  }

  getMultiValueEnumerationList(countries, key) {
    let values = []
    let keyValues = []

    countries.forEach(country => {
      keyValues = country[key]

      keyValues.forEach(keyValue => {
        if (values.indexOf(keyValue) === -1 && keyValue !== "" && keyValue !== null) {
          values.push(keyValue)
        }
      })
    })

    return values
  }

  getMultiValueEnumerationMap(countries, uniqueValues, key, referenceKey) {
    let valuesMap = {}
    let namesForValue = []

    uniqueValues.forEach(uniqueValue => valuesMap[uniqueValue] = { countries: [], filtered: false })

    countries.forEach(country => {
      const countryName = country[referenceKey]
      const keyValues = country[key]

      keyValues.forEach(keyValue => {
        if (keyValue !== "" && keyValue !== null) {
          namesForValue = valuesMap[keyValue].countries
          namesForValue.push(countryName)
          valuesMap[keyValue].countries = namesForValue
        }
      })
    })

    return valuesMap
  }

  getMultiValueEnumerationWithSubkeyList(countries, key, subKey) {
    let values = []
    let keyValues = []

    countries.forEach(country => {
      keyValues = country[key]

      keyValues.forEach(keyValue => {
        const subKeyValue = keyValue[subKey]
        if (values.indexOf(subKeyValue) === -1 && subKeyValue !== "" && subKeyValue !== null) {
          values.push(subKeyValue)
        }
      })
    })

    return values
  }

  getMultiValueEnumerationWithSubkeyMap(countries, uniqueValues, key, subKey, referenceKey) {
    let valuesMap = {}
    let namesForValue = []

    uniqueValues.forEach(uniqueValue => valuesMap[uniqueValue] = { countries: [], filtered: false })

    countries.forEach(country => {
      const countryName = country[referenceKey]
      const keyValues = country[key]

      keyValues.forEach(keyValue => {
        const subKeyValue = keyValue[subKey]
        if (subKeyValue !== "" && subKeyValue !== null) {
          namesForValue = valuesMap[subKeyValue].countries
          namesForValue.push(countryName)
          valuesMap[subKeyValue].countries = namesForValue
        }
      })
    })

    return valuesMap
  }

  getCurrencyConversions() {
    let currencyExchange = {}
    // https://api.exchangeratesapi.io/latest?base=USD
    // http://data.fixer.io/api/latest?access_key=dc3aba5ab73a7152f053a723a8eb8dc7

    currencyExchange = {
      "success": true, "timestamp": 1584558545, "base": "EUR", "date": "2020-03-18", "rates": {
        "AED": 3.987158, "AFN": 82.442467, "ALL": 122.524454, "AMD": 532.464043, "ANG": 1.942641, "AOA": 549.597015, "ARS": 68.656986,
        "AUD": 1.880884, "AWG": 1.953878, "AZN": 1.854509, "BAM": 1.933657, "BBD": 2.191252, "BDT": 92.065987, "BGN": 1.955706,
        "BHD": 0.409797, "BIF": 2058.08444, "BMD": 1.085488, "BND": 1.56172, "BOB": 7.472184, "BRL": 5.670369, "BSD": 1.08527,
        "BTC": 0.000204, "BTN": 80.562738, "BWP": 12.671371, "BYN": 2.673938, "BYR": 21275.556448, "BZD": 2.187654, "CAD": 1.578869,
        "CDF": 1851.841116, "CHF": 1.053862, "CLF": 0.034146, "CLP": 942.20328, "CNY": 7.649971, "COP": 4516.735505, "CRC": 614.582505,
        "CUC": 1.085488, "CUP": 28.765421, "CVE": 279.567632, "CZK": 27.695998, "DJF": 192.912668, "DKK": 7.472513, "DOP": 58.583863,
        "DZD": 132.297073, "EGP": 17.090566, "ERN": 16.28257, "ETB": 35.585338, "EUR": 1, "FJD": 2.474594, "FKP": 0.937479, "GBP": 0.938637,
        "GEL": 3.354385, "GGP": 0.937479, "GHS": 6.089714, "GIP": 0.937479, "GMD": 55.256642, "GNF": 10219.865452, "GTQ": 8.30142,
        "GYD": 226.332528, "HKD": 8.431905, "HNL": 27.039335, "HRK": 7.601347, "HTG": 102.894149, "HUF": 354.042262, "IDR": 16868.476898,
        "ILS": 4.086883, "IMP": 0.937479, "INR": 81.443866, "IQD": 1292.272957, "IRR": 45704.454148, "ISK": 151.990093, "JEP": 0.937479,
        "JMD": 146.856005, "JOD": 0.77026, "JPY": 117.443209, "KES": 113.146611, "KGS": 79.132687, "KHR": 4396.224586, "KMF": 493.299662,
        "KPW": 976.961638, "KRW": 1374.639955, "KWD": 0.336957, "KYD": 0.904441, "KZT": 481.4403, "LAK": 9682.548802, "LBP": 1658.942735,
        "LKR": 201.537397, "LRD": 214.926267, "LSL": 18.572565, "LTL": 3.205163, "LVL": 0.6566, "LYD": 1.530737, "MAD": 10.572876,
        "MDL": 19.366917, "MGA": 4016.304234, "MKD": 61.225396, "MMK": 1551.020523, "MNT": 3002.419037, "MOP": 8.680994, "MRO": 387.519397,
        "MUR": 42.65401, "MVR": 16.718922, "MWK": 800.543459, "MXN": 26.029411, "MYR": 4.747382, "MZN": 71.821255, "NAD": 18.594288,
        "NGN": 398.374053, "NIO": 37.124829, "NOK": 12.297348, "NPR": 128.900781, "NZD": 1.891006, "OMR": 0.418014, "PAB": 1.085369,
        "PEN": 3.901247, "PGK": 3.698798, "PHP": 56.000853, "PKR": 172.212656, "PLN": 4.525892, "PYG": 7142.264551, "QAR": 3.952262,
        "RON": 4.861683, "RSD": 117.48257, "RUB": 88.001669, "RWF": 1017.644601, "SAR": 4.074514, "SBD": 8.974803, "SCR": 14.872911,
        "SDG": 60.030656, "SEK": 11.200218, "SGD": 1.5698, "SHP": 0.937479, "SLL": 10542.795825, "SOS": 637.180956, "SRD": 8.095551,
        "STD": 23938.010269, "SVC": 9.497009, "SYP": 559.02482, "SZL": 18.594846, "THB": 35.430841, "TJS": 10.572841, "TMT": 3.799207,
        "TND": 3.165826, "TOP": 2.575104, "TRY": 7.025959, "TTD": 7.332845, "TWD": 33.012921, "TZS": 2501.622252, "UAH": 29.641596,
        "UGX": 4102.357682, "USD": 1.085488, "UYU": 48.257074, "UZS": 10325.692794, "VEF": 10.841308, "VND": 25232.701399, "VUV": 135.361395,
        "WST": 3.029636, "XAF": 648.538055, "XAG": 0.090525, "XAU": 0.000725, "XCD": 2.933584, "XDR": 0.793127, "XOF": 638.813477,
        "XPF": 119.924899, "YER": 271.69653, "ZAR": 18.699792, "ZMK": 9770.691132, "ZMW": 17.98867, "ZWL": 349.527
      }
    }

    return currencyExchange.rates
  }

  convertCurrency(amount, fromCurrency, toCurrency) {
    console.log(this.state.currencyConversions)
    let result = "{undefined}"
    const numerator = this.state.currencyConversions[toCurrency]
    const denominator = this.state.currencyConversions[fromCurrency]

    console.log(numerator, denominator)

    if (numerator && numerator > 0 && denominator && denominator > 0) {
      result = amount * numerator / denominator
    }

    return result
  }

  cleanUpCountryData(country) {
    const correctedTimeZones = country.timezones.map(timezone => {
      if (timezone === "UTC+04") {
        return "UTC+04:00"
      } else if (timezone === "UTC+11") {
        return "UTC+11:00"
      }
      return timezone
    })

    country.timezones = correctedTimeZones

    return country
  }

  componentDidMount() {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(fetchedCountries => {
        let countries = []
        for (const index in fetchedCountries) {
          let country = this.cleanUpCountryData(fetchedCountries[index])
          countries[index] = { ...country, inFilter: true, visited: false, wantToVisit: false }
        }

        let maps = {}

        const regions = this.getSingleValueEnumerationList(countries, "region")
        const regionsMap = this.getSingleValueEnumerationMap(countries, regions, "region", "name")
        maps["region"] = regionsMap
        const subregions = this.getSingleValueEnumerationList(countries, "subregion")
        const subregionsMap = this.getSingleValueEnumerationMap(countries, subregions, "subregion", "name")
        maps["subregion"] = subregionsMap
        const currencies = this.getMultiValueEnumerationWithSubkeyList(countries, "currencies", "code")
        const currenciesMap = this.getMultiValueEnumerationWithSubkeyMap(countries, currencies, "currencies", "code", "name")
        maps["currency"] = currenciesMap
        const languages = this.getMultiValueEnumerationWithSubkeyList(countries, "languages", "name")
        const languagesMap = this.getMultiValueEnumerationWithSubkeyMap(countries, languages, "languages", "name", "name")
        maps["language"] = languagesMap
        const timeZones = this.getMultiValueEnumerationList(countries, "timezones")
        const timeZonesMap = this.getMultiValueEnumerationMap(countries, timeZones, "timezones", "name")
        maps["timezone"] = timeZonesMap
        const currencyConversions = this.getCurrencyConversions()

        this.setState({ countries, maps, currencyConversions })

        let userid = localStorage.getItem('userid')

        if (userid === null) {
          userid = (Math.floor(Math.random() * 1000000000000))
          localStorage.setItem('userid', userid)
        }
      })
  }

  flipState = (event) => {
    const attribute = event.target.dataset.setattribute
    const countryName = event.target.dataset.countryname

    const countries = this.state.countries.map(country => {
      if (country.name === countryName) {
        const setValue = !country[attribute]
        country[attribute] = setValue
      }
      return country
    })

    this.setState({ countries })
  }

  search = (event) => {
    const searchText = event.target.value.toLowerCase()
    const regexp = RegExp(searchText)

    const countries = this.state.countries.map(country => {
      if (regexp.test(country.name.toLowerCase())) {
        country.inFilter = true
      } else {
        country.inFilter = false
      }

      return country
    })

    this.setState({ searchText, countries })
  }

  filter = (event) => {
    const filterBy = event.target.dataset.filterby.toLowerCase()
    let filterValue = event.target.value
    let maps = Object.assign({}, this.state.maps)

    if (!filterValue) {
      filterValue = event.target.dataset.filtervalue
    }

    console.log(filterBy, filterValue)

    Object.keys(maps[filterBy]).forEach(option => {
      maps[filterBy][option].filtered = false
    })

    if (filterValue) {
      maps[filterBy][filterValue].filtered = true
    }

    const oldCountries = this.state.countries
    let countries = [...oldCountries]
    let countriesInFilter = {}

    if (filterValue) {
      Object.keys(maps).forEach(mapKey => {
        Object.keys(maps[mapKey]).forEach(optionKey => {
          if (maps[mapKey][optionKey].filtered) {
            maps[mapKey][optionKey].countries.forEach(countryName => {
              countriesInFilter[countryName] = ""
            })
          }
        })
      })

      countries = oldCountries.map(country => {
        if (countriesInFilter[country.name] === "") {
          country.inFilter = true
        } else {
          country.inFilter = false
        }
        return country
      })
    } else {
      countries = oldCountries.map(country => {
        country.inFilter = true
        return country
      })
    }

    this.setState({ countries, maps })
  }

  sortAlpha = (event) => {
    const sortBy = event.target.dataset.sortby.toLowerCase()
    const sortOrder = event.target.dataset.sortorder.toLowerCase()

    let countries = [...this.state.countries]

    console.log(sortBy, sortOrder)
    if (sortOrder === "ascending") {
      countries.sort((a, b) => {
        var nameA = a[sortBy].toUpperCase();
        var nameB = b[sortBy].toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      })
    }
    if (sortOrder === "descending") {
      countries.sort((a, b) => {
        var nameA = a[sortBy].toUpperCase();
        var nameB = b[sortBy].toUpperCase();
        if (nameA > nameB) {
          return -1;
        }
        if (nameA < nameB) {
          return 1;
        }
        return 0;
      })
    }

    this.setState({ countries })
  }

  sortNumeric = (event) => {
    const sortBy = event.target.dataset.sortby.toLowerCase()
    const sortOrder = event.target.dataset.sortorder.toLowerCase()

    let countries = [...this.state.countries]

    console.log(sortBy, sortOrder)
    if (sortOrder === "ascending") {
      countries.sort((a, b) => a[sortBy] - b[sortBy])
    }
    if (sortOrder === "descending") {
      countries.sort((a, b) => b[sortBy] - a[sortBy])
    }

    this.setState({ countries })
  }

  unfilter = (event) => {
    console.log('unfilter')
    const searchText = ""

    let maps = Object.assign({}, this.state.maps)

    Object.keys(maps).forEach(mapKey => {
      Object.keys(maps[mapKey]).forEach(optionKey => {
        maps[mapKey][optionKey].filtered = false
      })
    })

    let countries = [...this.state.countries].map(country => {
      country.inFilter = true
      return country
    })

    this.setState({ searchText, countries, maps })
  }

  createCountryCards = () => {
    const countries = this.state.countries
    const selectedCountries = []

    countries.forEach((country) => {
      if (country.inFilter)
        selectedCountries.push(country)
    })

    return (
      <div>
        <div className="CountryCardsList">
          {selectedCountries.map((country, index) => <CountryCard key={index} id={index} country={country} setDBInformation={this.flipState} filter={this.filter} />)}
        </div>
      </div>
    )
  }

  getMapData(attribute) {
    let mapData = {}
    let countryNames = []
    let countryValues = []

    mapData['attribute'] = attribute

    this.state.countries.forEach(country => {
      countryNames.push(country.name)
      countryValues.push(country[attribute])
    })

    mapData['countries'] = countryNames
    mapData['values'] = countryValues

    return mapData
  }

  toggleMode = () => {
    const currentViewMode = this.state.viewMode
    let viewMode = ""

    if (currentViewMode === "cards") {
      viewMode = "maps"
    } else {
      viewMode = "cards"
    }

    this.setState({viewMode})
  }

  selectMap = (event) => {
    const selectedMap = event.target.value
    this.setState({selectedMap})
  }

  render() {
    const viewMode = this.state.viewMode
    const selectedMap = this.state.selectedMap
    const mapData = this.getMapData(selectedMap)

    return (
      <div className="App">
        <header>
          {viewMode === "cards" ?
            <FontAwesomeIcon className="CardsMode" size="5x" onClick={this.toggleMode} icon={faDatabase} /> :
            <FontAwesomeIcon className="MapMode" size="5x" onClick={this.toggleMode} icon={faMap} />}
          {viewMode === "cards" ?
            null :
            <select className="MapSelect" value={selectedMap} onChange={this.selectMap}>
              <option value="area">Area</option>
              <option value="population">Population</option>
            </select>}
        </header>
        {viewMode === "cards" ? <FilterSearch
          search={this.search}
          sortAlpha={this.sortAlpha}
          sortNumeric={this.sortNumeric}
          filter={this.filter}
          unfilter={this.unfilter}
          searchText={this.state.searchText}
          maps={this.state.maps} /> :
          null
        }
        {viewMode === "cards" ? this.createCountryCards() :
          <div className="MapContainer">
            <Map countries={mapData.countries} values={mapData.values} attribute={mapData.attribute} />
          </div>
        }
      </div>
    );
  }
}

export default App;