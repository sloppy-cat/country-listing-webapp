import { useState } from "react";
import { Country } from "./type";

const tempCountryList: Country[] = [
  {
    "name": "South Africa",
    "alpha2Code": "ZA",
    "callingCodes": [
      "27"
    ],
    "capital": "Pretoria",
    "region": "Africa"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "alpha2Code": "GS",
    "callingCodes": [
      "500"
    ],
    "capital": "King Edward Point",
    "region": "Americas"
  },
]

export function useCountryList(): Country[] {
  const [countryList, setCountryList] = useState<Country[]>(tempCountryList)

  return countryList
}