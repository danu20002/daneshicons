import React from 'react';

export const iconData = {
  "id": "VirgolaFrog",
  "name": "VirgolaFrog",
  "category": "VK",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.91 2.31 C 21.48 14.53, 16.67 9.56, 3.76 20.75"
      }
    ],
    [
      "path",
      {
        "d": "M 17.70 6.81 L 10.98 4.42 L 20.80 4.03 L 17.62 7.04 L 15.72 10.36 L 17.55 4.72 L 8.22 9.62"
      }
    ],
    [
      "path",
      {
        "d": "M 19.23 17.96 L 10.54 17.24"
      }
    ]
  ]
};

export const VirgolaFrog = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.91 2.31 C 21.48 14.53, 16.67 9.56, 3.76 20.75" />
      <path d="M 17.70 6.81 L 10.98 4.42 L 20.80 4.03 L 17.62 7.04 L 15.72 10.36 L 17.55 4.72 L 8.22 9.62" />
      <path d="M 19.23 17.96 L 10.54 17.24" />
      {children}
    </svg>
  );
});

export default VirgolaFrog;
