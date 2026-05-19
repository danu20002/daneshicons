import React from 'react';

export const iconData = {
  "id": "VacuoStrong",
  "name": "VacuoStrong",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.25 7.63 L 16.83 13.73 L 16.37 21.25 L 10.27 16.83 L 2.75 16.37 L 7.17 10.27 L 7.63 2.75 L 13.73 7.17 Z"
      }
    ]
  ]
};

export const VacuoStrong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.25 7.63 L 16.83 13.73 L 16.37 21.25 L 10.27 16.83 L 2.75 16.37 L 7.17 10.27 L 7.63 2.75 L 13.73 7.17 Z" />
      {children}
    </svg>
  );
});

export default VacuoStrong;
