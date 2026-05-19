import React from 'react';

export const iconData = {
  "id": "TabulaSource",
  "name": "TabulaSource",
  "category": "JU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.10 3.97 L 11.24 6.85 L 8.39 21.29 L 5.72 10.79 L 21.54 15.95 L 14.29 12.87 L 12.27 17.63"
      }
    ],
    [
      "circle",
      {
        "cx": "11.10",
        "cy": "3.97",
        "r": "1.11"
      }
    ],
    [
      "circle",
      {
        "cx": "11.24",
        "cy": "6.85",
        "r": "0.83"
      }
    ],
    [
      "circle",
      {
        "cx": "8.39",
        "cy": "21.29",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "5.72",
        "cy": "10.79",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "21.54",
        "cy": "15.95",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "14.29",
        "cy": "12.87",
        "r": "1.14"
      }
    ],
    [
      "circle",
      {
        "cx": "12.27",
        "cy": "17.63",
        "r": "0.62"
      }
    ]
  ]
};

export const TabulaSource = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.10 3.97 L 11.24 6.85 L 8.39 21.29 L 5.72 10.79 L 21.54 15.95 L 14.29 12.87 L 12.27 17.63" />
      <circle cx="11.10" cy="3.97" r="1.11" />
      <circle cx="11.24" cy="6.85" r="0.83" />
      <circle cx="8.39" cy="21.29" r="1.37" />
      <circle cx="5.72" cy="10.79" r="1.46" />
      <circle cx="21.54" cy="15.95" r="1.34" />
      <circle cx="14.29" cy="12.87" r="1.14" />
      <circle cx="12.27" cy="17.63" r="0.62" />
      {children}
    </svg>
  );
});

export default TabulaSource;
