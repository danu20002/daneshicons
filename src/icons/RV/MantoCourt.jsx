import React from 'react';

export const iconData = {
  "id": "MantoCourt",
  "name": "MantoCourt",
  "category": "RV",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.77 8.60 L 5.24 14.33 L 20.68 10.52 L 6.73 20.08 L 18.13 6.52 L 18.69 12.12 L 3.01 4.69"
      }
    ],
    [
      "circle",
      {
        "cx": "14.77",
        "cy": "8.60",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "5.24",
        "cy": "14.33",
        "r": "1.21"
      }
    ],
    [
      "circle",
      {
        "cx": "20.68",
        "cy": "10.52",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "6.73",
        "cy": "20.08",
        "r": "0.87"
      }
    ],
    [
      "circle",
      {
        "cx": "18.13",
        "cy": "6.52",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "18.69",
        "cy": "12.12",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "3.01",
        "cy": "4.69",
        "r": "1.21"
      }
    ]
  ]
};

export const MantoCourt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.77 8.60 L 5.24 14.33 L 20.68 10.52 L 6.73 20.08 L 18.13 6.52 L 18.69 12.12 L 3.01 4.69" />
      <circle cx="14.77" cy="8.60" r="1.22" />
      <circle cx="5.24" cy="14.33" r="1.21" />
      <circle cx="20.68" cy="10.52" r="0.55" />
      <circle cx="6.73" cy="20.08" r="0.87" />
      <circle cx="18.13" cy="6.52" r="1.01" />
      <circle cx="18.69" cy="12.12" r="1.08" />
      <circle cx="3.01" cy="4.69" r="1.21" />
      {children}
    </svg>
  );
});

export default MantoCourt;
