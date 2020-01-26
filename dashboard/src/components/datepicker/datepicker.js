import React from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';

const dateFormat = 'DD/MM/YYYY HH:mm';
const { RangePicker } = DatePicker;

const DatePickerComponent = props => {

    const onCalendarChange = (dates) => {
        if (!dates || dates.length < 2){
            return;
        }

        const start = dates[0].toDate();
        const end = dates[1].toDate();

        props.onCalendarChange(start, end);
    }

    const onChange = (dates) => {
        if (!dates.length){
            props.onCalendarChange(null, null);
        }
    }

    return (
        <RangePicker showTime format={dateFormat} onCalendarChange={onCalendarChange} onChange={onChange} onOk={onCalendarChange} />
    );
}

export default DatePickerComponent;