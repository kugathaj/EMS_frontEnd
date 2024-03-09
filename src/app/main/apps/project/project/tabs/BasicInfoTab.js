import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

function BasicInfoTab(props) {
  const methods = useFormContext();

  
  const { control, formState } = methods;


  const { errors } = formState;

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
          name="start"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              className="mt-8 mb-16 w-full"
              value={new Date(value)}
              onChange={onChange}
              slotProps={{
                textField: {
                  label: 'Start',
                  variant: 'outlined',
                },
              }}
              // maxDate={end}
            />
          )}
        />

        <Controller
          name="end"
          control={control}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <DateTimePicker
              className="mt-8 mb-16 w-full"
              value={new Date(value)}
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
