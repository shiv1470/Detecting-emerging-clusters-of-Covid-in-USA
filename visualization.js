/*
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This example creates circles on the map, representing populations in North
// America.

// First, create an object containing LatLng and population for each city.

interface City {
  center: google.maps.LatLngLiteral;
  radius: number;
}

const citymap: Record<string, City> = {
  Hotspot1: {
    center: { lat: 35.5424444709, lng: -97.9824010419 },
    radius: 2.386139924893198,
  },
  Hotspot2: {
    center: { lat: 37.9991525438, lng: -101.791256465 },
    radius: 6.02527381279162,
  },
  Hotspot3: {
    center: { lat: 36.7152338187, lng: -95.9043661801 },
    radius: 7.5141683809571225,
  },
};

function initMap(): void {
  // Create the map.
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 6,
      center: { lat: 36, lng: -87 },
      mapTypeId: "terrain",
    }
  );

  // Construct the circle for each value in citymap.
  // Note: We scale the area of the circle based on the population.
  for (const city in citymap) {
    // Add the circle for this city to the map.
    const cityCircle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: citymap[city].center,
      radius: citymap[city].radius * 100000,
    });
  }
}
export { initMap };

import "./style.css"; // required for webpack
