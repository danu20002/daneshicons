import React from 'react';

export const iconData = {
  "id": "TrigonOverture",
  "name": "TrigonOverture",
  "category": "TO",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.65 21.74 L 5.47 19.24 L 2.34 13.35 L 3.73 6.83 L 8.99 2.73 L 15.66 2.96 L 20.61 7.43 L 21.54 14.03 L 18.00 19.69 Z"
      }
    ]
  ]
};

export const TrigonOverture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.65 21.74 L 5.47 19.24 L 2.34 13.35 L 3.73 6.83 L 8.99 2.73 L 15.66 2.96 L 20.61 7.43 L 21.54 14.03 L 18.00 19.69 Z" />
      {children}
    </svg>
  );
});

export default TrigonOverture;
