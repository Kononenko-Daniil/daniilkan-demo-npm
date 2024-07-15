import { useEffect, useState } from 'react';

export const useCountry = name => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      setLoading(true);
      await fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then(async res => await res.json())
        .then(res => setCountry(res))
        .catch(() => {
          console.log('County not found');
          setError('County not found');
        })
        .finally(() => setLoading(false));
    };

    fetchCountryInfo();
  }, [name]);

  return {
    loading,
    error,
    country,
  };
};
