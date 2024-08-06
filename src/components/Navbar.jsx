import { Link } from "react-router-dom"
import { Stack } from "@mui/material"
import Logo from "../assets/images/Logo.png"
const Navbar = () => {
  return (
    <Stack direction={'row'}
    justifyContent={'space-around'}
    sx={{gap: {sm: "20rem", xs: "2.5rem"}, mt: { sm: "2rem", xs: "1.25rem"}, justifyContent: 'none'}} px='1.25rem'>
        <Link to={`/`}>
            <img src={Logo} alt="logo" className="w-[3rem] h-[3rem] mx-[1.25rem] " />
        </Link>

        <Stack
            direction={'row'}
            gap={'2.5rem'}
            fontSize={'1.5rem'}
            alignItems={'flex-end'}
        > 
            <Link to={'/'} className="text-[#3a1212] border-b-[3px] border-[#ff2625]">Home</Link>
            <a href="#exercises" className="text-[#3a1212]">Exercises</a>
        </Stack>
    </Stack>
  )
}

export default Navbar