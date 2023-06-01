import { useState, useEffect } from 'react';
import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from "react-toastify";
import { login } from "../../redux/features/authSlice"


const initialState = {
  email: "",
  password: "",
};


const Register = () => {
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
              label="First Name"
              name="firstName"
              type="text"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Last Name"
              name="lastName"
              type="text"
              sx={{ gridColumn: "span 2" }}
            />
            <TextField
              label="Phone"
              name="phone"
              type="number"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Confirm Password"
              name="password2"
              type="password"
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
              Already have an account? Login here.
            </Typography>
          </Box>
        </form>
      </Box>
    </Box>
  )
}

export default Register