import React from 'react';

export const iconData = {
  "id": "PentaCliff",
  "name": "PentaCliff",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.10 11.53 L 17.59 19.94 L 7.66 3.86 L 15.96 10.73 L 13.18 12.46"
      }
    ],
    [
      "circle",
      {
        "cx": "10.10",
        "cy": "11.53",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "17.59",
        "cy": "19.94",
        "r": "1.16"
      }
    ],
    [
      "circle",
      {
        "cx": "7.66",
        "cy": "3.86",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "15.96",
        "cy": "10.73",
        "r": "1.32"
      }
    ],
    [
      "circle",
      {
        "cx": "13.18",
        "cy": "12.46",
        "r": "0.58"
      }
    ]
  ]
};

export const PentaCliff = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.10 11.53 L 17.59 19.94 L 7.66 3.86 L 15.96 10.73 L 13.18 12.46" />
      <circle cx="10.10" cy="11.53" r="0.83" />
      <circle cx="17.59" cy="19.94" r="1.16" />
      <circle cx="7.66" cy="3.86" r="0.76" />
      <circle cx="15.96" cy="10.73" r="1.32" />
      <circle cx="13.18" cy="12.46" r="0.58" />
      {children}
    </svg>
  );
});

export default PentaCliff;
