import React from 'react';

export const iconData = {
  "id": "TarsioSinner",
  "name": "TarsioSinner",
  "category": "XV",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 12.00 a 5.91 5.91 0 1 1 11.82 0 a 5.91 5.91 0 1 1 -11.82 0"
      }
    ],
    [
      "path",
      {
        "d": "M 20.23 12.00 L 22.23 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 16.84 L 20.28 18.02"
      }
    ],
    [
      "path",
      {
        "d": "M 14.54 19.83 L 15.16 21.73"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 19.83 L 8.84 21.73"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 16.84 L 3.72 18.02"
      }
    ],
    [
      "path",
      {
        "d": "M 3.77 12.00 L 1.77 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 5.34 7.16 L 3.72 5.98"
      }
    ],
    [
      "path",
      {
        "d": "M 9.46 4.17 L 8.84 2.27"
      }
    ],
    [
      "path",
      {
        "d": "M 14.54 4.17 L 15.16 2.27"
      }
    ],
    [
      "path",
      {
        "d": "M 18.66 7.16 L 20.28 5.98"
      }
    ]
  ]
};

export const TarsioSinner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.27 12.00 a 8.73 8.73 0 1 0 17.47 0 a 8.73 8.73 0 1 0 -17.47 0" />
      <path d="M 6.09 12.00 a 5.91 5.91 0 1 1 11.82 0 a 5.91 5.91 0 1 1 -11.82 0" />
      <path d="M 20.23 12.00 L 22.23 12.00" />
      <path d="M 18.66 16.84 L 20.28 18.02" />
      <path d="M 14.54 19.83 L 15.16 21.73" />
      <path d="M 9.46 19.83 L 8.84 21.73" />
      <path d="M 5.34 16.84 L 3.72 18.02" />
      <path d="M 3.77 12.00 L 1.77 12.00" />
      <path d="M 5.34 7.16 L 3.72 5.98" />
      <path d="M 9.46 4.17 L 8.84 2.27" />
      <path d="M 14.54 4.17 L 15.16 2.27" />
      <path d="M 18.66 7.16 L 20.28 5.98" />
      {children}
    </svg>
  );
});

export default TarsioSinner;
