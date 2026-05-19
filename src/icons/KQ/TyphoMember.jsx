import React from 'react';

export const iconData = {
  "id": "TyphoMember",
  "name": "TyphoMember",
  "category": "KQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.04 6.03 L 20.96 6.03 L 20.96 17.97 L 3.04 17.97 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.04 6.03 L 6.34 2.73 L 24.27 2.73 L 20.96 6.03"
      }
    ],
    [
      "path",
      {
        "d": "M 20.96 6.03 L 24.27 2.73 L 24.27 14.66 L 20.96 17.97"
      }
    ]
  ]
};

export const TyphoMember = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.04 6.03 L 20.96 6.03 L 20.96 17.97 L 3.04 17.97 Z" />
      <path d="M 3.04 6.03 L 6.34 2.73 L 24.27 2.73 L 20.96 6.03" />
      <path d="M 20.96 6.03 L 24.27 2.73 L 24.27 14.66 L 20.96 17.97" />
      {children}
    </svg>
  );
});

export default TyphoMember;
