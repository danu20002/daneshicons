import React from 'react';

export const iconData = {
  "id": "TestoStudy",
  "name": "TestoStudy",
  "category": "XW",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.72 8.41 L 9.64 3.28 L 17.34 4.72 L 21.02 11.64 L 17.91 18.83 L 10.34 20.88 L 4.03 16.24 Z"
      }
    ]
  ]
};

export const TestoStudy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.72 8.41 L 9.64 3.28 L 17.34 4.72 L 21.02 11.64 L 17.91 18.83 L 10.34 20.88 L 4.03 16.24 Z" />
      {children}
    </svg>
  );
});

export default TestoStudy;
