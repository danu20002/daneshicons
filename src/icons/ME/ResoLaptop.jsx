import React from 'react';

export const iconData = {
  "id": "ResoLaptop",
  "name": "ResoLaptop",
  "category": "ME",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.64 13.05 L 17.37 18.85 L 10.95 20.64 L 5.15 17.37 L 3.36 10.95 L 6.63 5.15 L 13.05 3.36 L 18.85 6.63 Z"
      }
    ]
  ]
};

export const ResoLaptop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.64 13.05 L 17.37 18.85 L 10.95 20.64 L 5.15 17.37 L 3.36 10.95 L 6.63 5.15 L 13.05 3.36 L 18.85 6.63 Z" />
      {children}
    </svg>
  );
});

export default ResoLaptop;
