import React from 'react';

export const iconData = {
  "id": "PyrrhoLava",
  "name": "PyrrhoLava",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.22 7.76 L 10.46 3.27 L 17.87 5.36 L 20.85 12.45 L 17.17 19.20 L 9.60 20.53 L 3.83 15.44 Z"
      }
    ]
  ]
};

export const PyrrhoLava = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.22 7.76 L 10.46 3.27 L 17.87 5.36 L 20.85 12.45 L 17.17 19.20 L 9.60 20.53 L 3.83 15.44 Z" />
      {children}
    </svg>
  );
});

export default PyrrhoLava;
