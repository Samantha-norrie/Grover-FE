import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, solutionValue, theme) {
  return {
    fontWeight:
      solutionValue.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip(props) {
  const {solutionValue, setSolutionValue, level, totalValues} = props;
  const theme = useTheme();
  // const [solutionValue, setSolutionValue] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSolutionValue(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log("solution values", solutionValue);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="solution-select-label">Solution Values</InputLabel>
        <Select
          labelId="solution-select-label"
          id="solution-select"
          multiple
          required
          disabled={props.level===1}
          value={solutionValue}
          onChange={handleChange}
          input={<OutlinedInput id="solution-select" label="Solution Values" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {(totalValues).map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, solutionValue, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}