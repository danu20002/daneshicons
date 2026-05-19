import React from 'react';

export const iconData = {
  "id": "UnivocoHate",
  "name": "UnivocoHate",
  "category": "ER",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.08 7.40 L 9.23 17.73 L 7.13 16.75 L 20.86 9.54 L 9.95 14.42 L 17.43 5.29 L 9.22 11.95"
      }
    ],
    [
      "circle",
      {
        "cx": "18.08",
        "cy": "7.40",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "9.23",
        "cy": "17.73",
        "r": "0.77"
      }
    ],
    [
      "circle",
      {
        "cx": "7.13",
        "cy": "16.75",
        "r": "0.57"
      }
    ],
    [
      "circle",
      {
        "cx": "20.86",
        "cy": "9.54",
        "r": "0.76"
      }
    ],
    [
      "circle",
      {
        "cx": "9.95",
        "cy": "14.42",
        "r": "0.98"
      }
    ],
    [
      "circle",
      {
        "cx": "17.43",
        "cy": "5.29",
        "r": "0.74"
      }
    ],
    [
      "circle",
      {
        "cx": "9.22",
        "cy": "11.95",
        "r": "1.45"
      }
    ]
  ]
};

export const UnivocoHate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.08 7.40 L 9.23 17.73 L 7.13 16.75 L 20.86 9.54 L 9.95 14.42 L 17.43 5.29 L 9.22 11.95" />
      <circle cx="18.08" cy="7.40" r="0.59" />
      <circle cx="9.23" cy="17.73" r="0.77" />
      <circle cx="7.13" cy="16.75" r="0.57" />
      <circle cx="20.86" cy="9.54" r="0.76" />
      <circle cx="9.95" cy="14.42" r="0.98" />
      <circle cx="17.43" cy="5.29" r="0.74" />
      <circle cx="9.22" cy="11.95" r="1.45" />
      {children}
    </svg>
  );
});

export default UnivocoHate;
