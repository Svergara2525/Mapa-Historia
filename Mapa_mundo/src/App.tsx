import L from 'leaflet';

export const App: React.FC = () => {
  var map = L.map('map', {
    crs: L.CRS.Simple
  });

  var bounds: [L.LatLng][L.LatLng] = [[0,0], [1000,1000]];
  var image = L.imageOverlay('uqm_map_full.png', bounds).addTo(map);

  return("hola mundo loool")
}
