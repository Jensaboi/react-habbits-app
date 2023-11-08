const LOCAL_STORAGE_KEY = "habbitsData";

export function getHabbitsFromLocalStorage() {
  const DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  return DATA ? DATA : {};
}

export function setLocalStorageHabbits(data) {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

export const DAY_NAMES = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
