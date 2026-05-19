import React from 'react';

export const iconData = {
  "id": "JatoTell",
  "name": "JatoTell",
  "category": "JG",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.74 18.20 L 8.18 20.33 L 2.90 10.95 L 10.19 3.02 L 19.98 7.50 Z"
      }
    ]
  ]
};

export const JatoTell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.74 18.20 L 8.18 20.33 L 2.90 10.95 L 10.19 3.02 L 19.98 7.50 Z" />
      {children}
    </svg>
  );
});

export default JatoTell;
