import React from 'react';

export const iconData = {
  "id": "SpodoEject",
  "name": "SpodoEject",
  "category": "JX",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.52 5.35 L 20.48 5.35 L 20.48 18.65 L 3.52 18.65 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.52 5.35 L 6.81 2.07 L 23.76 2.07 L 20.48 5.35"
      }
    ],
    [
      "path",
      {
        "d": "M 20.48 5.35 L 23.76 2.07 L 23.76 15.37 L 20.48 18.65"
      }
    ]
  ]
};

export const SpodoEject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.52 5.35 L 20.48 5.35 L 20.48 18.65 L 3.52 18.65 Z" />
      <path d="M 3.52 5.35 L 6.81 2.07 L 23.76 2.07 L 20.48 5.35" />
      <path d="M 20.48 5.35 L 23.76 2.07 L 23.76 15.37 L 20.48 18.65" />
      {children}
    </svg>
  );
});

export default SpodoEject;
