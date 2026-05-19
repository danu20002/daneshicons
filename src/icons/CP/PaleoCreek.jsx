import React from 'react';

export const iconData = {
  "id": "PaleoCreek",
  "name": "PaleoCreek",
  "category": "CP",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.43 6.47 L 20.57 6.47 L 20.57 17.53 L 3.43 17.53 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.43 6.47 L 7.67 2.23 L 24.80 2.23 L 20.57 6.47"
      }
    ],
    [
      "path",
      {
        "d": "M 20.57 6.47 L 24.80 2.23 L 24.80 13.29 L 20.57 17.53"
      }
    ]
  ]
};

export const PaleoCreek = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.43 6.47 L 20.57 6.47 L 20.57 17.53 L 3.43 17.53 Z" />
      <path d="M 3.43 6.47 L 7.67 2.23 L 24.80 2.23 L 20.57 6.47" />
      <path d="M 20.57 6.47 L 24.80 2.23 L 24.80 13.29 L 20.57 17.53" />
      {children}
    </svg>
  );
});

export default PaleoCreek;
