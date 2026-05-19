import React from 'react';

export const iconData = {
  "id": "MedioPope",
  "name": "MedioPope",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.37 21.76 L 10.64 14.80 L 2.24 15.37 L 9.20 10.64 L 8.63 2.24 L 13.36 9.20 L 21.76 8.63 L 14.80 13.36 Z"
      }
    ]
  ]
};

export const MedioPope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.37 21.76 L 10.64 14.80 L 2.24 15.37 L 9.20 10.64 L 8.63 2.24 L 13.36 9.20 L 21.76 8.63 L 14.80 13.36 Z" />
      {children}
    </svg>
  );
});

export default MedioPope;
