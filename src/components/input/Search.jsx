import React from "react";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { SearchWrapper, SearchIconWrapper, StyledInputBase } from "../index";

function Search() {
  return (
    <Box
      sx={{
        p: 3,
        width: "300px",
      }}
    >
      <SearchWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchWrapper>
    </Box>
  );
}

export default Search;
