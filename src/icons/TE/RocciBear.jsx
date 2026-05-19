import React from 'react';

export const iconData = {
  "id": "RocciBear",
  "name": "RocciBear",
  "category": "TE",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.46 9.25 L 11.46 9.25"
      }
    ],
    [
      "path",
      {
        "d": "M 13.21 6.83 L 14.45 10.64"
      }
    ],
    [
      "path",
      {
        "d": "M 17.29 11.56 L 14.05 13.91"
      }
    ],
    [
      "path",
      {
        "d": "M 14.05 16.89 L 10.82 14.54"
      }
    ],
    [
      "path",
      {
        "d": "M 7.98 15.47 L 9.22 11.66"
      }
    ]
  ]
};

export const RocciBear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.46 9.25 L 11.46 9.25" />
      <path d="M 13.21 6.83 L 14.45 10.64" />
      <path d="M 17.29 11.56 L 14.05 13.91" />
      <path d="M 14.05 16.89 L 10.82 14.54" />
      <path d="M 7.98 15.47 L 9.22 11.66" />
      {children}
    </svg>
  );
});

export default RocciBear;
