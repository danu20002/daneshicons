import React from 'react';

export const iconData = {
  "id": "OleoGush",
  "name": "OleoGush",
  "category": "EZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.45 20.04 L 11.87 15.25 L 3.96 19.45 L 8.75 11.87 L 4.55 3.96 L 12.13 8.75 L 20.04 4.55 L 15.25 12.13 Z"
      }
    ]
  ]
};

export const OleoGush = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.45 20.04 L 11.87 15.25 L 3.96 19.45 L 8.75 11.87 L 4.55 3.96 L 12.13 8.75 L 20.04 4.55 L 15.25 12.13 Z" />
      {children}
    </svg>
  );
});

export default OleoGush;
