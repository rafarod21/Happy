import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarker from '../images/map-marker.svg';

import '../styles/pages/orphanage-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Visite orfanatos e mude o dia de muitas crianças :)</p>
        </header>

        <footer>
          <strong>Maringá</strong>
          <span>Paraná</span>
        </footer>
      </aside>

      <Map
        center={[-23.4292292,-51.9474355]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>

      <Link to="/" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;