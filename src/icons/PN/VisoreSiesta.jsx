import React from 'react';

export const iconData = {
  "id": "VisoreSiesta",
  "name": "VisoreSiesta",
  "category": "PN",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.96 8.91 L 14.96 8.91"
      }
    ],
    [
      "path",
      {
        "d": "M 14.61 10.06 L 15.85 13.86"
      }
    ],
    [
      "path",
      {
        "d": "M 14.66 13.88 L 11.42 16.24"
      }
    ],
    [
      "path",
      {
        "d": "M 11.03 15.11 L 7.79 12.76"
      }
    ],
    [
      "path",
      {
        "d": "M 8.74 12.04 L 9.98 8.23"
      }
    ]
  ]
};

export const VisoreSiesta = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.96 8.91 L 14.96 8.91" />
      <path d="M 14.61 10.06 L 15.85 13.86" />
      <path d="M 14.66 13.88 L 11.42 16.24" />
      <path d="M 11.03 15.11 L 7.79 12.76" />
      <path d="M 8.74 12.04 L 9.98 8.23" />
      {children}
    </svg>
  );
});

export default VisoreSiesta;
