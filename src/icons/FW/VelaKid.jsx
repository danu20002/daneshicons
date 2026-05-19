import React from 'react';

export const iconData = {
  "id": "VelaKid",
  "name": "VelaKid",
  "category": "FW",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.86 2.31 C 10.33 12.84, 11.26 9.50, 17.29 19.02"
      }
    ],
    [
      "path",
      {
        "d": "M 8.10 4.66 C 9.98 15.99, 15.62 4.03, 14.85 21.29"
      }
    ],
    [
      "path",
      {
        "d": "M 6.46 4.64 C 9.06 10.06, 19.76 16.77, 14.11 18.18"
      }
    ],
    [
      "path",
      {
        "d": "M 5.40 6.73 C 12.87 17.09, 7.12 5.79, 21.94 20.51"
      }
    ]
  ]
};

export const VelaKid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.86 2.31 C 10.33 12.84, 11.26 9.50, 17.29 19.02" />
      <path d="M 8.10 4.66 C 9.98 15.99, 15.62 4.03, 14.85 21.29" />
      <path d="M 6.46 4.64 C 9.06 10.06, 19.76 16.77, 14.11 18.18" />
      <path d="M 5.40 6.73 C 12.87 17.09, 7.12 5.79, 21.94 20.51" />
      {children}
    </svg>
  );
});

export default VelaKid;
