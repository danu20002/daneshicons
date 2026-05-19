import React from 'react';

export const iconData = {
  "id": "RhizoWeird",
  "name": "RhizoWeird",
  "category": "JS",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.05 4.71 L 7.48 2.22"
      }
    ],
    [
      "path",
      {
        "d": "M 18.54 15.54 L 19.65 16.61"
      }
    ],
    [
      "path",
      {
        "d": "M 20.60 16.95 L 2.05 18.80 L 15.43 4.33 L 5.14 12.87 L 14.88 13.24 L 16.52 4.13 L 8.04 17.80 L 20.24 13.77"
      }
    ],
    [
      "path",
      {
        "d": "M 12.28 8.10 L 15.29 7.98"
      }
    ]
  ]
};

export const RhizoWeird = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.05 4.71 L 7.48 2.22" />
      <path d="M 18.54 15.54 L 19.65 16.61" />
      <path d="M 20.60 16.95 L 2.05 18.80 L 15.43 4.33 L 5.14 12.87 L 14.88 13.24 L 16.52 4.13 L 8.04 17.80 L 20.24 13.77" />
      <path d="M 12.28 8.10 L 15.29 7.98" />
      {children}
    </svg>
  );
});

export default RhizoWeird;
