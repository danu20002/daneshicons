import React from 'react';

export const iconData = {
  "id": "TutoreWhite",
  "name": "TutoreWhite",
  "category": "DI",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.81 6.19 L 19.19 6.19 L 19.19 17.81 L 4.81 17.81 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 4.81 6.19 L 8.15 2.86 L 22.53 2.86 L 19.19 6.19"
      }
    ],
    [
      "path",
      {
        "d": "M 19.19 6.19 L 22.53 2.86 L 22.53 14.47 L 19.19 17.81"
      }
    ]
  ]
};

export const TutoreWhite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.81 6.19 L 19.19 6.19 L 19.19 17.81 L 4.81 17.81 Z" />
      <path d="M 4.81 6.19 L 8.15 2.86 L 22.53 2.86 L 19.19 6.19" />
      <path d="M 19.19 6.19 L 22.53 2.86 L 22.53 14.47 L 19.19 17.81" />
      {children}
    </svg>
  );
});

export default TutoreWhite;
