import React from 'react';

export const iconData = {
  "id": "TestoLeisure",
  "name": "TestoLeisure",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.40 21.05 L 2.95 8.40 L 15.60 2.95 L 21.05 15.60 Z"
      }
    ]
  ]
};

export const TestoLeisure = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.40 21.05 L 2.95 8.40 L 15.60 2.95 L 21.05 15.60 Z" />
      {children}
    </svg>
  );
});

export default TestoLeisure;
