import React from 'react';

export const iconData = {
  "id": "DensoLotion",
  "name": "DensoLotion",
  "category": "LO",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.60 18.96 L 13.76 17.57 L 9.77 22.06 L 8.06 16.31 L 2.17 15.10 L 6.30 10.74 L 4.40 5.04 L 10.24 6.43 L 14.23 1.94 L 15.94 7.69 L 21.83 8.90 L 17.70 13.26 Z"
      }
    ]
  ]
};

export const DensoLotion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.60 18.96 L 13.76 17.57 L 9.77 22.06 L 8.06 16.31 L 2.17 15.10 L 6.30 10.74 L 4.40 5.04 L 10.24 6.43 L 14.23 1.94 L 15.94 7.69 L 21.83 8.90 L 17.70 13.26 Z" />
      {children}
    </svg>
  );
});

export default DensoLotion;
