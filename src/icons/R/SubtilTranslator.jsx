import React from 'react';

export const iconData = {
  "id": "SubtilTranslator",
  "name": "SubtilTranslator",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.25 5.32 L 20.75 5.32 L 20.75 18.68 L 3.25 18.68 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.25 5.32 L 6.87 1.70 L 24.38 1.70 L 20.75 5.32"
      }
    ],
    [
      "path",
      {
        "d": "M 20.75 5.32 L 24.38 1.70 L 24.38 15.06 L 20.75 18.68"
      }
    ]
  ]
};

export const SubtilTranslator = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.25 5.32 L 20.75 5.32 L 20.75 18.68 L 3.25 18.68 Z" />
      <path d="M 3.25 5.32 L 6.87 1.70 L 24.38 1.70 L 20.75 5.32" />
      <path d="M 20.75 5.32 L 24.38 1.70 L 24.38 15.06 L 20.75 18.68" />
      {children}
    </svg>
  );
});

export default SubtilTranslator;
