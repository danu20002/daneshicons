import React from 'react';

export const iconData = {
  "id": "PseudoFling",
  "name": "PseudoFling",
  "category": "DY",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.52 12.24 L 12.77 10.02 L 4.34 3.41 L 2.96 5.38 L 18.31 13.64"
      }
    ],
    [
      "circle",
      {
        "cx": "14.52",
        "cy": "12.24",
        "r": "0.59"
      }
    ],
    [
      "circle",
      {
        "cx": "12.77",
        "cy": "10.02",
        "r": "1.33"
      }
    ],
    [
      "circle",
      {
        "cx": "4.34",
        "cy": "3.41",
        "r": "1.08"
      }
    ],
    [
      "circle",
      {
        "cx": "2.96",
        "cy": "5.38",
        "r": "1.34"
      }
    ],
    [
      "circle",
      {
        "cx": "18.31",
        "cy": "13.64",
        "r": "0.95"
      }
    ]
  ]
};

export const PseudoFling = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.52 12.24 L 12.77 10.02 L 4.34 3.41 L 2.96 5.38 L 18.31 13.64" />
      <circle cx="14.52" cy="12.24" r="0.59" />
      <circle cx="12.77" cy="10.02" r="1.33" />
      <circle cx="4.34" cy="3.41" r="1.08" />
      <circle cx="2.96" cy="5.38" r="1.34" />
      <circle cx="18.31" cy="13.64" r="0.95" />
      {children}
    </svg>
  );
});

export default PseudoFling;
