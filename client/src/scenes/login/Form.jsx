import { useState } from 'react';
import { Box, Button, TextField, useMediaQuery, Typography, useTheme } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import FlexBetween from '../../components/FlexBetween';


const Form = () => {
  const [pageType, setPageType] = useState("login");
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const isLogin = pageType === "login";
  const isRegister = pageType === "register";
  const theme = useTheme();

  return (
    <form>
      <Box
        display="grid"
        gap="30px"
        gridTemplateColumns="repeat(4, minmax(0, 1fr))"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
        }}
      >
        {isRegister && (
          <>
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
              label="Email"
              name="email"
              type="email"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Phone"
              name="phone"
              type="number"
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
          </>
        )}
        {isLogin && (
          <>
            <TextField
              label="Email"
              name="email"
              sx={{ gridColumn: "span 4" }}
            />
            <TextField
              label="Password"
              type="password"
              name="password"
              sx={{ gridColumn: "span 4" }}
            />
          </>
        )}
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
          {isLogin ? "LOGIN" : "REGISTER"}
        </Button>
        <Typography
          onClick={() => {
            setPageType(isLogin ? "register" : "login")
          }}
          sx={{
            textDecoration: "underline",
            color: palette.primary.main,
            "&:hover": {
              cursor: "pointer",
              color: palette.primary.light,
            }
          }}
        >
          {isLogin ? "Don't have an account? Sign Up here." : "Already have an account? Login here."}
        </Typography>
      </Box>
    </form>
  )
}

export default Form