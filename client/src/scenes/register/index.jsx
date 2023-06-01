import { useState, useEffect } from 'react';
import { Box, Button, TextField, useMediaQuery, Typography, useTheme, CircularProgress } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { register } from "../../redux/features/authSlice"


const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};


const Register = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { loading, error } = useSelector((state) => ({ ...state.auth }))
  const { email, password, firstName, lastName, phone, confirmPassword } = formValue;
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
    if (password !== confirmPassword) {
      return toast.error('Password should match')
    }
    if (firstName && lastName && phone && email && password && confirmPassword) {
      dispatch(register({ formValue, navigate, toast }))
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
              label="First Name"
              name="firstName"
              type="text"
              value={firstName}
              onChange={onInputChange}
              required
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={onInputChange}
              required
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Phone"
              name="phone"
              type="number"
              value={phone}
              onChange={onInputChange}
              required
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={email}
              onChange={onInputChange}
              required
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={onInputChange}
              required
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={onInputChange}
              required
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
              REGISTER
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
              <Link to="/">
                <p>Already have an account ? Sign In</p>
              </Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Register