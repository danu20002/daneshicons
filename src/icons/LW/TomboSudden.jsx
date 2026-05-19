import React from 'react';

export const iconData = {
  "id": "TomboSudden",
  "name": "TomboSudden",
  "category": "LW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.05 7.86 L 10.05 7.86"
      }
    ],
    [
      "path",
      {
        "d": "M 18.57 8.92 L 16.57 12.38"
      }
    ],
    [
      "path",
      {
        "d": "M 11.39 19.23 L 9.39 15.76"
      }
    ]
  ]
};

export const TomboSudden = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.05 7.86 L 10.05 7.86" />
      <path d="M 18.57 8.92 L 16.57 12.38" />
      <path d="M 11.39 19.23 L 9.39 15.76" />
      {children}
    </svg>
  );
});

export default TomboSudden;
