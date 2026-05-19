import React from 'react';

export const iconData = {
  "id": "VeraceSupport",
  "name": "VeraceSupport",
  "category": "HX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.50 5.34 L 17.32 10.52 L 22.72 13.30 L 16.81 14.71 L 18.66 20.50 L 13.48 17.32 L 10.70 22.72 L 9.29 16.81 L 3.50 18.66 L 6.68 13.48 L 1.28 10.70 L 7.19 9.29 L 5.34 3.50 L 10.52 6.68 L 13.30 1.28 L 14.71 7.19 Z"
      }
    ]
  ]
};

export const VeraceSupport = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.50 5.34 L 17.32 10.52 L 22.72 13.30 L 16.81 14.71 L 18.66 20.50 L 13.48 17.32 L 10.70 22.72 L 9.29 16.81 L 3.50 18.66 L 6.68 13.48 L 1.28 10.70 L 7.19 9.29 L 5.34 3.50 L 10.52 6.68 L 13.30 1.28 L 14.71 7.19 Z" />
      {children}
    </svg>
  );
});

export default VeraceSupport;
