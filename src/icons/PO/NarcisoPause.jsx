import React from 'react';

export const iconData = {
  "id": "NarcisoPause",
  "name": "NarcisoPause",
  "category": "PO",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.19 13.14 C 21.45 6.08, 8.87 16.61, 10.72 16.68"
      }
    ],
    [
      "path",
      {
        "d": "M 3.80 14.53 C 2.53 9.26, 6.28 14.89, 7.37 6.35"
      }
    ],
    [
      "path",
      {
        "d": "M 5.33 7.15 L 20.75 2.48 L 10.72 5.38"
      }
    ]
  ]
};

export const NarcisoPause = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.19 13.14 C 21.45 6.08, 8.87 16.61, 10.72 16.68" />
      <path d="M 3.80 14.53 C 2.53 9.26, 6.28 14.89, 7.37 6.35" />
      <path d="M 5.33 7.15 L 20.75 2.48 L 10.72 5.38" />
      {children}
    </svg>
  );
});

export default NarcisoPause;
