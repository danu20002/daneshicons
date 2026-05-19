import React from 'react';

export const iconData = {
  "id": "MilleHydrant",
  "name": "MilleHydrant",
  "category": "HM",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.29 8.51 L 10.29 8.51"
      }
    ],
    [
      "path",
      {
        "d": "M 12.17 5.31 L 14.17 8.78"
      }
    ],
    [
      "path",
      {
        "d": "M 17.88 8.81 L 15.88 12.27"
      }
    ],
    [
      "path",
      {
        "d": "M 17.71 15.49 L 13.71 15.49"
      }
    ],
    [
      "path",
      {
        "d": "M 11.83 18.69 L 9.83 15.22"
      }
    ],
    [
      "path",
      {
        "d": "M 6.12 15.19 L 8.12 11.73"
      }
    ]
  ]
};

export const MilleHydrant = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.29 8.51 L 10.29 8.51" />
      <path d="M 12.17 5.31 L 14.17 8.78" />
      <path d="M 17.88 8.81 L 15.88 12.27" />
      <path d="M 17.71 15.49 L 13.71 15.49" />
      <path d="M 11.83 18.69 L 9.83 15.22" />
      <path d="M 6.12 15.19 L 8.12 11.73" />
      {children}
    </svg>
  );
});

export default MilleHydrant;
