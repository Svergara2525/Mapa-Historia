import L from 'leaflet';

export const App: React.FC = () => {
  var map = L.map('map', {
    crs: L.CRS.Simple
  });

  var bounds: [[number, number], [number, number]] = [[0, 0], [1000, 1000]];
  var image = L.imageOverlay('uqm_map_full.png', bounds).addTo(map);

  map.fitBounds(bounds);


  return(<div id="map" style={{ height: '500px', width: '100%' }}></div>)
}
