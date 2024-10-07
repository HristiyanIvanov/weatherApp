const handleSearch = async (city) => {
  const apiKey = import.meta.env.VITE_OPENCAGEDATA_API_KEY;

  const url = `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.results.length > 0) {
      const { lat, lng } = data.results[0].geometry;

      return { lat, lng };
    } else {
      console.log("City not found");
    }
  } catch (error) {
    console.error("Error fetching the coordinates:", error);
  }
};

export default handleSearch;
