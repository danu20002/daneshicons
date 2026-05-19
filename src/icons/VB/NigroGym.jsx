import React from 'react';

export const iconData = {
  "id": "NigroGym",
  "name": "NigroGym",
  "category": "VB",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.75 20.68 L 7.64 14.88 L 2.74 11.59 L 7.92 8.75 L 9.53 3.07 L 13.83 7.11 L 19.73 6.89 L 17.22 12.23 L 19.25 17.77 L 13.39 17.03 Z"
      }
    ]
  ]
};

export const NigroGym = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.75 20.68 L 7.64 14.88 L 2.74 11.59 L 7.92 8.75 L 9.53 3.07 L 13.83 7.11 L 19.73 6.89 L 17.22 12.23 L 19.25 17.77 L 13.39 17.03 Z" />
      {children}
    </svg>
  );
});

export default NigroGym;
