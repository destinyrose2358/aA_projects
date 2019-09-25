// state === {student: "Albert", grade: 12, age: 18}

let action1 = {
  type: "change age",
  newAge: 19
};

let action2 = {
  type: "change name",
  newName: "John"
};

let action3 = {
  type: "change grade",
  newGrade: 11
};

let action4 = {
  type: "change grade",
  newGrade: 13
};

let ageReducer = (oldAge = null, action) => {
  if (action.type === "change age") {
    return action.newAge;
  } else {
    return oldAge;
  }
};

let nameReducer = (oldName = null, action) => {
  if (action.type === "change name") {
    return action.newName;
  } else {
    return oldName;
  }
};

let gradeReducer = (oldGrade, action) => {
  if (action.type === "change grade" && action.newGrade > oldGrade) {
    return action.newGrade;
  } else {
    return oldGrade;
  }
};

function combineReducers(reducers) {
  this.reducers = reducers;
  return (prevState = {}, action = {type: ""}) => {
    let nextState = Object.assign({}, prevState);
    if (Object.keys(prevState).length === 0) {
      Object.entries(this.reducers).forEach(pair => {
        let reducer = pair[1];
        let key = pair[0];
        let result = {};
        result[key] = reducer(prevState, action);
        Object.assign(nextState, result);
      });
    }
    Object.keys(prevState).forEach(key => {
      let oldVal = prevState[key];
      nextState[key] = this.reducers[key](oldVal, action);
    });
    return nextState;
  };
}