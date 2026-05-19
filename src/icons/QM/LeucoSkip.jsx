import React from 'react';

export const iconData = {
  "id": "LeucoSkip",
  "name": "LeucoSkip",
  "category": "QM",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.71 5.66 L 19.29 5.66 L 19.29 18.34 L 4.71 18.34 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.71 5.66 L 8.28 2.08 L 22.86 2.08 L 19.29 5.66"
      }
    ],
    [
      "path",
      {
        "d": "M 19.29 5.66 L 22.86 2.08 L 22.86 14.77 L 19.29 18.34"
      }
    ]
  ]
};

export const LeucoSkip = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.71 5.66 L 19.29 5.66 L 19.29 18.34 L 4.71 18.34 Z" />
      <path d="M 4.71 5.66 L 8.28 2.08 L 22.86 2.08 L 19.29 5.66" />
      <path d="M 19.29 5.66 L 22.86 2.08 L 22.86 14.77 L 19.29 18.34" />
      {children}
    </svg>
  );
});

export default LeucoSkip;
