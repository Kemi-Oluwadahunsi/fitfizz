import { Stack } from "@mui/material";
import Icon from "../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems={"center"}
      justifyContent={"center"}
      className="bodyPart-card"
      sx={
        bodyPart === item
          ? {
              borderTop: "4px solid #ff2625",
              backgroundColor: "#fff",
              borderBottomLeftRadius: "20px",
              width: "270px",
              height: "280px",
              cursor: "pointer",
              gap: "47px",
            }
          : ""
      }
    >
      <img src={Icon} alt="dumbbell" className="w-[40px] h-[40px]" />
    </Stack>
  );
};

export default BodyPart;
