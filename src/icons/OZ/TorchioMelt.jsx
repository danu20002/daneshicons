import React from 'react';

export const iconData = {
  "id": "TorchioMelt",
  "name": "TorchioMelt",
  "category": "OZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.99 12.00 a 9.01 9.01 0 1 0 18.03 0 a 9.01 9.01 0 1 0 -18.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.19 7.49 a 7.81 2.3417317276876632 0 1 0 15.61 0 a 7.81 2.3417317276876632 0 1 0 -15.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.99 12.00 a 9.01 2.7039988867007194 0 1 0 18.03 0 a 9.01 2.7039988867007194 0 1 0 -18.03 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.19 16.51 a 7.81 2.3417317276876632 0 1 0 15.61 0 a 7.81 2.3417317276876632 0 1 0 -15.61 0"
      }
    ],
    [
      "path",
      {
        "d": "M 18.37 5.63 A 2 2 0 0 0 18.37 18.37"
      }
    ],
    [
      "path",
      {
        "d": "M 18.37 5.63 A 2 2 0 0 1 18.37 18.37"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.99 A 2 2 0 0 0 12.00 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 2.99 A 2 2 0 0 1 12.00 21.01"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 5.63 A 2 2 0 0 0 5.63 18.37"
      }
    ],
    [
      "path",
      {
        "d": "M 5.63 5.63 A 2 2 0 0 1 5.63 18.37"
      }
    ]
  ]
};

export const TorchioMelt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.99 12.00 a 9.01 9.01 0 1 0 18.03 0 a 9.01 9.01 0 1 0 -18.03 0" />
      <path d="M 4.19 7.49 a 7.81 2.3417317276876632 0 1 0 15.61 0 a 7.81 2.3417317276876632 0 1 0 -15.61 0" />
      <path d="M 2.99 12.00 a 9.01 2.7039988867007194 0 1 0 18.03 0 a 9.01 2.7039988867007194 0 1 0 -18.03 0" />
      <path d="M 4.19 16.51 a 7.81 2.3417317276876632 0 1 0 15.61 0 a 7.81 2.3417317276876632 0 1 0 -15.61 0" />
      <path d="M 18.37 5.63 A 2 2 0 0 0 18.37 18.37" />
      <path d="M 18.37 5.63 A 2 2 0 0 1 18.37 18.37" />
      <path d="M 12.00 2.99 A 2 2 0 0 0 12.00 21.01" />
      <path d="M 12.00 2.99 A 2 2 0 0 1 12.00 21.01" />
      <path d="M 5.63 5.63 A 2 2 0 0 0 5.63 18.37" />
      <path d="M 5.63 5.63 A 2 2 0 0 1 5.63 18.37" />
      {children}
    </svg>
  );
});

export default TorchioMelt;
