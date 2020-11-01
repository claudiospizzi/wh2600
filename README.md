# wh2600

Module to read data from the WH2600 weather station.

## Description

This module is able to get the current weather data of the WH2600 weather
station. The weather station is distributed under different names: FOSHK WH2600,
Froggit WH2600 / WH2601 / WH2600 SE, Conrad Renkforce WH2600 and Ambient Weather
WS-1400. The weather logger does not provide a native api, so we load and parse
the live data page:

* [http://<ip-of-weather-station>/livedata.html](http://<ip-of-weather-station>/livedata.html)
