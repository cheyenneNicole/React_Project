import 'isomorphic-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';


export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const response = {
        "Iphone11": {
          "key": "Iphone11",
          "item": [
          {
          "name": "Iphone11",
          }
          ]
        },
        "IPhone11-max": {
          "key": "Iphone11-max",
          "item": [
          {
          "name": "IPhone11-max"
          }
          ]
          },
          "Iphone10-xr": {
            "key": "Iphone10-xr",
            "item": [
            {
            "name": "Iphone10-xr",
            }
            ]
          }
      };
      const items = response;

      if (active) {
        setOptions(Object.keys(items).map(key => items[key].item[0]));
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-demo"
      style={{ width: 150, height: 25}}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      getOptionSelected={(option, value) => option.name === value.name}
      getOptionLabel={option => option.name}
      options={options}
      //loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          fullWidth
          placeholder="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
    
  );
}
