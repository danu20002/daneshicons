import React from 'react';

export const iconData = {
  "id": "TibioPlaster",
  "name": "TibioPlaster",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.07 4.86 L 16.11 11.00 L 20.67 15.56 L 14.22 15.60 L 11.29 21.35 L 9.26 15.22 L 2.89 14.21 L 8.09 10.39 L 7.08 4.02 L 12.32 7.78 Z"
      }
    ]
  ]
};

export const TibioPlaster = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.07 4.86 L 16.11 11.00 L 20.67 15.56 L 14.22 15.60 L 11.29 21.35 L 9.26 15.22 L 2.89 14.21 L 8.09 10.39 L 7.08 4.02 L 12.32 7.78 Z" />
      {children}
    </svg>
  );
});

export default TibioPlaster;
