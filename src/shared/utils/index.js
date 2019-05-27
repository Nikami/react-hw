export function sliceDateStrToYear(str) {
  return str ? str.substring(0, 4) : '';
}

export function joinArrToStrByComma(genres) {
  return genres ? genres.join(' & ') : '';
}

export function searchInString(query, str) {
  return str.toLowerCase().trim().search(query.toLowerCase()) === 0;
}

export function searchInArray(query, array) {
  return !!array.find(i => query.toLowerCase().trim() === i.toLowerCase());
}
