import React from 'react';

export const iconData = {
  "id": "UmbraExcise",
  "name": "UmbraExcise",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.08 6.19 L 11.08 6.19"
      }
    ],
    [
      "path",
      {
        "d": "M 14.57 4.83 L 16.57 8.29"
      }
    ],
    [
      "path",
      {
        "d": "M 19.49 10.64 L 17.49 14.11"
      }
    ],
    [
      "path",
      {
        "d": "M 16.92 17.81 L 12.92 17.81"
      }
    ],
    [
      "path",
      {
        "d": "M 9.43 19.17 L 7.43 15.71"
      }
    ],
    [
      "path",
      {
        "d": "M 4.51 13.36 L 6.51 9.89"
      }
    ]
  ]
};

export const UmbraExcise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.08 6.19 L 11.08 6.19" />
      <path d="M 14.57 4.83 L 16.57 8.29" />
      <path d="M 19.49 10.64 L 17.49 14.11" />
      <path d="M 16.92 17.81 L 12.92 17.81" />
      <path d="M 9.43 19.17 L 7.43 15.71" />
      <path d="M 4.51 13.36 L 6.51 9.89" />
      {children}
    </svg>
  );
});

export default UmbraExcise;
