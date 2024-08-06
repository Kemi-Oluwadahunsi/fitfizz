import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";
const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
        const bodyPartsdata = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back?limit=10&offset=0", exerciseOptions
        );

        setBodyParts(['all', ...bodyPartsdata])
    }
    fetchExercisesData();
  })

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        // "https://work-out-api1.p.rapidapi.com/search?Muscles=biceps",
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      console.log(exercisesData)

      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLocaleLowerCase().includes(search) ||
          exercise.equipment.toLocaleLowerCase().includes(search) ||
          exercise.bodyPart.toLocaleLowerCase().includes(search) ||
          exercise.tartget.toLocaleLowerCase().includes(search)
      );
      setSearch('')
      setExercises(searchedExercises)
    }
  };
  return (
    <Stack alignItems={"center"} mt="37px" justifyContent={"center"} p={"20px"}>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "2.75rem", xs: "1.9rem" } }}
        mb={"50px"}
        textAlign={"center"}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position={"relative"} mb="4.5rem">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height={"4.75rem"}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "11rem", xs: "5rem" },
            fontSize: { lg: "1.25rem", xs: "0.95rem" },
            height: "3.5rem",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
          <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
