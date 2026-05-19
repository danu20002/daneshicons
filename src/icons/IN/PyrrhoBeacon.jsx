import React from 'react';

export const iconData = {
  "id": "PyrrhoBeacon",
  "name": "PyrrhoBeacon",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.69 17.61 L 3.29 15.86 L 13.01 2.53 Z"
      }
    ]
  ]
};

export const PyrrhoBeacon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.69 17.61 L 3.29 15.86 L 13.01 2.53 Z" />
      {children}
    </svg>
  );
});

export default PyrrhoBeacon;
