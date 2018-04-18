const platoons = [{
    id: 1,
    name: "platoon 1",
    speed: 5,
    distance: 1,
    vehicles: [{
      id: "v1,",
      isLead: true,
      destination:  {
        name: 'Cork',
        location: {
            type: 'Point',
            // Place longitude first, then latitude
            coordinate: [-8.481445310000026, 51.90528059751166]
        }
    }
    }],
    location: {
      name: 'Toronto',
      location: {
          type: 'Point',
          // Place longitude first, then latitude
          coordinate: [-79.3968307, 43.6656976]
      }
  },
    size: 3
  },
  {
    id: 2,
    name: "platoon 2",
    speed: 5,
    distance: 1,
    location: {
          name: 'Toronto',
          location: {
              type: 'Point',
              // Place longitude first, then latitude
              coordinate: [-79.3968307, 43.6656976]
          }
      },
    size: 3
  },
  {
    id: 3,
    name: "platoon 3",
    speed: 5,
    distance: 1,
    location: {
      name: 'Toronto',
      location: {
          type: 'Point',
          // Place longitude first, then latitude
          coordinate: [-79.3968307, 43.6656976]
      }
  },
    size: 3
  }];

  module.exports = platoons