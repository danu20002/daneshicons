import React from 'react';

export const iconData = {
  "id": "TabulaSymptom",
  "name": "TabulaSymptom",
  "category": "FP",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.19 9.18 L 17.52 19.86 L 6.23 19.68 L 2.91 8.88 L 12.15 2.39 Z"
      }
    ]
  ]
};

export const TabulaSymptom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.19 9.18 L 17.52 19.86 L 6.23 19.68 L 2.91 8.88 L 12.15 2.39 Z" />
      {children}
    </svg>
  );
});

export default TabulaSymptom;
