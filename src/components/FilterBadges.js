import React from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import Chip from '@mui/joy/Chip';

export default function FilterBadges({ data, label, filterState, setFilterState, align ='flex-start'}) {

  return (
    <div className=''>
      <p className='text-md font-semibold font-gordita mb-4'>{label}</p>
      <Box
        role="group"
        aria-labelledby="fav-movie"
        sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: align  }}
      >
        {
          data.map((key) => {
            const checked = filterState.includes(key);
            return (
              <Chip
                key={key}
                variant={checked ? 'soft' : 'plain'}
                color={checked ? 'primary' : 'neutral'}
                onChange={(event) => {
                  setFilterState((checked) =>
                    !event.target.checked && checked
                      ? filterState.filter((n) => n !== key)
                      : [...filterState, key],
                  );
                }}
                startDecorator={
                  checked && <CheckIcon sx={{ zIndex: 1, pointerEvents: 'none' }} />
                }
              >
                <Checkbox
                  variant="outlined"
                  key={key}
                  color={checked ? 'primary' : 'neutral'}
                  disableIcon
                  overlay
                  label={key}
                  checked={checked}
                />
              </Chip>
            )
          })
        }
      </Box>
    </div>
  )
}