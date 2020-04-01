export function setUnit(unit) {
  return {
    type: 'SET_UNIT',
    payload: unit
  };
}

export function setInfo(info) {
  return {
    type: 'SET_INFO',
    payload: info
  };
}
