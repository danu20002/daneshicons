import React from 'react';

export const iconData = {
  "id": "SignoTemper",
  "name": "SignoTemper",
  "category": "EB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.10 6.04 L 19.90 6.04 L 19.90 17.96 L 4.10 17.96 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.10 6.04 L 7.65 2.49 L 23.45 2.49 L 19.90 6.04"
      }
    ],
    [
      "path",
      {
        "d": "M 19.90 6.04 L 23.45 2.49 L 23.45 14.41 L 19.90 17.96"
      }
    ]
  ]
};

export const SignoTemper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.10 6.04 L 19.90 6.04 L 19.90 17.96 L 4.10 17.96 Z" />
      <path d="M 4.10 6.04 L 7.65 2.49 L 23.45 2.49 L 19.90 6.04" />
      <path d="M 19.90 6.04 L 23.45 2.49 L 23.45 14.41 L 19.90 17.96" />
      {children}
    </svg>
  );
});

export default SignoTemper;
