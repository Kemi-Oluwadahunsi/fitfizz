import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/hero-image7.jpeg"
const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "8rem", xs: "4.4rem" }, ml: { sm: "3rem" } }}
      position={"relative"}
      p="1.25rem"
    //   className='border'
    >
      <Typography className="text-[#ff2625] font-semibold text-[1.5rem]">
        Fitness Club
      </Typography>

      <Typography
        className="font-bold"
        sx={{ fontSize: { lg: "2.75rem", xs: "2.5rem" } }} mb={'1.4rem'} mt={'1.9rem'}
      >
        Sweat, Smile <br /> and Repeat
      </Typography>

      <Typography fontSize={"1.4rem"} lineHeight={"2.2rem"} marginBottom={4}>
        Check out the most effective exercises
      </Typography>

      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: '#ff2625', padding: '10px'}}>
        Explore exercises
      </Button>
        <Typography fontWeight={600} color={'#ff2625'} sx={{ opacity: 0.1, display: { lg: "block", xs: 'none'}}} fontSize={'200px'}>
            Exercise
        </Typography>
      <img src={HeroBannerImage} alt="heroImage" className="hero-banner-img rounded-bl-[12rem] absolute right-[4px] top-0 w-[700px] h-[900px] mt-[-330px] hidden lg:block" />
    </Box>
  );
};

export default HeroBanner;
