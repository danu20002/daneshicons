import React from 'react';

export const iconData = {
  "id": "TemperaRough",
  "name": "TemperaRough",
  "category": "ZU",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.33 7.03 L 20.66 14.76"
      }
    ],
    [
      "path",
      {
        "d": "M 19.33 7.92 L 8.78 18.63 L 2.39 19.34"
      }
    ]
  ]
};

export const TemperaRough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.33 7.03 L 20.66 14.76" />
      <path d="M 19.33 7.92 L 8.78 18.63 L 2.39 19.34" />
      {children}
    </svg>
  );
});

export default TemperaRough;
