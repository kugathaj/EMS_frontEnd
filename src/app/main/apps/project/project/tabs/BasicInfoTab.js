import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';

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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
];
const statusList = [
  'On progress',
  'Finished',
];
const priorityList = [
  'Urgent',
  'low',
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


function BasicInfoTab(props) {
  const methods = useFormContext();

  
  const { control, formState } = methods;


  const { errors } = formState;

  React.useEffect(()=>{console.log(formState)},[formState])

  const theme = useTheme();
  const [personName, setPersonName] = React.useState(["Select Project Manager"]);
  const [statusType, setStatusType] = React.useState(["Select Status"]);
  const [priorityType, setPriorityType] = React.useState(["Select Priority"]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            error={!!errors.name}
            required
            helperText={errors?.name?.message}
            label="Name"
            autoFocus
            id="name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="description"
            label="Description"
            type="text"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
          />
        )}
      />

      <div className="flex flex-column sm:flex-row w-full items-center space-x-16">
        <Controller
          name="start_date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              className="mt-8 mb-16 w-full"
              id="start_date"
              value={new Date(value)}
              onChange={onChange}
              selected={value}
              slotProps={{
                textField: {
                  label: 'Start Date',
                  variant: 'outlined',
                },
              }}
              // maxDate={end}
            />
          )}
        />

        <Controller
          name="end_date"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DatePicker
              className="mt-8 mb-16 w-full"
              id="end_date"
              value={new Date(value)}
              selected={value}
              onChange={onChange}
              slotProps={{
                textField: {
                  label: 'End',
                  variant: 'outlined',
                },
              }}
              // minDate={start}
            />
          )}
        />
      </div>

      <Controller
        name="Project Manager"
        control={control}
        render={({ field }) => (
          <>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              <MenuItem
                  key="Select Project Manager"
                  value="Select Project Manager"
                  style={getStyles(name, personName, theme)}
                >
                  Select Project Manager
              </MenuItem>
              {names.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, personName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </>
          
        )}
      />
      <Controller
        name="Status"
        control={control}
        render={({ field }) => (
          <>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={statusType}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              <MenuItem
                  key="Select Status"
                  value="Select Status"
                  style={getStyles(name, personName, theme)}
                >
                  Select Status
              </MenuItem>
              {statusList.map((status) => (
                <MenuItem
                  key={status}
                  value={status}
                  style={getStyles(name, personName, theme)}
                >
                  {status}
                </MenuItem>
              ))}
            </Select>
          </>
          
        )}
      />
      <Controller
        name="priority"
        control={control}
        render={({ field }) => (
          <>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={priorityType}
              onChange={handleChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              <MenuItem
                  key="Select Priority"
                  value="Select Priority"
                  style={getStyles(name, personName, theme)}
                >
                  Select Priority
              </MenuItem>
              {priorityList.map((priority) => (
                <MenuItem
                  key={priority}
                  value={priority}
                  style={getStyles(name, personName, theme)}
                >
                  {priority}
                </MenuItem>
              ))}
            </Select>
          </>
          
        )}
      />
      <Controller
        name="budject"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Budject"
            id="budject"
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            autoFocus
            fullWidth
          />
        )}
      />
      <Controller
        name="actual_cost"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="Actual Cost"
            id="actual_cost"
            InputProps={{
              startAdornment: <InputAdornment position="start">€</InputAdornment>,
            }}
            type="number"
            variant="outlined"
            autoFocus
            fullWidth
          />
        )}
      />
      <Controller
        name="comments"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            id="comments"
            label="Comments"
            type="text"
            multiline
            rows={5}
            variant="outlined"
            fullWidth
          />
        )}
      />
    </div>
  );
}

export default BasicInfoTab;
