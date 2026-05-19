import React from 'react';

export const iconData = {
  "id": "VerucoVolunteer",
  "name": "VerucoVolunteer",
  "category": "GP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 9.41 C 16.95 11.22, 15.79 9.79, 15.03 14.24"
      }
    ],
    [
      "path",
      {
        "d": "M 3.23 6.71 C 7.15 10.82, 16.30 19.82, 15.40 19.39"
      }
    ],
    [
      "path",
      {
        "d": "M 7.10 4.62 C 18.84 16.18, 18.01 17.26, 18.35 16.98"
      }
    ]
  ]
};

export const VerucoVolunteer = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 9.41 C 16.95 11.22, 15.79 9.79, 15.03 14.24" />
      <path d="M 3.23 6.71 C 7.15 10.82, 16.30 19.82, 15.40 19.39" />
      <path d="M 7.10 4.62 C 18.84 16.18, 18.01 17.26, 18.35 16.98" />
      {children}
    </svg>
  );
});

export default VerucoVolunteer;
