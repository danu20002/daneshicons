import React from 'react';

export const iconData = {
  "id": "SemiLogo",
  "name": "SemiLogo",
  "category": "ZG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.33 5.25 L 20.67 5.25 L 20.67 18.75 L 3.33 18.75 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.33 5.25 L 7.98 0.60 L 25.32 0.60 L 20.67 5.25"
      }
    ],
    [
      "path",
      {
        "d": "M 20.67 5.25 L 25.32 0.60 L 25.32 14.10 L 20.67 18.75"
      }
    ]
  ]
};

export const SemiLogo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.33 5.25 L 20.67 5.25 L 20.67 18.75 L 3.33 18.75 Z" />
      <path d="M 3.33 5.25 L 7.98 0.60 L 25.32 0.60 L 20.67 5.25" />
      <path d="M 20.67 5.25 L 25.32 0.60 L 25.32 14.10 L 20.67 18.75" />
      {children}
    </svg>
  );
});

export default SemiLogo;
