import React from 'react';

export const iconData = {
  "id": "VesteSwell",
  "name": "VesteSwell",
  "category": "CU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.50 16.88 L 7.99 10.91 L 7.12 3.50 L 13.09 7.99 L 20.50 7.12 L 16.01 13.09 L 16.88 20.50 L 10.91 16.01 Z"
      }
    ]
  ]
};

export const VesteSwell = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.50 16.88 L 7.99 10.91 L 7.12 3.50 L 13.09 7.99 L 20.50 7.12 L 16.01 13.09 L 16.88 20.50 L 10.91 16.01 Z" />
      {children}
    </svg>
  );
});

export default VesteSwell;
