import React, { useState } from 'react';

type Props = {
    options: string[];
    variants: string[]
};

const SelectComponent: React.FC<Props> = ({ options, variants }) => {
    const [selectedValue, setSelectedValue] = useState(options[0]);
    const key = variants[0]

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
        const val = `${event.target.value}`;
        // setter
        localStorage.setItem(key, val);
    };

    return (
        <div>
            <label htmlFor="select skill Level" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Select Level of Skill A
            </label>
            <select
                id="select"
                size={7}
                value={selectedValue}
                className="bg-purple-50 border border-purple-800 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-purple-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option
                        key={option}
                        value={option}
                        className={`${
                            option === selectedValue ? 'bg-purple-800 text-gray-100' : 'text-gray-900 dark:text-white'
                        }`}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectComponent;