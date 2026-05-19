import React from 'react';

export const iconData = {
  "id": "TaccoLow",
  "name": "TaccoLow",
  "category": "HC",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.92 11.90 L 7.63 19.77 L 7.45 4.33 Z"
      }
    ]
  ]
};

export const TaccoLow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.92 11.90 L 7.63 19.77 L 7.45 4.33 Z" />
      {children}
    </svg>
  );
});

export default TaccoLow;
