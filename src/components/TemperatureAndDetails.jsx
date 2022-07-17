import React from "react";
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";

function TemperatureAndDetails() {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy or whatever</p>
      </div>
      <div className="flex flex-row items-center justify-between text-white py-3">
        <svg
          className="w-20"
          data-v-5ed3171e=""
          width="50px"
          height="50px"
          viewBox="0 0 148 148"
          class="owm-weather-icon"
        >
          <path
            d="M110.117 74c0 19.947-16.17 36.117-36.117 36.117-19.947 0-36.117-16.17-36.117-36.117 0-19.947 16.17-36.117 36.117-36.117 19.947 0 36.117 16.17 36.117 36.117"
            fill="#f15d46"
          ></path>
        </svg>
        <p className="text-5xl">34°</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center">
            <UilTemperature size={18} className="mr-1" />
            Real Feel:
            <span className="font-medium ml-1">32°</span>
          </div>

          <div className="flex font-light text-sm items-center">
            <UilTear size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">65%</span>
          </div>

          <div className="flex font-light text-sm items-center">
            <UilWind size={18} className="mr-1" />
            Wind Speed:
            <span className="font-medium ml-1">11 km/h</span>
          </div>
        </div>
      </div>

        <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
            <UilSun />
            <p className="font-light">Rise: <span className="font-medium ml-1">06:45 AM</span></p>
            <p className="font-light">|</p>
            <UilSunset />
            <p className="font-light">Set: <span className="font-medium ml-1">07:45 PM</span></p>
            <p className="font-light">|</p>
            <UilSun />
            <p className="font-light">High: <span className="font-medium ml-1">45°</span></p>
            <p className="font-light">|</p>
            <UilSun />
            <p className="font-light">Low: <span className="font-medium ml-1">40°</span></p>
        </div>


    </div>
  );
}

export default TemperatureAndDetails;
