import React from 'react';

export const iconData = {
  "id": "TrattoSuck",
  "name": "TrattoSuck",
  "category": "IT",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.56 12.00 a 2.44 2.44 0 1 0 4.88 0 a 2.44 2.44 0 1 0 -4.88 0"
      }
    ],
    [
      "path",
      {
        "d": "M 8.39 12.00 a 3.61 3.61 0 1 0 7.21 0 a 3.61 3.61 0 1 0 -7.21 0",
        "stroke-dasharray": "4 3"
      }
    ],
    [
      "path",
      {
        "d": "M 6.39 12.00 a 5.61 5.61 0 1 0 11.22 0 a 5.61 5.61 0 1 0 -11.22 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.78 12.00 a 7.22 7.22 0 1 0 14.43 0 a 7.22 7.22 0 1 0 -14.43 0"
      }
    ],
    [
      "path",
      {
        "d": "M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0"
      }
    ]
  ]
};

export const TrattoSuck = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.56 12.00 a 2.44 2.44 0 1 0 4.88 0 a 2.44 2.44 0 1 0 -4.88 0" />
      <path d="M 8.39 12.00 a 3.61 3.61 0 1 0 7.21 0 a 3.61 3.61 0 1 0 -7.21 0" stroke-dasharray="4 3" />
      <path d="M 6.39 12.00 a 5.61 5.61 0 1 0 11.22 0 a 5.61 5.61 0 1 0 -11.22 0" />
      <path d="M 4.78 12.00 a 7.22 7.22 0 1 0 14.43 0 a 7.22 7.22 0 1 0 -14.43 0" />
      <path d="M 3.22 12.00 a 8.78 8.78 0 1 0 17.56 0 a 8.78 8.78 0 1 0 -17.56 0" />
      {children}
    </svg>
  );
});

export default TrattoSuck;
