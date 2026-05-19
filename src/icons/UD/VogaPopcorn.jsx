import React from 'react';

export const iconData = {
  "id": "VogaPopcorn",
  "name": "VogaPopcorn",
  "category": "UD",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 5.52 L 20.67 5.52 L 20.67 18.48 L 3.33 18.48 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 5.52 L 7.36 1.49 L 24.70 1.49 L 20.67 5.52"
      }
    ],
    [
      "path",
      {
        "d": "M 20.67 5.52 L 24.70 1.49 L 24.70 14.45 L 20.67 18.48"
      }
    ]
  ]
};

export const VogaPopcorn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 5.52 L 20.67 5.52 L 20.67 18.48 L 3.33 18.48 Z" />
      <path d="M 3.33 5.52 L 7.36 1.49 L 24.70 1.49 L 20.67 5.52" />
      <path d="M 20.67 5.52 L 24.70 1.49 L 24.70 14.45 L 20.67 18.48" />
      {children}
    </svg>
  );
});

export default VogaPopcorn;
