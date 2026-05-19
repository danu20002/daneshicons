import React from 'react';

export const iconData = {
  "id": "ZirloNumber",
  "name": "ZirloNumber",
  "category": "JB",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.96 15.41 L 6.05 21.59 L 10.10 9.09 L 17.51 17.83 L 13.53 7.62 L 14.51 21.51 L 12.09 7.67 L 15.24 7.45"
      }
    ],
    [
      "circle",
      {
        "cx": "19.96",
        "cy": "15.41",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "6.05",
        "cy": "21.59",
        "r": "0.51"
      }
    ],
    [
      "circle",
      {
        "cx": "10.10",
        "cy": "9.09",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "17.51",
        "cy": "17.83",
        "r": "0.72"
      }
    ],
    [
      "circle",
      {
        "cx": "13.53",
        "cy": "7.62",
        "r": "1.06"
      }
    ],
    [
      "circle",
      {
        "cx": "14.51",
        "cy": "21.51",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "12.09",
        "cy": "7.67",
        "r": "0.73"
      }
    ],
    [
      "circle",
      {
        "cx": "15.24",
        "cy": "7.45",
        "r": "1.19"
      }
    ]
  ]
};

export const ZirloNumber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.96 15.41 L 6.05 21.59 L 10.10 9.09 L 17.51 17.83 L 13.53 7.62 L 14.51 21.51 L 12.09 7.67 L 15.24 7.45" />
      <circle cx="19.96" cy="15.41" r="0.58" />
      <circle cx="6.05" cy="21.59" r="0.51" />
      <circle cx="10.10" cy="9.09" r="0.58" />
      <circle cx="17.51" cy="17.83" r="0.72" />
      <circle cx="13.53" cy="7.62" r="1.06" />
      <circle cx="14.51" cy="21.51" r="0.97" />
      <circle cx="12.09" cy="7.67" r="0.73" />
      <circle cx="15.24" cy="7.45" r="1.19" />
      {children}
    </svg>
  );
});

export default ZirloNumber;
