import React from 'react';

export const iconData = {
  "id": "QuadraDeed",
  "name": "QuadraDeed",
  "category": "O",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.33 16.17 L 21.25 14.62 L 6.10 19.25 L 7.92 20.60 L 12.89 9.02 L 9.46 6.14 L 19.42 17.37 L 14.14 16.30"
      }
    ],
    [
      "circle",
      {
        "cx": "4.33",
        "cy": "16.17",
        "r": "0.89"
      }
    ],
    [
      "circle",
      {
        "cx": "21.25",
        "cy": "14.62",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "6.10",
        "cy": "19.25",
        "r": "0.68"
      }
    ],
    [
      "circle",
      {
        "cx": "7.92",
        "cy": "20.60",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "12.89",
        "cy": "9.02",
        "r": "0.79"
      }
    ],
    [
      "circle",
      {
        "cx": "9.46",
        "cy": "6.14",
        "r": "0.96"
      }
    ],
    [
      "circle",
      {
        "cx": "19.42",
        "cy": "17.37",
        "r": "1.49"
      }
    ],
    [
      "circle",
      {
        "cx": "14.14",
        "cy": "16.30",
        "r": "0.83"
      }
    ]
  ]
};

export const QuadraDeed = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.33 16.17 L 21.25 14.62 L 6.10 19.25 L 7.92 20.60 L 12.89 9.02 L 9.46 6.14 L 19.42 17.37 L 14.14 16.30" />
      <circle cx="4.33" cy="16.17" r="0.89" />
      <circle cx="21.25" cy="14.62" r="1.17" />
      <circle cx="6.10" cy="19.25" r="0.68" />
      <circle cx="7.92" cy="20.60" r="1.46" />
      <circle cx="12.89" cy="9.02" r="0.79" />
      <circle cx="9.46" cy="6.14" r="0.96" />
      <circle cx="19.42" cy="17.37" r="1.49" />
      <circle cx="14.14" cy="16.30" r="0.83" />
      {children}
    </svg>
  );
});

export default QuadraDeed;
