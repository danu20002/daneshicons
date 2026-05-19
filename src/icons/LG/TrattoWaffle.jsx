import React from 'react';

export const iconData = {
  "id": "TrattoWaffle",
  "name": "TrattoWaffle",
  "category": "LG",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.93 14.08 L 2.96 15.04 L 18.09 2.52 L 15.87 13.05 L 18.22 2.87"
      }
    ],
    [
      "circle",
      {
        "cx": "5.93",
        "cy": "14.08",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "2.96",
        "cy": "15.04",
        "r": "1.40"
      }
    ],
    [
      "circle",
      {
        "cx": "18.09",
        "cy": "2.52",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "15.87",
        "cy": "13.05",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "18.22",
        "cy": "2.87",
        "r": "0.88"
      }
    ]
  ]
};

export const TrattoWaffle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.93 14.08 L 2.96 15.04 L 18.09 2.52 L 15.87 13.05 L 18.22 2.87" />
      <circle cx="5.93" cy="14.08" r="0.93" />
      <circle cx="2.96" cy="15.04" r="1.40" />
      <circle cx="18.09" cy="2.52" r="1.12" />
      <circle cx="15.87" cy="13.05" r="0.51" />
      <circle cx="18.22" cy="2.87" r="0.88" />
      {children}
    </svg>
  );
});

export default TrattoWaffle;
