import React from 'react';

export const iconData = {
  "id": "MateriLend",
  "name": "MateriLend",
  "category": "WY",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.81 12.50 L 16.05 17.79 L 12.19 2.07 L 10.19 2.19 L 4.08 10.98"
      }
    ],
    [
      "circle",
      {
        "cx": "14.81",
        "cy": "12.50",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "16.05",
        "cy": "17.79",
        "r": "1.12"
      }
    ],
    [
      "circle",
      {
        "cx": "12.19",
        "cy": "2.07",
        "r": "1.30"
      }
    ],
    [
      "circle",
      {
        "cx": "10.19",
        "cy": "2.19",
        "r": "1.43"
      }
    ],
    [
      "circle",
      {
        "cx": "4.08",
        "cy": "10.98",
        "r": "1.23"
      }
    ]
  ]
};

export const MateriLend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.81 12.50 L 16.05 17.79 L 12.19 2.07 L 10.19 2.19 L 4.08 10.98" />
      <circle cx="14.81" cy="12.50" r="1.45" />
      <circle cx="16.05" cy="17.79" r="1.12" />
      <circle cx="12.19" cy="2.07" r="1.30" />
      <circle cx="10.19" cy="2.19" r="1.43" />
      <circle cx="4.08" cy="10.98" r="1.23" />
      {children}
    </svg>
  );
});

export default MateriLend;
