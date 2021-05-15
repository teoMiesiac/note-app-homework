import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

interface Props {
  startDate: any
  onChange: (date: Date) => void
}

const DateTimePicker = ({ startDate, onChange }: Props): JSX.Element => (
  <DatePicker
    showTimeSelect
    selected={startDate}
    onChange={onChange}
    dateFormat="d MMMM, yyyy h:mm aa"
    timeFormat="HH:mm"
  />
)

export default DateTimePicker
