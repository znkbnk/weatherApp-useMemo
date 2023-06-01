import React, { useState, useMemo } from 'react';

const Weather = () => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(0);
  const [error, setError] = useState(null);

  const convertTemperature = useMemo(() => {
    console.log('Calculating temperature...');
    return (celsius) => (celsius * 9/5) + 32;
  }, []);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleTemperatureChange = (e) => {
    setTemperature(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can add code to fetch the actual
    //   temperature from an API based on the city name
    // For the sake of simplicity, let's assume
    //   we get the temperature as a response
    const response = { temperature: 25 };

    if (response.temperature !== undefined) {
      setTemperature(response.temperature);
      setError(null);
    } else {
      setError('Failed to fetch temperature data.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter City: </label>
        <input type="text" value={city} onChange={handleCityChange} />

        <br />

        <label>Enter Temperature in Celsius: </label>
        <input type="number" value={temperature} onChange={handleTemperatureChange} />

        <br />

        <button type="submit">Get Temperature</button>
      </form>

      <h2>Temperature in {city}</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <>
          <p>Celsius: {temperature}</p>
          <p>Fahrenheit: {convertTemperature(temperature)}</p>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Weather />
    </div>
  );
};

export default App;
