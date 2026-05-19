import React from 'react';

export const iconData = {
  "id": "OlympoXenon",
  "name": "OlympoXenon",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.37 18.67 L 11.11 16.17 L 2.54 15.05 L 8.84 9.14 L 14.09 2.28 L 16.06 10.69 Z"
      }
    ]
  ]
};

export const OlympoXenon = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.37 18.67 L 11.11 16.17 L 2.54 15.05 L 8.84 9.14 L 14.09 2.28 L 16.06 10.69 Z" />
      {children}
    </svg>
  );
});

export default OlympoXenon;
