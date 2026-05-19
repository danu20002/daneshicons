import React from 'react';

export const iconData = {
  "id": "PomoSalary",
  "name": "PomoSalary",
  "category": "WR",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.67 9.78 C 6.64 5.17, 15.48 9.35, 15.19 19.38"
      }
    ],
    [
      "path",
      {
        "d": "M 9.33 5.23 C 4.99 5.44, 9.85 11.69, 20.53 18.66"
      }
    ],
    [
      "path",
      {
        "d": "M 7.57 8.37 C 10.13 9.02, 19.44 8.24, 18.65 16.97"
      }
    ],
    [
      "path",
      {
        "d": "M 9.18 7.86 C 5.15 11.93, 7.80 14.11, 17.43 14.87"
      }
    ],
    [
      "path",
      {
        "d": "M 6.32 2.03 C 16.86 16.34, 16.41 8.08, 21.74 16.61"
      }
    ]
  ]
};

export const PomoSalary = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.67 9.78 C 6.64 5.17, 15.48 9.35, 15.19 19.38" />
      <path d="M 9.33 5.23 C 4.99 5.44, 9.85 11.69, 20.53 18.66" />
      <path d="M 7.57 8.37 C 10.13 9.02, 19.44 8.24, 18.65 16.97" />
      <path d="M 9.18 7.86 C 5.15 11.93, 7.80 14.11, 17.43 14.87" />
      <path d="M 6.32 2.03 C 16.86 16.34, 16.41 8.08, 21.74 16.61" />
      {children}
    </svg>
  );
});

export default PomoSalary;
