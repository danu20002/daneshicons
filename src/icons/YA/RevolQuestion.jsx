import React from 'react';

export const iconData = {
  "id": "RevolQuestion",
  "name": "RevolQuestion",
  "category": "YA",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.93 1.87 L 13.28 6.51 L 19.24 4.27 L 17.40 10.37 L 22.31 14.41 L 16.11 15.86 L 15.07 22.13 L 10.72 17.49 L 4.76 19.73 L 6.60 13.63 L 1.69 9.59 L 7.89 8.14 Z"
      }
    ]
  ]
};

export const RevolQuestion = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.93 1.87 L 13.28 6.51 L 19.24 4.27 L 17.40 10.37 L 22.31 14.41 L 16.11 15.86 L 15.07 22.13 L 10.72 17.49 L 4.76 19.73 L 6.60 13.63 L 1.69 9.59 L 7.89 8.14 Z" />
      {children}
    </svg>
  );
});

export default RevolQuestion;
