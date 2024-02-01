import { CustomDropdown } from "components/CustomDropdown";
import { useCountriesProps } from "./useCountriesProps";
import { Button, Spinner } from "@chakra-ui/react";

export const Countries = () => {

  const {
    title,
    debouncedHandleSearch,
    countries,
    countriesOptions,
    countryValue,
    setCountryValue,
    countriesByRegion,
    isLoading
  } = useCountriesProps();

  return <article>
    <h1>{title}</h1>
    <Button>MyButton</Button>
    <input onChange={debouncedHandleSearch} type="search" name="country_search" />
    <CustomDropdown
      value={countryValue}
      setValue={setCountryValue}
      options={countriesOptions}
      placeholder="Filter by Region"
    />
    {
      isLoading ? <Spinner color="red.500" />
      : countriesByRegion
        ? countriesByRegion?.map((country) => <div key={country.name.common}>{country.name.common}</div>)
        : countries?.map((country) => <div key={country.name.common}>{country.name.common}</div>)
    }
  </article>;
};
