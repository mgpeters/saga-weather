### Welcome to SagaWeather

SagaWeather is fully responsive React16 (+Router) / Redux (+Saga) single page application which leverages the free OpenWeatherMap API.

While running the app locally is easy, there is some minor setup involved (mainly with importing your own API key)

You can also enjoy the benefit of documented components with Storybook, as well as automated formatting with Prettier and styling with ESLint.

There is test coverage, but please feel free to submit a pull request this project and add your own.

Also, feel free to report any issues you may encounter.

### How To Install

1. Please clone this repository and run "npm install" (or "npm i" for short) in the root directory to download the dependencies.

2. You'll have to sign up for a free API key with OpenWeatherMap (https://openweathermap.org/).

3. Then, input and save your api key on line 24 in saga.js, which can be found at path ./src/state/sagas.js

```
const apiKey = api ? api.openWeatherMap : undefined; // add key in place of 'undefined'
```

4. Lastly, run npm run dev to start the webpack development server.

### How To Use

After running the development server, you can click the side navigation bar to expand and choose from a list of preselected cities (New York City, Miami, LosAngeles). If you want to search for your own, you can input the city name, state code, and country code into the search bar to fetch a new location.

Please note, you must input all three (city, state, and country) to fetch weather data from a non-default city.

You can also click any of the weekly forecast items below the current forecast (and below the hourly depending on the size of the screen) to display a modal with additional information: sunset time, sunrise time, description, and wind speed.

Please enjoy!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
