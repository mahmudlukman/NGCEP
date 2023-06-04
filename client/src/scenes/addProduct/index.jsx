import { useState, useEffect } from 'react';
import { Box, Button, TextField, useMediaQuery, Typography, useTheme, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { createProduct } from "../../redux/features/productSlice"


const initialState = {
  usage_type: "",
  type: "",
  power: "",
  model: "",
  serial_number: "",
  company_name: "",
  address: "",
  state: "",
  lga: "",
  contact_person: "",
  phone: "",
  email: "",
};


const AddProduct = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.product }))
  const { usage_type, type, power, model, serial_number, company_name, address, state, lga, contact_person, phone, email  } = formValue;
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const { palette } = useTheme();

  useEffect(() => {
    error && toast.error(error)
  }, [error])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (usage_type && type && power && model && serial_number && company_name && address && state && lga && contact_person && phone && email) {
      const productData = {...formValue}
      dispatch(createProduct({ productData, navigate, toast }))
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  };

  return (
    <Box>
      <Box
        width={isNonMobileScreens ? "90%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(3, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 3" },
            }}
          >
            {/* <TextField
              label="Generator Usage Type"
              select
              value={usage_type}
              onChange={onInputChange}>
                <MenuItem value={usage_type}>MDA's</MenuItem>
                <MenuItem value={usage_type}>Commercial</MenuItem>
                <MenuItem value={usage_type}>Usage</MenuItem>
                <MenuItem value={usage_type}>Industrial</MenuItem>
              </TextField>
            <TextField
              label="Usage Type"
              select
              value={type}
              onChange={onInputChange}>
                <MenuItem>Diesel</MenuItem>
                <MenuItem>Petrol</MenuItem>
                <MenuItem>Gas</MenuItem>
              </TextField>
            <TextField
              label="Power(KVA)"
              select
              sx={{ gridColumn: "span 1" }}
              value={power}
              onChange={onInputChange}>
                <MenuItem>10-30</MenuItem>
                <MenuItem>32-65</MenuItem>
                <MenuItem>66-100</MenuItem>
                <MenuItem>201-350</MenuItem>
                <MenuItem>351-700</MenuItem>
                <MenuItem>701-1000</MenuItem>
                <MenuItem>1000 above</MenuItem>
              </TextField> */}
            
            <TextField
              label="Generator Usage Type"
              name="usage_type"
              type="text"
              value={usage_type}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Usage Type"
              name="type"
              type="text"
              value={type}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Power(KVA)"
              name="power"
              type="text"
              value={power}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Generator Model"
              name="model"
              type="text"
              value={model}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Generator Serial Number"
              name="serial_number"
              type="text"
              value={serial_number}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Company Name"
              name="company_name"
              type="text"
              value={company_name}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Address"
              name="address"
              type="text"
              value={address}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="state"
              name="state"
              type="text"
              value={state}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="LGA"
              name="lga"
              type="text"
              value={lga}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Contact Person"
              name="contact_person"
              type="text"
              value={contact_person}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Phone"
              name="phone"
              type="number"
              value={phone}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
            <TextField
              label="Email"
              name="email"
              type="text"
              value={email}
              required
              onChange={onInputChange}
              sx={{ gridColumn: "span 1" }}
            />
           
          </Box>

          {/* BUTTON */}
          <Box>
            <Button
              fullWidth
              type='submit'
              sx={{
                m: "2rem 0",
                p: "1rem",
                backgroundColor: theme.palette.secondary.main,
                color: palette.background.alt,
                "&:hover": { color: palette.primary.main },
              }}
            >
              ADD PRODUCT
            </Button>
            <Typography
              sx={{
                textDecoration: "underline",
                color: palette.primary.main,
                "&:hover": {
                  cursor: "pointer",
                  color: palette.primary.light,
                }
              }}
            >
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default AddProduct