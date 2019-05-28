// @flow
export function sliceDateStrToYear(str: string): string {
  return str ? str.substring(0, 4) : '';
}

export function joinArrToStrByComma(genres: string[]): string {
  return genres ? genres.join(' & ') : '';
}

export function searchInString(query: string, str: string): boolean {
  return str.toLowerCase().trim().search(query.toLowerCase()) === 0;
}

export function searchInArray(query: string, array: any[]): boolean {
  return !!array.find(i => query.toLowerCase().trim() === i.toLowerCase());
}
