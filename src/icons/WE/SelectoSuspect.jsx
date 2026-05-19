import React from 'react';

export const iconData = {
  "id": "SelectoSuspect",
  "name": "SelectoSuspect",
  "category": "WE",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.38 8.11 16.21 3.73 Q 16.92 7.91 17.62 12.10 Q 18.78 12.60 19.94 13.10 Q 14.25 12.80 8.56 12.49 Z"
      }
    ]
  ]
};

export const SelectoSuspect = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.38 8.11 16.21 3.73 Q 16.92 7.91 17.62 12.10 Q 18.78 12.60 19.94 13.10 Q 14.25 12.80 8.56 12.49 Z" />
      {children}
    </svg>
  );
});

export default SelectoSuspect;
