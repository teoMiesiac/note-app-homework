import DatePicker from 'react-datepicker'
import { Input } from '@chakra-ui/react'
import 'react-datepicker/dist/react-datepicker.css'
import './DateTimePicker.styles.css'

interface Props {
  startDate: Date
  onChange: (date: Date) => void
}

const DateTimePicker = ({ startDate, onChange }: Props): JSX.Element => (
  <DatePicker
    showTimeSelect
    selected={startDate}
    onChange={onChange}
    dateFormat="d MMMM, yyyy h:mm aa"
    timeFormat="HH:mm"
    required={true}
    minDate={startDate}
    id="expireDate"
    calendarClassName="customCalendar"
    customInput={<Input required focusBorderColor="teal.500" id="expireDate" />}
  />
)

export default DateTimePicker
