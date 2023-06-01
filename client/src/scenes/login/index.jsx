import { useState } from 'react';
import { Box, Button, TextField, useMediaQuery, Typography, useTheme, InputAdornment, IconButton } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import {login} from "../../redux/features/authSlice"
import FlexBetween from '../../components/FlexBetween';
import Form from './Form';
import { useEffect } from 'react';

const initialState = {
  email: "",
  password: "",
};


const Login = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }))
  const { email, password } = formValue;
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
    e.preventDefault()
    if (email && password) {
      dispatch(login({ formValue, navigate, toast }))
    }
  };
  const onInputChange = (e) => {
    let { name, value } = e.target
    setFormValue({ ...formValue, [name]: value })
  };
  
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign='center'>
        <Typography
          fontWeight="bold"
          fontSize="32px"
          color={theme.palette.secondary.main}

        >
          NESREA
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Welcome to NESREA!
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <TextField
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              required
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              sx={{ gridColumn: "span 4" }}
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
              LOGIN
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
              Don't have an account? Sign Up here.
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Login