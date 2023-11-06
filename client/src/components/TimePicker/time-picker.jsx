import React, { useState } from 'react';

import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const Time = ({ setTime }) => {
    const [value, setValue] = useState(null)
    return (
        <div className="w-full my-2 p-3 bg-[#B5E4CA] rounded-md flex items-center">
            <span>&#x1F553;</span>
            <div className="flex flex-col mx-5">
                <span className="text-left text-[#6F767E] text-sm sm:text-md md:text-lg lg:text-xl">TIME</span>
                <span className="text-left font-semibold text-lg sm:text-xl lg:text-2xl">Select your Time</span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue)
                                let time = {
                                    hr: newValue["$H"],
                                    min: newValue["$m"],
                                    sec: newValue["$s"]
                                }
                                setTime(time)
                            }}
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
        </div>
    );
}

export default Time