import React from 'react';

export const iconData = {
  "id": "QuiesRecall",
  "name": "QuiesRecall",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.57 8.97 L 9.85 9.23 L 11.65 1.14 L 13.97 9.10 L 22.22 8.32 L 15.36 12.98 L 18.66 20.58 L 12.11 15.50 L 5.90 20.99 L 8.71 13.19 Z"
      }
    ]
  ]
};

export const QuiesRecall = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.57 8.97 L 9.85 9.23 L 11.65 1.14 L 13.97 9.10 L 22.22 8.32 L 15.36 12.98 L 18.66 20.58 L 12.11 15.50 L 5.90 20.99 L 8.71 13.19 Z" />
      {children}
    </svg>
  );
});

export default QuiesRecall;
