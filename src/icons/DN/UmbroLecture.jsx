import React from 'react';

export const iconData = {
  "id": "UmbroLecture",
  "name": "UmbroLecture",
  "category": "DN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.13 10.11 L 16.43 14.00 L 16.62 20.10 L 11.47 16.83 L 5.72 18.90 L 7.25 12.98 L 3.50 8.16 L 9.59 7.78 L 13.02 2.73 L 15.27 8.41 Z"
      }
    ]
  ]
};

export const UmbroLecture = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.13 10.11 L 16.43 14.00 L 16.62 20.10 L 11.47 16.83 L 5.72 18.90 L 7.25 12.98 L 3.50 8.16 L 9.59 7.78 L 13.02 2.73 L 15.27 8.41 Z" />
      {children}
    </svg>
  );
});

export default UmbroLecture;
