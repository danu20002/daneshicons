import React from 'react';

export const iconData = {
  "id": "TrattoVariable",
  "name": "TrattoVariable",
  "category": "CX",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.61 12.00 a 2.39 2.39 0 1 0 4.79 0 a 2.39 2.39 0 1 0 -4.79 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.06 12.00 a 3.94 3.94 0 1 0 7.87 0 a 3.94 3.94 0 1 0 -7.87 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 12.00 a 5.54 5.54 0 1 0 11.09 0 a 5.54 5.54 0 1 0 -11.09 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.93 12.00 a 7.07 7.07 0 1 0 14.13 0 a 7.07 7.07 0 1 0 -14.13 0",
        "stroke-dasharray": "5 1"
      }
    ],
    [
      "path",
      {
        "d": "M 3.32 12.00 a 8.68 8.68 0 1 0 17.37 0 a 8.68 8.68 0 1 0 -17.37 0"
      }
    ]
  ]
};

export const TrattoVariable = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      <path d="M 9.61 12.00 a 2.39 2.39 0 1 0 4.79 0 a 2.39 2.39 0 1 0 -4.79 0" />
      <path d="M 8.06 12.00 a 3.94 3.94 0 1 0 7.87 0 a 3.94 3.94 0 1 0 -7.87 0" />
      <path d="M 6.46 12.00 a 5.54 5.54 0 1 0 11.09 0 a 5.54 5.54 0 1 0 -11.09 0" />
      <path d="M 4.93 12.00 a 7.07 7.07 0 1 0 14.13 0 a 7.07 7.07 0 1 0 -14.13 0" stroke-dasharray="5 1" />
      <path d="M 3.32 12.00 a 8.68 8.68 0 1 0 17.37 0 a 8.68 8.68 0 1 0 -17.37 0" />
      {children}
    </svg>
  );
});

export default TrattoVariable;
