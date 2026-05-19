import React from 'react';

export const iconData = {
  "id": "TsunamChannel",
  "name": "TsunamChannel",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.79 13.15 L 21.96 15.54 L 6.20 3.10 L 20.16 11.27 L 8.80 2.21 L 7.28 7.64 L 13.63 8.04 L 15.58 14.36"
      }
    ],
    [
      "circle",
      {
        "cx": "7.79",
        "cy": "13.15",
        "r": "1.01"
      }
    ],
    [
      "circle",
      {
        "cx": "21.96",
        "cy": "15.54",
        "r": "0.69"
      }
    ],
    [
      "circle",
      {
        "cx": "6.20",
        "cy": "3.10",
        "r": "0.75"
      }
    ],
    [
      "circle",
      {
        "cx": "20.16",
        "cy": "11.27",
        "r": "0.94"
      }
    ],
    [
      "circle",
      {
        "cx": "8.80",
        "cy": "2.21",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "7.28",
        "cy": "7.64",
        "r": "1.20"
      }
    ],
    [
      "circle",
      {
        "cx": "13.63",
        "cy": "8.04",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "15.58",
        "cy": "14.36",
        "r": "1.05"
      }
    ]
  ]
};

export const TsunamChannel = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.79 13.15 L 21.96 15.54 L 6.20 3.10 L 20.16 11.27 L 8.80 2.21 L 7.28 7.64 L 13.63 8.04 L 15.58 14.36" />
      <circle cx="7.79" cy="13.15" r="1.01" />
      <circle cx="21.96" cy="15.54" r="0.69" />
      <circle cx="6.20" cy="3.10" r="0.75" />
      <circle cx="20.16" cy="11.27" r="0.94" />
      <circle cx="8.80" cy="2.21" r="1.39" />
      <circle cx="7.28" cy="7.64" r="1.20" />
      <circle cx="13.63" cy="8.04" r="1.12" />
      <circle cx="15.58" cy="14.36" r="1.05" />
      {children}
    </svg>
  );
});

export default TsunamChannel;
