import { useGetCOuntriesByRegion, useGetCountryByName } from "api";
import { useState } from "react";
import { debounce } from "utils/debounce";

export const useCountriesProps = () => {

  const [value, setValue] = useState("");
  const [countryValue, setCountryValue] = useState(null);

  const countriesOptions = [
    {
      label: "Asia",
      value: "Asia",
    },
    {
      label: "Africa",
      value: "Africa",
    },
    {
      label: "America",
      value: "America",
    },
    {
      label: "Oceania",
      value: "Oceania",
    },
  ];

  const getCountryByName = useGetCountryByName({ enabled: !!value }, value);

  const getCountriesByRegion = useGetCOuntriesByRegion({ enabled: !!countryValue }, countryValue?.value);

  const handleSearch = (e) => {
    const value = e.target.value.trim();

    if(value) setValue(value);
  };

  const debouncedHandleSearch = debounce(handleSearch, 500);

  return {
    title: "Countries",
    debouncedHandleSearch,
    countries: getCountryByName.data,
    countriesOptions,
    countryValue,
    setCountryValue,
    countriesByRegion: getCountriesByRegion.data,
    isLoading: getCountryByName.isLoading || getCountriesByRegion.isLoading
  };
};
