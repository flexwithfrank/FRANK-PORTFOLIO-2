"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faSnowflake
} from "@fortawesome/free-solid-svg-icons";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.tomorrow.io/v4/timelines?location=47.6062,-122.3321&fields=temperature&timesteps=1h&units=imperial&apikey=2YREgi4Hu82hMmjsFnnEuTyG1AK9OcHN`
      )
      .then(response => {
        console.log(response);
        if (response.data.error) {
          console.error(
            "Error fetching weather data",
            response.data.error
          );
        } else {
          // Get the current temperature from the Tomorrow.io API response
          const currentTemperature =
            response.data.data.timelines[0].intervals[0].values
              .temperature;
          // Round the temperature to the nearest whole number
          const roundedTemperature = Math.round(currentTemperature);
          setTemperature(roundedTemperature);
        }
      })
      .catch(error => {
        console.error("Error fetching weather data", error);
      });
  }, []);

  return (
    <div className="centima font-extrabold uppercase tracking-tighter text-[#ff3c00]">
      {temperature ? `Seattle: ${temperature}°F` : "Seattle..."}{" "}
      {temperature &&
        (temperature > 60 ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faSnowflake} />
        ))}
    </div>
  );
}
