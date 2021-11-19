import axios from 'axios';

const wcfURL = 'http://localhost:58629/CustomerService.svc';

export const loadCustomersApi = async () => {
  let getCustomersXml = `
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Body>
      <GetAllCustomer xmlns="http://tempuri.org/" />
    </s:Body>
    </s:Envelope>
  `;
  return await axios.post(wcfURL, getCustomersXml, {
    headers: {
      'Content-Type': 'text/xml',
      SOAPAction: 'http://tempuri.org/ICustomerService/GetAllCustomer',
    },
  });
};

export const createCustomerApi = async (customer: any) => {
  let createCustomerXml = `
    <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Body>
    <InsertCustomer xmlns="http://tempuri.org/">
    <c xmlns:d4p1="http://schemas.datacontract.org/2004/07/CustomerWcf" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
    <d4p1:DOB>${customer.DOB}</d4p1:DOB>
    <d4p1:accountNo>${customer.accountNo}</d4p1:accountNo>
    <d4p1:activeData>${customer.activeData}</d4p1:activeData>
    <d4p1:customerRank>${customer.customerRank}</d4p1:customerRank>
    <d4p1:customerStatus>${customer.customerStatus}</d4p1:customerStatus>
    <d4p1:customerType>${customer.customerType}</d4p1:customerType>
    <d4p1:gender>${customer.gender}</d4p1:gender>
    <d4p1:name>${customer.name}</d4p1:name>
    <d4p1:ntn>${customer.ntn}</d4p1:ntn>
    </c>
    </InsertCustomer>
    </s:Body>
    </s:Envelope>
`;

  return await axios.post(wcfURL, createCustomerXml, {
    headers: {
      'Content-Type': 'text/xml',
      SOAPAction: 'http://tempuri.org/ICustomerService/InsertCustomer',
    },
  });
};

export const deleteCustomerApi = async (id: number) => {
  let deleteCustomersXml = `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
        <s:Body>
          <DeleteCustomer xmlns="http://tempuri.org/">
            <id>${id}</id>
          </DeleteCustomer>
        </s:Body>
        </s:Envelope>`;
  return await axios.post(wcfURL, deleteCustomersXml, {
    headers: {
      'Content-Type': 'text/xml',
      SOAPAction: 'http://tempuri.org/ICustomerService/DeleteCustomer',
    },
  });
};

export const updateCustomerApi = async (customer: any, id: number) => {
  let editCustomerXml = `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
  <s:Body>
    <UpdateCustomer xmlns="http://tempuri.org/">
      <c xmlns:d4p1="http://schemas.datacontract.org/2004/07/CustomerWcf" xmlns:i="http://www.w3.org/2001/XMLSchema-instance">
        <d4p1:DOB>${customer.DOB}</d4p1:DOB>
        <d4p1:accountNo>${customer.accountNo}</d4p1:accountNo>
        <d4p1:activeData>${customer.activeData}</d4p1:activeData>
        <d4p1:customerRank>${customer.customerRank}</d4p1:customerRank>
        <d4p1:customerStatus>n${customer.customerStatus}ew</d4p1:customerStatus>
        <d4p1:customerType>${customer.customerType}</d4p1:customerType>
        <d4p1:gender>${customer.gender}</d4p1:gender>
        <d4p1:id>${id}</d4p1:id>
        <d4p1:name>${customer.name}</d4p1:name>
        <d4p1:ntn>${customer.ntn}</d4p1:ntn>
      </c>
    </UpdateCustomer>
  </s:Body>
</s:Envelope>`;

  return await axios.put(wcfURL, editCustomerXml, {
    headers: {
      'Content-Type': 'text/xml',
      SOAPAction: 'http://tempuri.org/ICustomerService/UpdateCustomer',
    },
  });
};

export const getCustomerById = async (id: number) => {
  let getCustomerByIdXml = `<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/">
    <s:Body>
      <GetCustomerById xmlns="http://tempuri.org/">
        <id>${id}</id>
      </GetCustomerById>
    </s:Body>
  </s:Envelope>`;

  return await axios.post(wcfURL, getCustomerByIdXml, {
    headers: {
      'Content-Type': 'text/xml',
      SOAPAction: 'http://tempuri.org/ICustomerService/GetCustomerById',
    },
  });
};
