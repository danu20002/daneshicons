import React from 'react';

export const iconData = {
  "id": "TirsoDestroy",
  "name": "TirsoDestroy",
  "category": "IY",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.06 7.71 L 10.06 7.71"
      }
    ],
    [
      "path",
      {
        "d": "M 18.69 9.00 L 16.69 12.46"
      }
    ],
    [
      "path",
      {
        "d": "M 11.25 19.29 L 9.25 15.83"
      }
    ]
  ]
};

export const TirsoDestroy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.06 7.71 L 10.06 7.71" />
      <path d="M 18.69 9.00 L 16.69 12.46" />
      <path d="M 11.25 19.29 L 9.25 15.83" />
      {children}
    </svg>
  );
});

export default TirsoDestroy;
