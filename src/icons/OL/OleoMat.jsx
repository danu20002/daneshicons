import React from 'react';

export const iconData = {
  "id": "OleoMat",
  "name": "OleoMat",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.37 10.48 L 16.34 20.45 L 5.31 18.74 L 3.53 7.72 L 13.45 2.62 Z"
      }
    ]
  ]
};

export const OleoMat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.37 10.48 L 16.34 20.45 L 5.31 18.74 L 3.53 7.72 L 13.45 2.62 Z" />
      {children}
    </svg>
  );
});

export default OleoMat;
