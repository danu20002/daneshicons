import React from 'react';

export const iconData = {
  "id": "VirgolaShelf",
  "name": "VirgolaShelf",
  "category": "YK",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.34 21.12 L 11.14 11.69 L 4.76 15.05 L 16.03 20.94 L 17.01 8.23 L 4.17 7.40 L 2.41 20.36 L 13.56 16.95"
      }
    ],
    [
      "circle",
      {
        "cx": "11.34",
        "cy": "21.12",
        "r": "0.93"
      }
    ],
    [
      "circle",
      {
        "cx": "11.14",
        "cy": "11.69",
        "r": "1.31"
      }
    ],
    [
      "circle",
      {
        "cx": "4.76",
        "cy": "15.05",
        "r": "0.56"
      }
    ],
    [
      "circle",
      {
        "cx": "16.03",
        "cy": "20.94",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "17.01",
        "cy": "8.23",
        "r": "1.27"
      }
    ],
    [
      "circle",
      {
        "cx": "4.17",
        "cy": "7.40",
        "r": "0.52"
      }
    ],
    [
      "circle",
      {
        "cx": "2.41",
        "cy": "20.36",
        "r": "0.53"
      }
    ],
    [
      "circle",
      {
        "cx": "13.56",
        "cy": "16.95",
        "r": "1.26"
      }
    ]
  ]
};

export const VirgolaShelf = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.34 21.12 L 11.14 11.69 L 4.76 15.05 L 16.03 20.94 L 17.01 8.23 L 4.17 7.40 L 2.41 20.36 L 13.56 16.95" />
      <circle cx="11.34" cy="21.12" r="0.93" />
      <circle cx="11.14" cy="11.69" r="1.31" />
      <circle cx="4.76" cy="15.05" r="0.56" />
      <circle cx="16.03" cy="20.94" r="0.51" />
      <circle cx="17.01" cy="8.23" r="1.27" />
      <circle cx="4.17" cy="7.40" r="0.52" />
      <circle cx="2.41" cy="20.36" r="0.53" />
      <circle cx="13.56" cy="16.95" r="1.26" />
      {children}
    </svg>
  );
});

export default VirgolaShelf;
