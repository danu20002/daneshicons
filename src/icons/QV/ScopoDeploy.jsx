import React from 'react';

export const iconData = {
  "id": "ScopoDeploy",
  "name": "ScopoDeploy",
  "category": "QV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.59 9.74 C 10.16 13.10, 11.12 17.69, 18.62 15.77"
      }
    ],
    [
      "path",
      {
        "d": "M 6.98 7.62 C 6.88 12.17, 11.56 13.45, 18.26 17.56"
      }
    ],
    [
      "path",
      {
        "d": "M 8.02 3.84 C 14.13 4.67, 9.34 10.49, 21.23 21.79"
      }
    ],
    [
      "path",
      {
        "d": "M 5.69 5.80 C 9.75 13.81, 15.29 7.31, 15.14 14.60"
      }
    ]
  ]
};

export const ScopoDeploy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.59 9.74 C 10.16 13.10, 11.12 17.69, 18.62 15.77" />
      <path d="M 6.98 7.62 C 6.88 12.17, 11.56 13.45, 18.26 17.56" />
      <path d="M 8.02 3.84 C 14.13 4.67, 9.34 10.49, 21.23 21.79" />
      <path d="M 5.69 5.80 C 9.75 13.81, 15.29 7.31, 15.14 14.60" />
      {children}
    </svg>
  );
});

export default ScopoDeploy;
