import React from 'react';

export const iconData = {
  "id": "StrobiloMantle",
  "name": "StrobiloMantle",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.22 18.85 L 2.46 14.82 L 14.32 2.33 Z"
      }
    ]
  ]
};

export const StrobiloMantle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.22 18.85 L 2.46 14.82 L 14.32 2.33 Z" />
      {children}
    </svg>
  );
});

export default StrobiloMantle;
