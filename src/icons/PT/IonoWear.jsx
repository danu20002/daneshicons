import React from 'react';

export const iconData = {
  "id": "IonoWear",
  "name": "IonoWear",
  "category": "PT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.66 6.34 L 20.34 6.34 L 20.34 17.66 L 3.66 17.66 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.66 6.34 L 7.70 2.31 L 24.38 2.31 L 20.34 6.34"
      }
    ],
    [
      "path",
      {
        "d": "M 20.34 6.34 L 24.38 2.31 L 24.38 13.62 L 20.34 17.66"
      }
    ]
  ]
};

export const IonoWear = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.66 6.34 L 20.34 6.34 L 20.34 17.66 L 3.66 17.66 Z" />
      <path d="M 3.66 6.34 L 7.70 2.31 L 24.38 2.31 L 20.34 6.34" />
      <path d="M 20.34 6.34 L 24.38 2.31 L 24.38 13.62 L 20.34 17.66" />
      {children}
    </svg>
  );
});

export default IonoWear;
