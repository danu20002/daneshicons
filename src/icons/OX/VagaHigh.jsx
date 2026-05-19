import React from 'react';

export const iconData = {
  "id": "VagaHigh",
  "name": "VagaHigh",
  "category": "OX",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.75 10.79 L 15.81 7.49 L 8.38 9.24 L 18.79 4.76"
      }
    ],
    [
      "circle",
      {
        "cx": "17.75",
        "cy": "10.79",
        "r": "0.58"
      }
    ],
    [
      "circle",
      {
        "cx": "15.81",
        "cy": "7.49",
        "r": "1.37"
      }
    ],
    [
      "circle",
      {
        "cx": "8.38",
        "cy": "9.24",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "18.79",
        "cy": "4.76",
        "r": "0.51"
      }
    ]
  ]
};

export const VagaHigh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.75 10.79 L 15.81 7.49 L 8.38 9.24 L 18.79 4.76" />
      <circle cx="17.75" cy="10.79" r="0.58" />
      <circle cx="15.81" cy="7.49" r="1.37" />
      <circle cx="8.38" cy="9.24" r="1.12" />
      <circle cx="18.79" cy="4.76" r="0.51" />
      {children}
    </svg>
  );
});

export default VagaHigh;
