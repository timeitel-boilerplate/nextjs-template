import { FC, useState } from 'react';
import DatePickerComponent from 'react-date-picker';

export const DatePicker: FC<Record<string, unknown>> = (): JSX.Element => {
  const [value, onChange] = useState(new Date());

  return <DatePickerComponent onChange={onChange} value={value} />;
};
