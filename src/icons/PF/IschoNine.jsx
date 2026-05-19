import React from 'react';

export const iconData = {
  "id": "IschoNine",
  "name": "IschoNine",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.68 10.50 L 9.36 9.43 L 10.23 1.72 L 13.63 8.69 L 21.23 7.14 L 15.65 12.53 L 19.47 19.28 L 12.62 15.63 L 7.39 21.35 L 8.74 13.72 Z"
      }
    ]
  ]
};

export const IschoNine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.68 10.50 L 9.36 9.43 L 10.23 1.72 L 13.63 8.69 L 21.23 7.14 L 15.65 12.53 L 19.47 19.28 L 12.62 15.63 L 7.39 21.35 L 8.74 13.72 Z" />
      {children}
    </svg>
  );
});

export default IschoNine;
