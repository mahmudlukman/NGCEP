import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, CardActions, CardContent, Collapse, Button, Typography, Rating, useTheme, useMediaQuery } from '@mui/material';
import Header from '../../components/Header';
import { getProducts } from '../../redux/features/productSlice';
import { useEffect } from 'react';

const Product = ({
  _id,
  usage_type,
  type,
  power,
  model,
  serial_number,
  company_name,
  address,
  state,
  lga,
  contact_person, 
  phone,
  email,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card sx={{ backgroundImage: "none", backgroundColor: theme.palette.background.alt, borderRadius: "0.55rem" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[700]} gutterBottom></Typography>
        {/* <Typography variant='h5' component="div">
          Company: {company_name}
        </Typography> */}
        <Typography variant='h5' sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]} gutterBottom>
          {company_name}
        </Typography>
        {/* <Rating value={rating} readOnly /> */}
        <Typography variant="body2">Type: {type}</Typography>
        <Typography variant="body2">Model: {model}</Typography>
        <Typography variant="body2">Usage Type: {usage_type}</Typography>
      </CardContent>
      <CardActions>
        <Button variant='primary' size='small' onClick={() => setIsExpanded(!isExpanded)}>See More</Button>
      </CardActions>
      <Collapse in={isExpanded} timeout="auto" unmountOnExit sx={{color: theme.palette.neutral[300]}}>
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Power: {power}</Typography>
          <Typography>State: {state}</Typography>
          <Typography>Address: {address}</Typography>
          <Typography>Local Government: {lga}</Typography>
          <Typography>Contact Person: {contact_person}</Typography>
          <Typography>Phone: { phone}</Typography>
          <Typography>Email: { email}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

const Products = () => {
  const {products, loading} = useSelector((state) => ({...state.product}))
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  // const { data, isLoading } = useGetProductsQuery();
  const isNonMobile = useMediaQuery("(min-width: 1000px)");
  // console.log('data', data)
  return (
    <Box m="1.5rem 2.5rem">
      <Header title='PRODUCTS' subtitle='See your list of products' />
      {products || loading ? (
        <Box mt="20px" display="grid" gridTemplateColumns="repeat(4, minmax(0, 1fr))" justifyContent="space-between" rowGap="20px" columnGap="1.33%" sx={{ "& > div": { gridColumn: isNonMobile ? undefined : "span 4" } }}>
          {products.map(({
            _id,
            usage_type,
            type,
            power,
            model,
            serial_number,
            company_name,
            address,
            state,
            lga,
            contact_person, 
            phone,
            email,
          }) => (
            <Product key={_id} _id={_id} usage_type={usage_type} type={type} power={power} model={model} serial_number={serial_number} company_name={company_name} address={address} state={state} lga={lga} contact_person={contact_person} phone={phone} email={email} /> 
          ))}
        </Box>
      ) : <>Loading...</>}
    </Box>
  )
}

export default Products