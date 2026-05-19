import React from 'react';

export const iconData = {
  "id": "VolumeSoak",
  "name": "VolumeSoak",
  "category": "CM",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.24 2.12 L 10.95 4.16 L 14.05 16.09 L 5.10 18.95 L 15.79 19.00 L 6.00 7.20 L 3.26 13.46"
      }
    ],
    [
      "circle",
      {
        "cx": "11.24",
        "cy": "2.12",
        "r": "1.50"
      }
    ],
    [
      "circle",
      {
        "cx": "10.95",
        "cy": "4.16",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "14.05",
        "cy": "16.09",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "5.10",
        "cy": "18.95",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "15.79",
        "cy": "19.00",
        "r": "1.23"
      }
    ],
    [
      "circle",
      {
        "cx": "6.00",
        "cy": "7.20",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "3.26",
        "cy": "13.46",
        "r": "0.92"
      }
    ]
  ]
};

export const VolumeSoak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.24 2.12 L 10.95 4.16 L 14.05 16.09 L 5.10 18.95 L 15.79 19.00 L 6.00 7.20 L 3.26 13.46" />
      <circle cx="11.24" cy="2.12" r="1.50" />
      <circle cx="10.95" cy="4.16" r="0.96" />
      <circle cx="14.05" cy="16.09" r="0.78" />
      <circle cx="5.10" cy="18.95" r="0.52" />
      <circle cx="15.79" cy="19.00" r="1.23" />
      <circle cx="6.00" cy="7.20" r="0.96" />
      <circle cx="3.26" cy="13.46" r="0.92" />
      {children}
    </svg>
  );
});

export default VolumeSoak;
