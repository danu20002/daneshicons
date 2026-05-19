import React from 'react';

export const iconData = {
  "id": "VivajoPrecious",
  "name": "VivajoPrecious",
  "category": "VF",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.83 6.02 C 15.61 14.31, 5.60 14.24, 15.49 20.18"
      }
    ],
    [
      "path",
      {
        "d": "M 6.09 7.60 C 11.76 5.76, 16.59 11.06, 20.41 17.72"
      }
    ],
    [
      "path",
      {
        "d": "M 2.88 6.37 C 8.13 19.84, 16.72 15.27, 18.11 20.57"
      }
    ],
    [
      "path",
      {
        "d": "M 8.91 3.23 C 16.91 18.31, 10.52 12.33, 21.38 14.53"
      }
    ]
  ]
};

export const VivajoPrecious = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.83 6.02 C 15.61 14.31, 5.60 14.24, 15.49 20.18" />
      <path d="M 6.09 7.60 C 11.76 5.76, 16.59 11.06, 20.41 17.72" />
      <path d="M 2.88 6.37 C 8.13 19.84, 16.72 15.27, 18.11 20.57" />
      <path d="M 8.91 3.23 C 16.91 18.31, 10.52 12.33, 21.38 14.53" />
      {children}
    </svg>
  );
});

export default VivajoPrecious;
