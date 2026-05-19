import React from 'react';

export const iconData = {
  "id": "HydroDock",
  "name": "HydroDock",
  "category": "LI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.62 12.00 a 9.38 9.38 0 1 0 18.75 0 a 9.38 9.38 0 1 0 -18.75 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 6.37 a 7.50 2.2505384231731296 0 1 0 15.00 0 a 7.50 2.2505384231731296 0 1 0 -15.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 10.12 a 9.19 2.756335391651004 0 1 0 18.38 0 a 9.19 2.756335391651004 0 1 0 -18.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 2.81 13.88 a 9.19 2.756335391651004 0 1 0 18.38 0 a 9.19 2.756335391651004 0 1 0 -18.38 0"
      }
    ],
    [
      "path",
      {
        "d": "M 4.50 17.63 a 7.50 2.250538423173129 0 1 0 15.00 0 a 7.50 2.250538423173129 0 1 0 -15.00 0"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 3.88 A 2 2 0 0 0 16.69 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 16.69 3.88 A 2 2 0 0 1 16.69 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 3.88 A 2 2 0 0 0 7.31 20.12"
      }
    ],
    [
      "path",
      {
        "d": "M 7.31 3.88 A 2 2 0 0 1 7.31 20.12"
      }
    ]
  ]
};

export const HydroDock = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.62 12.00 a 9.38 9.38 0 1 0 18.75 0 a 9.38 9.38 0 1 0 -18.75 0" />
      <path d="M 4.50 6.37 a 7.50 2.2505384231731296 0 1 0 15.00 0 a 7.50 2.2505384231731296 0 1 0 -15.00 0" />
      <path d="M 2.81 10.12 a 9.19 2.756335391651004 0 1 0 18.38 0 a 9.19 2.756335391651004 0 1 0 -18.38 0" />
      <path d="M 2.81 13.88 a 9.19 2.756335391651004 0 1 0 18.38 0 a 9.19 2.756335391651004 0 1 0 -18.38 0" />
      <path d="M 4.50 17.63 a 7.50 2.250538423173129 0 1 0 15.00 0 a 7.50 2.250538423173129 0 1 0 -15.00 0" />
      <path d="M 16.69 3.88 A 2 2 0 0 0 16.69 20.12" />
      <path d="M 16.69 3.88 A 2 2 0 0 1 16.69 20.12" />
      <path d="M 7.31 3.88 A 2 2 0 0 0 7.31 20.12" />
      <path d="M 7.31 3.88 A 2 2 0 0 1 7.31 20.12" />
      {children}
    </svg>
  );
});

export default HydroDock;
