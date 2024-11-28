import Chip, { ChipProps } from '@mui/material/Chip';

type Props = {
  label: string;
  chipProps?: ChipProps;
};

export function Chips({ label, chipProps }: Props) {
  return (
    <Chip
      {...chipProps}
      sx={{
        backgroundColor: '#7B1FA2',
        color: '#fff',
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 700,
        ...chipProps?.sx,
      }}
      label={label}
    />
  );
}
