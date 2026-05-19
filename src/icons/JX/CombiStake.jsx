import React from 'react';

export const iconData = {
  "id": "CombiStake",
  "name": "CombiStake",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.86 5.04 L 20.14 5.04 L 20.14 18.96 L 3.86 18.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.86 5.04 L 8.22 0.68 L 24.50 0.68 L 20.14 5.04"
      }
    ],
    [
      "path",
      {
        "d": "M 20.14 5.04 L 24.50 0.68 L 24.50 14.59 L 20.14 18.96"
      }
    ]
  ]
};

export const CombiStake = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.86 5.04 L 20.14 5.04 L 20.14 18.96 L 3.86 18.96 Z" />
      <path d="M 3.86 5.04 L 8.22 0.68 L 24.50 0.68 L 20.14 5.04" />
      <path d="M 20.14 5.04 L 24.50 0.68 L 24.50 14.59 L 20.14 18.96" />
      {children}
    </svg>
  );
});

export default CombiStake;
