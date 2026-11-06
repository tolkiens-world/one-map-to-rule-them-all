# One Map to Rule Them All
Mapping out the locations of J. R. R. Tolkien's World across New Zealand, the United Kingdom, and Tenerife
**Live Site:** [https://tolkiens-world.github.io/one-map-to-rule-them-all]
## About
This map plots all of the filming locations for the world of J.R.R. Tolkien encompassing all six Peter Jackson films, the Rings of Power, and the Tolkien biopic.
### Productions covered

| Production | Filmed | Where |
|---|---|---|
| *The Lord of the Rings* trilogy | 1999–2000 | New Zealand |
| *The Hobbit* trilogy | 2011–2012 | New Zealand |
| *Tolkien* | 2017 | England |
| *The Rings of Power*, season 1 | 2020–2021 | New Zealand |
| *The Rings of Power*, season 2 | 2022–2023 | England, Tenerife |
| *The Rings of Power*, season 3 | 2024–2025 | England |

## How the map works

- The map fills the browser window on load at world zoom, so both hemispheres are visible.
- An intro modal opens on load and closes on click.
- Each location has a custom marker that scales with zoom level.
- Clicking a marker opens a styled popup with the location name, a short description, an openly licensed image, and a link to an authoritative source.
- The slider at the bottom filters markers by production year. It is a plain HTML range input wired to the marker list, not a plugin.

## Data

All locations live in `data/locations.json`. Each entry has the following fields.

| Field | Type | Notes |
|---|---|---|
| `name` | string | Real place name as it appears on the map |
| `fictional_location` | string | The Middle-earth place, or the event in Tolkien's life, that was filmed here |
| `production` | string | One of the productions in the table above |
| `year` | integer | Year of filming, used by the slider |
| `lat` | number | Latitude in decimal degrees |
| `lng` | number | Longitude in decimal degrees |
| `description` | string | Two or three sentences on what was filmed here and how the place was used |
| `image` | string | Path to the image in `img/` |
| `image_credit` | string | Photographer, source, and license |
| `link` | string | URL to an authoritative page for the place |

To add a location, append an entry to the JSON file and drop the image in `img/`. No code changes are needed.

## Built with

- [Leaflet 2.0.0-beta.2](https://leafletjs.com/) for the map, loaded from jsDelivr through an import map
- [Bootstrap 5.3](https://getbootstrap.com/) for layout, the intro modal, and the slider bar
- [OpenStreetMap](https:www.openstreetmap.org/) for the basemap tiles
- Hosted on GitHub Pages

The Leaflet version is pinned in `index.html`. Do not change it to `latest`.

### A note on Leaflet 2.0

This project uses Leaflet 2.0, which is in beta as of November 2026. It differs from Leaflet 1.9.4, the version most online tutorials assume, in three ways that matter here.

- There is no global `L`. Classes are imported by name: `import { LeafletMap, TileLayer, Marker } from 'leaflet'`.
- Objects are built with `new`: `new Marker(latlng)` rather than `L.marker(latlng)`.
- The script that builds the map is a module script (`<script type="module">`).

Most Leaflet 1.x plugins do not work with 2.0 yet.

```
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Repository structure

```
index.html            landing page: title, intro modal, slider bar, and the map container
css/style.css         custom styles for the popup, the markers, and the slider bar
js/map.js             builds the map, loads locations.json, places markers, wires the slider
data/locations.json   the places of memory, one entry per location
img/                  one image per location, named to match its entry in locations.json
README.md             this file
```

## Credits and licensing

Basemap © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright). Map data is available under the Open Database License. The standard-style tiles are a Produced Work of the OpenStreetMap Foundation and carry the same attribution.

Location images are drawn from openly licensed sources. Each image's photographer, source, and license appear in its popup and in `data/locations.json`.

The on-load intro modal follows the approach used by [Mapping Morton Village](https://github.com/beyeraut/mappingmvfinal-master).

## Authors

Dr. Gillian Macdonald, Co-Director, Computational Cultural Heritage Graduate Fellowship, and Director of LEADR, Michigan State University

Harry Foster, Senior Fellow, Computational Cultural Heritage Graduate Fellowship, Michigan State University
