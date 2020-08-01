export default function properties(state = [], action) {
  switch (action.type) {
    case 'SET_PROPERTIES':
      return [...action.properties];

    default:
      return state;
  }
}
