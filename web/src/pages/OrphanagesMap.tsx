import React from 'react';
import mapMarking from '../images/map-marker.svg';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../styles/orphanages-map.css'
import { Map,TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

function  OrphanagesMap() {
    return(   
    <div id="page-map">
        <aside>
            <header>
                <img src={mapMarking} alt="Happy" />

                <h2>Escolha um orfanato</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
                <strong>Rio do Sul</strong>
                <span>Santa Catarina</span>
            </footer>
        </aside>
        <Map
        center={[41.3954535,-8.5171909]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
        >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>
        <Link to="" className="create-orphanage">
            <FiPlus size={32} color= '#FFF'/>
        </Link>
    </div>
    );
}

export default OrphanagesMap;
