import React from 'react';

export const iconData = {
  "id": "PlutoReboot",
  "name": "PlutoReboot",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.07 9.26 L 17.50 13.29 L 18.91 18.49 L 13.63 17.41 L 9.83 21.23 L 8.13 16.12 L 2.93 14.74 L 6.50 10.71 L 5.09 5.51 L 10.37 6.59 L 14.17 2.77 L 15.87 7.88 Z"
      }
    ]
  ]
};

export const PlutoReboot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.07 9.26 L 17.50 13.29 L 18.91 18.49 L 13.63 17.41 L 9.83 21.23 L 8.13 16.12 L 2.93 14.74 L 6.50 10.71 L 5.09 5.51 L 10.37 6.59 L 14.17 2.77 L 15.87 7.88 Z" />
      {children}
    </svg>
  );
});

export default PlutoReboot;
