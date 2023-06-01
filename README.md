# weatherApp-useMemo

In this project, we'll create a simple
weather app that displays the current
temperature for a given city. We'll 
use useMemo() to memoize the temperature
conversion function to avoid unnecessary calculations.

Step 1: Setup

- Create a new React project
using create-react-app.
- Set up the basic project structure
and install any necessary dependencies.

Step 2: Create the Weather component

- Create a new component called Weather.
- Inside the component, initialize
a state variable city to store
the current city name.
- Render an input field where the user
can enter the city name and update
the city state accordingly.

Step 3: Create a Temperature component

- Create a new component called Temperature.
- Inside the component, define a function
convertTemperature that takes a temperature
in Celsius and converts it to Fahrenheit.
- Use the useMemo() hook to memoize the
convertTemperature function, passing the
dependencies (e.g., the temperature value).
- Render the temperature value and
the converted temperature value.

Step 4: Implement the temperature 
conversion logic

- In the Temperature component, update the
convertTemperature function to actually
convert the temperature from Celsius to Fahrenheit.
- Use the formula (celsius * 9/5) + 32
to convert the temperature.
- Ensure that the temperature conversion is
working correctly by passing different
temperature values as props to the
Temperature component.

Step 5: Pass the temperature value
to the Temperature component

- In the Weather component, pass the
temperature value as a prop
to the Temperature component.
- Update the temperature value whenever
the user enters a new city name.

Step 6: Render the Weather component

- In the main component (e.g., App),
render the Weather component.
- Test the application by entering
different city names and verifying
that the temperature is updated accordingly.

Step 7: Styling and UI improvements
(optional)

- Add CSS styles to make the
weather app visually appealing.
- Implement error handling for
invalid city names or when the 
temperature API fails to fetch the data.

