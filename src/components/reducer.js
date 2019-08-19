export const formReducer = (state, action) => {
  switch (action.type) {
    case 'changeFirstName':
      return {
        ...state,
        firstName: action.payload
      };

    case 'changeLastName':
      return {
        ...state,
        lastName: action.payload
      };

    case 'setJump':
      return {
        ...state,
        jump: action.payload
      };

    case 'incr':
      return {
        ...state,
        count: state.count + parseInt(state.jump)
      };

    case 'decr':
      return {
        ...state,
        count: state.count - parseInt(state.jump)
      };

    case 'showFName':
      return {
        ...state,
        displayFName: state.firstName
      };

    case 'showLName':
      return {
        ...state,
        displayLName: state.lastName
      };

    default:
      throw new Error();
  }
};
