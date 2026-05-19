import React from 'react';

export const iconData = {
  "id": "TrattoGreen",
  "name": "TrattoGreen",
  "category": "TH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.61 7.63 L 10.31 16.17 L 13.23 4.35 L 3.97 15.30 L 17.14 11.09 L 20.26 8.75 L 12.05 3.74 L 20.61 14.71"
      }
    ],
    [
      "circle",
      {
        "cx": "3.61",
        "cy": "7.63",
        "r": "0.50"
      }
    ],
    [
      "circle",
      {
        "cx": "10.31",
        "cy": "16.17",
        "r": "1.48"
      }
    ],
    [
      "circle",
      {
        "cx": "13.23",
        "cy": "4.35",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "3.97",
        "cy": "15.30",
        "r": "0.61"
      }
    ],
    [
      "circle",
      {
        "cx": "17.14",
        "cy": "11.09",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "20.26",
        "cy": "8.75",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "12.05",
        "cy": "3.74",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "20.61",
        "cy": "14.71",
        "r": "0.69"
      }
    ]
  ]
};

export const TrattoGreen = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.61 7.63 L 10.31 16.17 L 13.23 4.35 L 3.97 15.30 L 17.14 11.09 L 20.26 8.75 L 12.05 3.74 L 20.61 14.71" />
      <circle cx="3.61" cy="7.63" r="0.50" />
      <circle cx="10.31" cy="16.17" r="1.48" />
      <circle cx="13.23" cy="4.35" r="0.58" />
      <circle cx="3.97" cy="15.30" r="0.61" />
      <circle cx="17.14" cy="11.09" r="1.05" />
      <circle cx="20.26" cy="8.75" r="1.46" />
      <circle cx="12.05" cy="3.74" r="1.16" />
      <circle cx="20.61" cy="14.71" r="0.69" />
      {children}
    </svg>
  );
});

export default TrattoGreen;
