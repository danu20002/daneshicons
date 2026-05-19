import React from 'react';

export const iconData = {
  "id": "LacunoTackle",
  "name": "LacunoTackle",
  "category": "XU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.03 5.67 L 20.97 5.67 L 20.97 18.33 L 3.03 18.33 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.03 5.67 L 6.25 2.45 L 24.20 2.45 L 20.97 5.67"
      }
    ],
    [
      "path",
      {
        "d": "M 20.97 5.67 L 24.20 2.45 L 24.20 15.11 L 20.97 18.33"
      }
    ]
  ]
};

export const LacunoTackle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.03 5.67 L 20.97 5.67 L 20.97 18.33 L 3.03 18.33 Z" />
      <path d="M 3.03 5.67 L 6.25 2.45 L 24.20 2.45 L 20.97 5.67" />
      <path d="M 20.97 5.67 L 24.20 2.45 L 24.20 15.11 L 20.97 18.33" />
      {children}
    </svg>
  );
});

export default LacunoTackle;
