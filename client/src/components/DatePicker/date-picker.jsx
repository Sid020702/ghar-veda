import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

const Date = ({ setDate }) => {
    const [value, setValue] = useState(null)
    return (
        <div className="w-full p-3 my-2 bg-[#FFBC99] rounded-md flex items-center">
            <span>&#128197;</span>
            <div className="flex flex-col mx-5">
                <span className="text-left text-[#6F767E] text-sm sm:text-md md:text-lg lg:text-xl">DATE</span>
                <span className="text-left font-semibold text-lg sm:text-xl lg:text-2xl">Select your Date</span>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={value}
                        onChange={(newValue) => {
                            setValue(newValue)
                            let date = {
                                day: newValue["$W"],
                                date: newValue["$D"],
                                month: newValue["$M"],
                                year: newValue["$y"]
                            }
                            setDate(date)
                        }}

                    />
                </LocalizationProvider>
            </div>
        </div>
    );
}
export default Date