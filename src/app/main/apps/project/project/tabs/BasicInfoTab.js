import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
import { useTheme } from '@mui/material/styles';
import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';


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

const projectManagers = [
  {
    name:  'Oliver Hansen',
    id: 1
  },
  {
    name:  'Van Henry',
    id: 2
  },
  {
    name:  'April Tucker',
    id: 3
  },
  {
    name:  'Ralph Hubbard',
    id: 4
  }
];

const statusList = [
  'On progress',
  'Finished',
];

const priorityList = [
  'Urgent',
  'Low',
];



function BasicInfoTab(props) {
  const methods = useFormContext();
  const routeParams = useParams();
  const { projectId } = routeParams;
  const { control, formState } = methods;


  const { errors } = formState;

  React.useEffect(()=>{console.log(formState)},[formState])

  const theme = useTheme();

  return (
    <div>

      { projectId != "new" ? 
      
        (
          <Controller
          name="id"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              disabled
              className="mt-8 mb-16"
              // error={!!errors.name}
              required
              // helperText={errors?.name?.message}
              label="Id"
              autoFocus
              id="id"
              variant="outlined"
              fullWidth
            />
          )}
        />
        ) : ''
      }

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
              views={["year", "month", "day"]}
              onChange={(newValue)=>{
                const formattedDate = format(newValue, 'yyyy-MM-dd'); // Format the date
                onChange(formattedDate); // Call onChange with the formatted date
              }}
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
              onChange={(newValue)=>{
                const formattedDate = format(newValue, 'yyyy-MM-dd'); // Format the date
                onChange(formattedDate); // Call onChange with the formatted date
              }}
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
        name="project_manager_id"
        control={control}
        render={({ field: {value, onChange} }) => (
          <>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={value != "" ? value : "Select Project Manager"}
              onChange={onChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              <MenuItem
                  key="Select Project Manager"
                  value="Select Project Manager"
                >
                  Select Project Manager
              </MenuItem>
              {projectManagers.map((projectManager) => (
                <MenuItem
                  key={projectManager.id}
                  value={projectManager.id}
                >
                  {projectManager.name}
                </MenuItem>
              ))}
            </Select>
          </>
          
        )}
      />
      <Controller
        name="status"
        control={control}
        render={({ field : {value, onChange} }) => (
          <>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={value != "" ? value : "Select Status"}
              onChange={onChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              <MenuItem
                  key="Select Status"
                  value="Select Status"
                >
                  Select Status
              </MenuItem>
              {statusList.map((status) => (
                <MenuItem
                  key={status}
                  value={status}
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
        render={({ field : {onChange, value} }) => (
          <>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              // multiple
              value={value != "" ? value : "Select Priority"}
              onChange={onChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              <MenuItem
                  key="Select Priority"
                  value="Select Priority"
                >
                  Select Priority
              </MenuItem>
              {priorityList.map((priority) => (
                <MenuItem
                  key={priority}
                  value={priority}
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
