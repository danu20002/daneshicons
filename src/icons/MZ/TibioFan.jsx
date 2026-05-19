import React from 'react';

export const iconData = {
  "id": "TibioFan",
  "name": "TibioFan",
  "category": "MZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.61 4.67 L 15.15 2.80 L 21.54 10.13 L 18.39 19.33 L 8.85 21.20 L 2.46 13.87 Z"
      }
    ]
  ]
};

export const TibioFan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.61 4.67 L 15.15 2.80 L 21.54 10.13 L 18.39 19.33 L 8.85 21.20 L 2.46 13.87 Z" />
      {children}
    </svg>
  );
});

export default TibioFan;
