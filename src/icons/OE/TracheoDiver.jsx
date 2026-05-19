import React from 'react';

export const iconData = {
  "id": "TracheoDiver",
  "name": "TracheoDiver",
  "category": "OE",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.94 3.71 L 21.05 4.53 L 18.27 12.54 L 10.44 6.04 L 16.90 7.63 L 20.95 21.50"
      }
    ],
    [
      "circle",
      {
        "cx": "17.94",
        "cy": "3.71",
        "r": "1.22"
      }
    ],
    [
      "circle",
      {
        "cx": "21.05",
        "cy": "4.53",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "18.27",
        "cy": "12.54",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "10.44",
        "cy": "6.04",
        "r": "0.55"
      }
    ],
    [
      "circle",
      {
        "cx": "16.90",
        "cy": "7.63",
        "r": "1.05"
      }
    ],
    [
      "circle",
      {
        "cx": "20.95",
        "cy": "21.50",
        "r": "1.44"
      }
    ]
  ]
};

export const TracheoDiver = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.94 3.71 L 21.05 4.53 L 18.27 12.54 L 10.44 6.04 L 16.90 7.63 L 20.95 21.50" />
      <circle cx="17.94" cy="3.71" r="1.22" />
      <circle cx="21.05" cy="4.53" r="0.75" />
      <circle cx="18.27" cy="12.54" r="0.96" />
      <circle cx="10.44" cy="6.04" r="0.55" />
      <circle cx="16.90" cy="7.63" r="1.05" />
      <circle cx="20.95" cy="21.50" r="1.44" />
      {children}
    </svg>
  );
});

export default TracheoDiver;
