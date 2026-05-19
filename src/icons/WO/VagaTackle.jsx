import React from 'react';

export const iconData = {
  "id": "VagaTackle",
  "name": "VagaTackle",
  "category": "WO",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.09 20.99 L 10.83 15.13 L 3.01 16.09 L 8.87 10.83 L 7.91 3.01 L 13.17 8.87 L 20.99 7.91 L 15.13 13.17 Z"
      }
    ]
  ]
};

export const VagaTackle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.09 20.99 L 10.83 15.13 L 3.01 16.09 L 8.87 10.83 L 7.91 3.01 L 13.17 8.87 L 20.99 7.91 L 15.13 13.17 Z" />
      {children}
    </svg>
  );
});

export default VagaTackle;
