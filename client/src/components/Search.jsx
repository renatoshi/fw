import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { useState } from "react";
import { Box, Card, Grid, Paper, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useEffect } from "react";
import axios from "axios";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import LaunchIcon from "@mui/icons-material/Launch";

const filter = createFilterOptions();

const Search = () => {
  const [value, setValue] = useState(null);
  const [open, toggleOpen] = useState(false);
  const [dialogValue, setDialogValue] = useState({
    name: "",
  });
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?name=middle")
      .then((res) => {
        setNames(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleClose = () => {
    setDialogValue({
      name: "",
    });
    toggleOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      name: dialogValue.name,
    });
    handleClose();
  };

  return (
    <Box>
        <Grid
          container
          justifyContent="center"
          direction="row"
          alignItems="center"
          spacing={3}
          paddingTop={8}
          gap={1}
        >
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              if (typeof newValue === "string") {
                // timeout to avoid instant validation of the dialog's form.
                setTimeout(() => {
                  toggleOpen(true);
                  setDialogValue({
                    name: newValue,
                  });
                });
              } else if (newValue && newValue.inputValue) {
                toggleOpen(true);
                setDialogValue({
                  name: newValue.inputValue,
                });
              } else {
                setValue(newValue);
              }
            }}
            filterOptions={(options, params) => {
              const filtered = filter(options, params);

              if (params.inputValue !== "") {
                filtered.push({
                  inputValue: params.inputValue,
                  name: `Add "${params.inputValue}"`,
                });
              }

              return filtered;
            }}
            id="free-solo-dialog-demo"
            options={universities}
            getOptionLabel={(option) => {
              // e.g value selected with enter, right from the input
              if (typeof option === "string") {
                return option;
              }
              if (option.inputValue) {
                return option.inputValue;
              }
              return option.name;
            }}
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            renderOption={(props, option) => <li {...props}>{option.name}</li>}
            sx={{ width: 600 }}
            freeSolo
            renderInput={(params) => (
              <TextField {...params} label="University name" />
            )}
          />
          <Button variant="contained" sx={{ width: 30, height: 55 }}>
            <SearchIcon />
          </Button>
        </Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            paddingTop={8}
            gap={4}
            flexDirection="column"
          >
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[0].name}</strong>{" "}
                  {universities[0].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[1].name}</strong>{" "}
                  {universities[1].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[2].name}</strong>{" "}
                  {universities[2].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[3].name}</strong>{" "}
                  {universities[3].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[4].name}</strong>{" "}
                  {universities[4].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[5].name}</strong>{" "}
                  {universities[5].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[6].name}</strong>{" "}
                  {universities[6].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[7].name}</strong>{" "}
                  {universities[7].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[8].name}</strong>{" "}
                  {universities[8].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>
            <Card
              sx={{
                width: 675,
                height: 100,
              }}
            >
              <Grid item xs={12} marginTop={2}>
                <Typography display="flex" justifyContent="space-evenly">
                  <strong>{universities[9].name}</strong>{" "}
                  {universities[9].country} <StarBorderIcon />
                  <LaunchIcon />
                </Typography>
                <Typography></Typography>
              </Grid>
              <Grid item xs={12} marginTop={2} marginLeft={6}>
                <Typography>Click here to see the details</Typography>
              </Grid>
            </Card>  
          </Grid>
        </Box>
    </Box>
  );
};

const universities = [
  {
    country: "United States",
    domains: ["mtsu.edu"],
    alpha_two_code: "US",
    "state-province": null,
    name: "Middle Tennessee State University",
    web_pages: ["http://www.mtsu.edu/"],
  },
  {
    country: "United States",
    domains: ["mga.edu"],
    alpha_two_code: "US",
    "state-province": null,
    name: "Middle Georgia State College",
    web_pages: ["http://www.mga.edu/"],
  },
  {
    country: "Turkey",
    domains: ["metu.edu.tr"],
    alpha_two_code: "TR",
    "state-province": null,
    name: "Middle East Technical University",
    web_pages: ["http://www.metu.edu.tr/"],
  },
  {
    country: "Jordan",
    domains: ["meu.edu.jo"],
    alpha_two_code: "JO",
    "state-province": null,
    name: "Middle East University",
    web_pages: ["http://www.meu.edu.jo/"],
  },
  {
    country: "Kuwait",
    domains: ["aum.edu.kw"],
    alpha_two_code: "KW",
    "state-province": null,
    name: "American University of Middle East",
    web_pages: ["http://www.aum.edu.kw/"],
  },
  {
    country: "United States",
    domains: ["middlebury.edu"],
    alpha_two_code: "US",
    "state-province": null,
    name: "Middlebury College",
    web_pages: ["http://www.middlebury.edu/"],
  },
  {
    country: "United Kingdom",
    domains: ["middlesbro.ac.uk", "mbro.ac.uk"],
    alpha_two_code: "GB",
    "state-province": null,
    name: "Middlesbrough College",
    web_pages: ["https://www.mbro.ac.uk/"],
  },
  {
    country: "United States",
    domains: ["middlesex.mass.edu"],
    alpha_two_code: "US",
    "state-province": null,
    name: "Middlesex Community College",
    web_pages: ["http://www.middlesex.mass.edu"],
  },
  {
    country: "United States",
    domains: ["middlesexcc.edu"],
    alpha_two_code: "US",
    "state-province": null,
    name: "Middlesex County College",
    web_pages: ["http://www.middlesexcc.edu"],
  },
  {
    country: "United Kingdom",
    domains: ["mdx.ac.uk"],
    alpha_two_code: "GB",
    "state-province": null,
    name: "Middlesex University",
    web_pages: ["http://www.mdx.ac.uk/"],
  },
];

export default Search;
