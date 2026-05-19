import React from 'react';

export const iconData = {
  "id": "SkeletoFiber",
  "name": "SkeletoFiber",
  "category": "UT",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.50 20.01 L 9.29 14.75 L 9.60 2.05 L 7.61 3.37 L 6.47 14.64"
      }
    ],
    [
      "circle",
      {
        "cx": "16.50",
        "cy": "20.01",
        "r": "0.78"
      }
    ],
    [
      "circle",
      {
        "cx": "9.29",
        "cy": "14.75",
        "r": "1.17"
      }
    ],
    [
      "circle",
      {
        "cx": "9.60",
        "cy": "2.05",
        "r": "1.45"
      }
    ],
    [
      "circle",
      {
        "cx": "7.61",
        "cy": "3.37",
        "r": "0.64"
      }
    ],
    [
      "circle",
      {
        "cx": "6.47",
        "cy": "14.64",
        "r": "1.13"
      }
    ]
  ]
};

export const SkeletoFiber = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.50 20.01 L 9.29 14.75 L 9.60 2.05 L 7.61 3.37 L 6.47 14.64" />
      <circle cx="16.50" cy="20.01" r="0.78" />
      <circle cx="9.29" cy="14.75" r="1.17" />
      <circle cx="9.60" cy="2.05" r="1.45" />
      <circle cx="7.61" cy="3.37" r="0.64" />
      <circle cx="6.47" cy="14.64" r="1.13" />
      {children}
    </svg>
  );
});

export default SkeletoFiber;
