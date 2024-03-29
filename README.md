[![npm](https://img.shields.io/npm/v/wh2600.svg?style=flat-square)](https://www.npmjs.com/package/wh2600)

# DEPRECATION WARNING

This module is deprecated and not developed anymore. Please use the [node-red-contrib-wh2600](https://github.com/claudiospizzi/node-red-contrib-wh2600) module instead.

# wh2600

WH2600 weather station typescript module.

## Description

This module is able to get the current weather data of the WH2600 weather station. The weather station is distributed under different names: FOSHK WH2600, Froggit WH2600 / WH2601 / WH2600 SE, Conrad Renkforce WH2600 and Ambient Weather WS-1400. The weather logger does not provide a native api, so we load and parse the live data page:

- [http://ip-of-weather-station/livedata.html](http://ip-of-weather-station/livedata.html)

## Example

```typescript
import { WeatherStation } from 'wh2600';

// Create a new weather station. This will not open any connection.
const weatherStation = new WeatherStation('ip-of-weather-station');

// Get the current weather data by querying the livedata.html page.
const weatherData = await weatherStation.getWeatherData();

console.log(weatherData);
```

## Constraint

This module is not associated with any of the weather station manufacturers. Use at your own risk. Please note the [license terms](LICENSE).
