import React from 'react';

export const iconData = {
  "id": "GlucoChasm",
  "name": "GlucoChasm",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.52 21.66 L 7.35 15.76 L 2.87 8.48 L 11.07 6.09 L 19.61 5.85 L 17.58 14.15 Z"
      }
    ]
  ]
};

export const GlucoChasm = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.52 21.66 L 7.35 15.76 L 2.87 8.48 L 11.07 6.09 L 19.61 5.85 L 17.58 14.15 Z" />
      {children}
    </svg>
  );
});

export default GlucoChasm;
