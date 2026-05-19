import React from 'react';

export const iconData = {
  "id": "VertigoHaven",
  "name": "VertigoHaven",
  "category": "JR",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.42 10.04 L 12.42 10.04"
      }
    ],
    [
      "path",
      {
        "d": "M 15.49 9.88 L 13.49 13.35"
      }
    ],
    [
      "path",
      {
        "d": "M 12.09 16.08 L 10.09 12.62"
      }
    ]
  ]
};

export const VertigoHaven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.42 10.04 L 12.42 10.04" />
      <path d="M 15.49 9.88 L 13.49 13.35" />
      <path d="M 12.09 16.08 L 10.09 12.62" />
      {children}
    </svg>
  );
});

export default VertigoHaven;
