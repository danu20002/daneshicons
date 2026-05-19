import React from 'react';

export const iconData = {
  "id": "TorsioFluid",
  "name": "TorsioFluid",
  "category": "BS",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.98 13.38 L 10.62 20.98 L 3.02 10.62 L 13.38 3.02 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.87 14.66 L 9.34 17.87 L 6.13 9.34 L 14.66 6.13 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 14.42 14.44 L 9.56 14.42 L 9.58 9.56 L 14.44 9.58 Z"
      }
    ]
  ]
};

export const TorsioFluid = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.98 13.38 L 10.62 20.98 L 3.02 10.62 L 13.38 3.02 Z" />
      <path d="M 17.87 14.66 L 9.34 17.87 L 6.13 9.34 L 14.66 6.13 Z" />
      <path d="M 14.42 14.44 L 9.56 14.42 L 9.58 9.56 L 14.44 9.58 Z" />
      {children}
    </svg>
  );
});

export default TorsioFluid;
