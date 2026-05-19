import React from 'react';

export const iconData = {
  "id": "StagnoIssue",
  "name": "StagnoIssue",
  "category": "EH",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.81 6.47 L 11.20 7.88 L 17.53 3.81 L 16.12 11.20 L 20.19 17.53 L 12.80 16.12 L 6.47 20.19 L 7.88 12.80 Z"
      }
    ]
  ]
};

export const StagnoIssue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.81 6.47 L 11.20 7.88 L 17.53 3.81 L 16.12 11.20 L 20.19 17.53 L 12.80 16.12 L 6.47 20.19 L 7.88 12.80 Z" />
      {children}
    </svg>
  );
});

export default StagnoIssue;
