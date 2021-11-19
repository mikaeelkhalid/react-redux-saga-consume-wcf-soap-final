import * as types from './actionTypes';

// load customers
export const loadCustomersStart = () => ({
  type: types.LOAD_CUSTOMERS_START,
});

export const loadCustomersSuccess = (customers: any) => ({
  type: types.LOAD_CUSTOMERS_SUCCESS,
  payload: customers,
});

export const loadCustomersError = (error: any) => ({
  type: types.LOAD_CUSTOMERS_ERROR,
  payload: error,
});
// load customers end

// create customer
export const createCustomerStart = (customer: any) => ({
  type: types.CREATE_CUSTOMER_START,
  payload: customer,
});

export const createCustomerSuccess = () => ({
  type: types.CREATE_CUSTOMER_SUCCESS,
});

export const createCustomerError = (error: any) => ({
  type: types.CREATE_CUSTOMER_ERROR,
  payload: error,
});
// create customer end

// delete customer
export const deleteCustomerStart = (customerID: number) => ({
  type: types.DELETE_CUSTOMER_START,
  payload: customerID,
});

export const deleteCustomerSuccess = (customerID: number) => ({
  type: types.DELETE_CUSTOMER_SUCCESS,
  payload: customerID,
});

export const deleteCustomerError = (error: any) => ({
  type: types.DELETE_CUSTOMER_ERROR,
  payload: error,
});
// delete customer end

// update customer
export const updateCustomerStart = (customerInfo: any) => ({
  type: types.UPDATE_CUSTOMER_START,
  payload: customerInfo,
});

export const updateCustomerSuccess = () => ({
  type: types.UPDATE_CUSTOMER_SUCCESS,
});

export const updateCustomerError = (error: any) => ({
  type: types.UPDATE_CUSTOMER_ERROR,
  payload: error,
});
// update customer end
