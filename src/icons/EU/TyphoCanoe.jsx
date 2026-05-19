import React from 'react';

export const iconData = {
  "id": "TyphoCanoe",
  "name": "TyphoCanoe",
  "category": "EU",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.67 6.63 L 20.33 6.63 L 20.33 17.37 L 3.67 17.37 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.67 6.63 L 7.39 2.91 L 24.05 2.91 L 20.33 6.63"
      }
    ],
    [
      "path",
      {
        "d": "M 20.33 6.63 L 24.05 2.91 L 24.05 13.65 L 20.33 17.37"
      }
    ]
  ]
};

export const TyphoCanoe = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.67 6.63 L 20.33 6.63 L 20.33 17.37 L 3.67 17.37 Z" />
      <path d="M 3.67 6.63 L 7.39 2.91 L 24.05 2.91 L 20.33 6.63" />
      <path d="M 20.33 6.63 L 24.05 2.91 L 24.05 13.65 L 20.33 17.37" />
      {children}
    </svg>
  );
});

export default TyphoCanoe;
