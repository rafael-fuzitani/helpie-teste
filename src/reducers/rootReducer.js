const initState = {
  name: "",
  surName: "",
  email: "",
  phone: "",
  cep: "",
  address1: "",
  address2: "",
  birth: "",
  income: "",
  users: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_SURNAME":
      return { ...state, surName: action.payload };
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };
    case "UPDATE_PHONE":
      return { ...state, phone: action.payload };
    case "UPDATE_CEP":
      return { ...state, cep: action.payload };
    case "UPDATE_ADDRESS1":
      return { ...state, address1: action.payload };
    case "UPDATE_ADDRESS2":
      return { ...state, address2: action.payload };
    case "UPDATE_BIRTH":
      return { ...state, birth: action.payload };
    case "UPDATE_INCOME":
      return { ...state, income: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };
  }
  return state;
};

export default rootReducer;
