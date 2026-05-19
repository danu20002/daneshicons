import React from 'react';

export const iconData = {
  "id": "PigmentElastic",
  "name": "PigmentElastic",
  "category": "WL",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.30 5.66 L 11.75 2.78 L 18.34 5.30 L 21.22 11.75 L 18.70 18.34 L 12.25 21.22 L 5.66 18.70 L 2.78 12.25 Z"
      }
    ]
  ]
};

export const PigmentElastic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.30 5.66 L 11.75 2.78 L 18.34 5.30 L 21.22 11.75 L 18.70 18.34 L 12.25 21.22 L 5.66 18.70 L 2.78 12.25 Z" />
      {children}
    </svg>
  );
});

export default PigmentElastic;
