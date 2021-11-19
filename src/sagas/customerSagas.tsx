import {
  put,
  call,
  all,
  take,
  takeLatest,
  takeEvery,
  fork,
} from 'redux-saga/effects';

import * as types from '../redux/actionTypes';

import {
  deleteCustomerError,
  loadCustomersError,
  loadCustomersSuccess,
  deleteCustomerSuccess,
  updateCustomerSuccess,
  updateCustomerError,
  createCustomerError,
  createCustomerSuccess,
} from '../redux/actions';

import {
  loadCustomersApi,
  deleteCustomerApi,
  updateCustomerApi,
  createCustomerApi,
} from '../apis/customerApi';

import xml2js from 'xml2js';

import { xmlHelper } from '../helpers/xmlHelper';

// Load Customers Start
function* onLoadCustomersStartHandler(): any {
  try {
    const response = yield call(loadCustomersApi);

    if (response.status === 200) {
      let parser = new xml2js.Parser();

      let res: any = xmlHelper(response.data);

      //console.log(res);

      var resData: any;
      parser.parseString(res, function (err: any, result: any) {
        resData =
          result.Envelope.Body[0].GetAllCustomerResponse[0]
            .GetAllCustomerResult[0].Customer;
      });

      yield put(loadCustomersSuccess(resData));
    }
  } catch (error) {
    yield put(loadCustomersError(error));
  }
}

function* onLoadCustomersRequest() {
  yield takeEvery(types.LOAD_CUSTOMERS_START, onLoadCustomersStartHandler);
}
// Load Customers End

// Create Customer Start
function* onCreateCustomerStartHandler({ payload }: any): any {
  try {
    const response = yield call(createCustomerApi, payload);

    if (response.status === 200) {
      yield put(createCustomerSuccess());
    }
  } catch (error) {
    yield put(createCustomerError(error));
  }
}

function* onCreateCustomerRequest() {
  yield takeLatest(types.CREATE_CUSTOMER_START, onCreateCustomerStartHandler);
}
// Create Customer End

// Delete Customer Start
function* onDeleteCustomerStartHandler(customerID: number): any {
  try {
    const response = yield call(deleteCustomerApi, customerID);
    if (response.status === 200) {
      yield put(deleteCustomerSuccess(customerID));
    }
  } catch (error) {
    yield put(deleteCustomerError(error));
  }
}

function* onDeleteCustomerRequest() {
  while (true) {
    const { payload: customerID } = yield take(types.DELETE_CUSTOMER_START);
    yield call(onDeleteCustomerStartHandler, customerID);
  }
}
// Delete Customer End

// Update Customer Start
function* onUpdateCustomerStartHandler({
  payload: { id, customer },
}: any): any {
  try {
    const response = yield call(updateCustomerApi, customer, id);

    if (response.status === 200) {
      yield put(updateCustomerSuccess());
    }
  } catch (error: any) {
    yield put(updateCustomerError(error.response.data));
  }
}

function* onUpdateCustomerRequest() {
  yield takeLatest(types.UPDATE_CUSTOMER_START, onUpdateCustomerStartHandler);
}
// Update Customer End

const customerSagas = [
  fork(onLoadCustomersRequest),
  fork(onDeleteCustomerRequest),
  fork(onUpdateCustomerRequest),
  fork(onCreateCustomerRequest),
];

export default function* rootSaga() {
  yield all(customerSagas);
}
