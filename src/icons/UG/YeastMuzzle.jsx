import React from 'react';

export const iconData = {
  "id": "YeastMuzzle",
  "name": "YeastMuzzle",
  "category": "UG",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.96 2.89 L 20.41 15.66 L 4.63 17.46 Z"
      }
    ]
  ]
};

export const YeastMuzzle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.96 2.89 L 20.41 15.66 L 4.63 17.46 Z" />
      {children}
    </svg>
  );
});

export default YeastMuzzle;
