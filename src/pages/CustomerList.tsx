import { useEffect } from 'react';
import DataTable from '../components/DataTable';
import Container from '@material-ui/core/Container';

import { Typography } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { deleteCustomerStart, loadCustomersStart } from '../redux/actions';
import { toast } from 'react-toastify';

const CustomerList = (props: any) => {
  const { customers, loading } = useSelector((state: any) => state.customers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCustomersStart());
  }, [dispatch]);

  const handleDelete = async (id: any) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      try {
        await dispatch(deleteCustomerStart(parseInt(id)));
        setTimeout(() => {
          dispatch(loadCustomersStart());
          toast.success('Customer deleted successfully');
        }, 500);
      } catch (error: any) {
        toast.error(error.message);
      }
    }
  };

  return (
    <Container>
      <Typography
        variant='h6'
        color='textSecondary'
        component='h2'
        gutterBottom
      >
        Customer List
      </Typography>

      {customers ? (
        <DataTable customers={customers} handleDelete={handleDelete} />
      ) : (
        <Typography
          variant='subtitle1'
          color='textSecondary'
          gutterBottom
          align='center'
        >
          No customers found
        </Typography>
      )}
      <br />
      {loading ? (
        <Box
          sx={{ display: 'flex' }}
          alignItems='center'
          justifyContent='center'
        >
          <CircularProgress />
        </Box>
      ) : null}
    </Container>
  );
};

export default CustomerList;
