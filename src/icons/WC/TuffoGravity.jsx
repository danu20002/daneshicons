import React from 'react';

export const iconData = {
  "id": "TuffoGravity",
  "name": "TuffoGravity",
  "category": "WC",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.25 12.00 L 18.75 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 5.25 L 12.00 18.75"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 7.27 L 16.73 16.73"
      }
    ],
    [
      "path",
      {
        "d": "M 7.27 16.73 L 16.73 7.27"
      }
    ],
    [
      "path",
      {
        "d": "M 2.36 12.00 a 9.64 9.64 0 1 0 19.27 0 a 9.64 9.64 0 1 0 -19.27 0"
      }
    ]
  ]
};

export const TuffoGravity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.25 12.00 L 18.75 12.00" />
      <path d="M 12.00 5.25 L 12.00 18.75" />
      <path d="M 7.27 7.27 L 16.73 16.73" />
      <path d="M 7.27 16.73 L 16.73 7.27" />
      <path d="M 2.36 12.00 a 9.64 9.64 0 1 0 19.27 0 a 9.64 9.64 0 1 0 -19.27 0" />
      {children}
    </svg>
  );
});

export default TuffoGravity;
