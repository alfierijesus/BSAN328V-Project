const roomData = [
  {
    type: 'Standard',
    capacity: '2 guests',
    price: '$120',
    amenities: 'Wi-Fi, Breakfast, Workspace',
    link: 'booking.html?room=Standard'
  },
  {
    type: 'Deluxe',
    capacity: '3 guests',
    price: '$180',
    amenities: 'City view, Mini bar, Premium bedding',
    link: 'booking.html?room=Deluxe'
  },
  {
    type: 'Executive',
    capacity: '4 guests',
    price: '$240',
    amenities: 'Lounge access, Desk, Luxury bathroom',
    link: 'booking.html?room=Executive'
  },
  {
    type: 'Suite',
    capacity: '4 guests',
    price: '$320',
    amenities: 'Living area, Balcony, VIP service',
    link: 'booking.html?room=Suite'
  }
];

const tableBody = document.getElementById('room-table-body');
const searchButton = document.getElementById('search-button');
const roomSearch = document.getElementById('room-search');

function renderRooms(rooms) {
  if (!tableBody) return;
  tableBody.innerHTML = '';
  rooms.forEach((room) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${room.type}</td>
      <td>${room.capacity}</td>
      <td>${room.price}</td>
      <td>${room.amenities}</td>
      <td><a class="cta-link" href="${room.link}">Book now</a></td>
    `;
    tableBody.appendChild(row);
  });
}

function filterRooms() {
  const query = roomSearch.value.trim().toLowerCase();
  const filtered = roomData.filter((room) => {
    return room.type.toLowerCase().includes(query) || room.amenities.toLowerCase().includes(query);
  });
  renderRooms(filtered.length ? filtered : roomData);
}

if (tableBody) {
  renderRooms(roomData);
}

if (searchButton) {
  searchButton.addEventListener('click', filterRooms);
}

if (roomSearch) {
  roomSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      filterRooms();
    }
  });
}
