import React from 'react';

export const iconData = {
  "id": "StrobiloSouth",
  "name": "StrobiloSouth",
  "category": "BI",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.31 16.27 L 6.48 11.40 L 3.46 5.75 L 9.76 6.92 L 13.14 1.47 L 15.28 7.52 L 21.69 7.73 L 17.52 12.60 L 20.54 18.25 L 14.24 17.08 L 10.86 22.53 L 8.72 16.48 Z"
      }
    ]
  ]
};

export const StrobiloSouth = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.31 16.27 L 6.48 11.40 L 3.46 5.75 L 9.76 6.92 L 13.14 1.47 L 15.28 7.52 L 21.69 7.73 L 17.52 12.60 L 20.54 18.25 L 14.24 17.08 L 10.86 22.53 L 8.72 16.48 Z" />
      {children}
    </svg>
  );
});

export default StrobiloSouth;
