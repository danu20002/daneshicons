import React from 'react';

export const iconData = {
  "id": "VoluttConch",
  "name": "VoluttConch",
  "category": "IH",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.95 13.28 L 15.36 20.39 L 6.41 19.11 L 3.05 10.72 L 8.64 3.61 L 17.59 4.89 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 17.41 14.90 L 12.19 18.14 L 6.78 15.23 L 6.59 9.10 L 11.81 5.86 L 17.22 8.77 Z"
      }
    ]
  ]
};

export const VoluttConch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.95 13.28 L 15.36 20.39 L 6.41 19.11 L 3.05 10.72 L 8.64 3.61 L 17.59 4.89 Z" />
      <path d="M 17.41 14.90 L 12.19 18.14 L 6.78 15.23 L 6.59 9.10 L 11.81 5.86 L 17.22 8.77 Z" />
      {children}
    </svg>
  );
});

export default VoluttConch;
