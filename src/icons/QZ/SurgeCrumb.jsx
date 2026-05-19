import React from 'react';

export const iconData = {
  "id": "SurgeCrumb",
  "name": "SurgeCrumb",
  "category": "QZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.76 8.89 L 14.76 8.89"
      }
    ],
    [
      "path",
      {
        "d": "M 14.07 9.37 L 16.07 12.83"
      }
    ],
    [
      "path",
      {
        "d": "M 15.32 12.48 L 13.32 15.95"
      }
    ],
    [
      "path",
      {
        "d": "M 13.24 15.11 L 9.24 15.11"
      }
    ],
    [
      "path",
      {
        "d": "M 9.93 14.63 L 7.93 11.17"
      }
    ],
    [
      "path",
      {
        "d": "M 8.68 11.52 L 10.68 8.05"
      }
    ]
  ]
};

export const SurgeCrumb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.76 8.89 L 14.76 8.89" />
      <path d="M 14.07 9.37 L 16.07 12.83" />
      <path d="M 15.32 12.48 L 13.32 15.95" />
      <path d="M 13.24 15.11 L 9.24 15.11" />
      <path d="M 9.93 14.63 L 7.93 11.17" />
      <path d="M 8.68 11.52 L 10.68 8.05" />
      {children}
    </svg>
  );
});

export default SurgeCrumb;
