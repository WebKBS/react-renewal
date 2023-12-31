export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('데이터 페칭 실패');
  }
  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('PUT 데이터 페칭 실패');
  }
  return resData.message;
}

export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  const resData = await response.json();

  if (!response.ok) {
    throw new Error('유저 데이터 페칭 실패');
  }
  return resData.places;
}
