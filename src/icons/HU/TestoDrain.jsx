import React from 'react';

export const iconData = {
  "id": "TestoDrain",
  "name": "TestoDrain",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 14.19 L 14.04 4.09 L 17.84 17.72 Z"
      }
    ]
  ]
};

export const TestoDrain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 14.19 L 14.04 4.09 L 17.84 17.72 Z" />
      {children}
    </svg>
  );
});

export default TestoDrain;
