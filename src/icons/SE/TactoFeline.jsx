import React from 'react';

export const iconData = {
  "id": "TactoFeline",
  "name": "TactoFeline",
  "category": "SE",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.05 21.64 L 8.45 16.41 L 2.36 13.05 L 7.59 8.45 L 10.95 2.36 L 15.55 7.59 L 21.64 10.95 L 16.41 15.55 Z"
      }
    ]
  ]
};

export const TactoFeline = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.05 21.64 L 8.45 16.41 L 2.36 13.05 L 7.59 8.45 L 10.95 2.36 L 15.55 7.59 L 21.64 10.95 L 16.41 15.55 Z" />
      {children}
    </svg>
  );
});

export default TactoFeline;
