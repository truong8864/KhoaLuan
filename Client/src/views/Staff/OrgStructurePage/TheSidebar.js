import React from "react";

import { Paper, FormControlLabel, Switch, Button } from "@material-ui/core";

import CachedIcon from "@material-ui/icons/Cached";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import OrgStructureTree from "./OrgStructureTree";

const TheSidebar = () => {
  return (
    <Paper
    // elevation={0}
    >
      <Button color="secondary" endIcon={<CachedIcon />} size="small">
        Nap lai
      </Button>

      <FormControlLabel
        control={
          <Switch
            checked={true}
            // onChange={toggleChecked}
          />
        }
        labelPlacement="end"
        label="Hien thi phong ban an"
      />
      <Autocomplete
        elevation={0}
        id="disabled-options-demo"
        options={timeSlots}
        getOptionDisabled={(option) =>
          option === timeSlots[0] || option === timeSlots[2]
        }
        fullWidth
        size="small"
        renderInput={(params) => (
          <TextField
            {...params}
            label="Tim kiem phong ban"
            variant="outlined"
          />
        )}
      />
      <OrgStructureTree />
    </Paper>
  );
};

export default TheSidebar;

const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? "0" : ""}${Math.floor(index / 2)}:${
      index % 2 === 0 ? "00" : "30"
    }`
);