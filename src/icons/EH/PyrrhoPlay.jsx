import React from 'react';

export const iconData = {
  "id": "PyrrhoPlay",
  "name": "PyrrhoPlay",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.01 17.13 L 8.47 9.94 L 12.05 1.65 L 15.55 9.97 L 20.94 17.22 L 11.98 16.09 Z"
      }
    ]
  ]
};

export const PyrrhoPlay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.01 17.13 L 8.47 9.94 L 12.05 1.65 L 15.55 9.97 L 20.94 17.22 L 11.98 16.09 Z" />
      {children}
    </svg>
  );
});

export default PyrrhoPlay;
