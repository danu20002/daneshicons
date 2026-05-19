import React from 'react';

export const iconData = {
  "id": "StrobiloFive",
  "name": "StrobiloFive",
  "category": "CS",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.74 3.76 L 18.51 6.79 L 19.77 15.03 L 13.26 20.24 L 5.49 17.21 L 4.23 8.97 Z"
      }
    ]
  ]
};

export const StrobiloFive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.74 3.76 L 18.51 6.79 L 19.77 15.03 L 13.26 20.24 L 5.49 17.21 L 4.23 8.97 Z" />
      {children}
    </svg>
  );
});

export default StrobiloFive;
