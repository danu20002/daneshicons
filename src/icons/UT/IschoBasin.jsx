import React from 'react';

export const iconData = {
  "id": "IschoBasin",
  "name": "IschoBasin",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.97 3.88 L 15.58 14.63 L 21.22 8.44 L 10.37 20.45 L 6.67 3.09"
      }
    ],
    [
      "circle",
      {
        "cx": "21.97",
        "cy": "3.88",
        "r": "1.36"
      }
    ],
    [
      "circle",
      {
        "cx": "15.58",
        "cy": "14.63",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "21.22",
        "cy": "8.44",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "10.37",
        "cy": "20.45",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "6.67",
        "cy": "3.09",
        "r": "0.67"
      }
    ]
  ]
};

export const IschoBasin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.97 3.88 L 15.58 14.63 L 21.22 8.44 L 10.37 20.45 L 6.67 3.09" />
      <circle cx="21.97" cy="3.88" r="1.36" />
      <circle cx="15.58" cy="14.63" r="1.08" />
      <circle cx="21.22" cy="8.44" r="0.94" />
      <circle cx="10.37" cy="20.45" r="0.76" />
      <circle cx="6.67" cy="3.09" r="0.67" />
      {children}
    </svg>
  );
});

export default IschoBasin;
