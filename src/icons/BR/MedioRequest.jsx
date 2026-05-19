import React from 'react';

export const iconData = {
  "id": "MedioRequest",
  "name": "MedioRequest",
  "category": "BR",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.67 13.88 L 13.07 3.17 L 6.12 13.74 L 9.46 16.35 L 6.60 16.53 L 19.97 10.34 L 17.24 3.92"
      }
    ],
    [
      "path",
      {
        "d": "M 5.47 11.52 L 8.28 14.11"
      }
    ],
    [
      "path",
      {
        "d": "M 6.60 19.62 A 5.59 7.00 110 0 1 17.56 2.28"
      }
    ]
  ]
};

export const MedioRequest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.67 13.88 L 13.07 3.17 L 6.12 13.74 L 9.46 16.35 L 6.60 16.53 L 19.97 10.34 L 17.24 3.92" />
      <path d="M 5.47 11.52 L 8.28 14.11" />
      <path d="M 6.60 19.62 A 5.59 7.00 110 0 1 17.56 2.28" />
      {children}
    </svg>
  );
});

export default MedioRequest;
