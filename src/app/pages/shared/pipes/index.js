export function sliceDateStrToYear(str) {
  return str ? str.substring(0, 4) : '';
}

export function joinArrToStrByComma(genres) {
  return genres ? genres.join(' & ') : '';
}
