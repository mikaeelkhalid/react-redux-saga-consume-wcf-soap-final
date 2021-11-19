import * as types from './actionTypes';

const initialState = {
  customers: [] as any[],
  loading: false,
  error: null,
};

const customerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.LOAD_CUSTOMERS_START:
    case types.DELETE_CUSTOMER_START:
    case types.UPDATE_CUSTOMER_START:
    case types.CREATE_CUSTOMER_START:
      return {
        ...state,
        loading: true,
      };

    case types.LOAD_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: action.payload,
      };

    case types.CREATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.DELETE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
        customers: state.customers.filter(
          (customer) => customer.id !== action.payload
        ),
      };

    case types.UPDATE_CUSTOMER_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case types.LOAD_CUSTOMERS_ERROR:
    case types.DELETE_CUSTOMER_ERROR:
    case types.UPDATE_CUSTOMER_ERROR:
    case types.CREATE_CUSTOMER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
