const fetchCityAndCountry = async (lat, lng) => {
  const apiKey = import.meta.env.VITE_OPENCAGEDATA_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lng}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    if (data.results.length > 0) {
      const city =
        data.results[0].components.city ||
        data.results[0].components.town ||
        data.results[0].components.village;
      const country = data.results[0].components.country;
      return { city, country };
    } else {
      throw new Error("No results found");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchCityAndCountry;
