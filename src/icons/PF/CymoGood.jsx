import React from 'react';

export const iconData = {
  "id": "CymoGood",
  "name": "CymoGood",
  "category": "PF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.27 3.33 L 10.98 7.23 L 14.59 1.33 L 15.09 8.23 L 21.95 7.37 L 16.88 12.07 L 21.83 16.90 L 14.99 15.86 L 14.30 22.73 L 10.85 16.74 L 5.04 20.49 L 7.57 14.06 L 1.02 11.85 L 7.63 9.82 Z"
      }
    ]
  ]
};

export const CymoGood = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.27 3.33 L 10.98 7.23 L 14.59 1.33 L 15.09 8.23 L 21.95 7.37 L 16.88 12.07 L 21.83 16.90 L 14.99 15.86 L 14.30 22.73 L 10.85 16.74 L 5.04 20.49 L 7.57 14.06 L 1.02 11.85 L 7.63 9.82 Z" />
      {children}
    </svg>
  );
});

export default CymoGood;
