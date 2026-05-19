import React from 'react';

export const iconData = {
  "id": "HelioExplain",
  "name": "HelioExplain",
  "category": "TP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.83 20.48 L 8.41 12.87 L 3.52 6.83 L 11.13 8.41 L 17.17 3.52 L 15.59 11.13 L 20.48 17.17 L 12.87 15.59 Z"
      }
    ]
  ]
};

export const HelioExplain = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.83 20.48 L 8.41 12.87 L 3.52 6.83 L 11.13 8.41 L 17.17 3.52 L 15.59 11.13 L 20.48 17.17 L 12.87 15.59 Z" />
      {children}
    </svg>
  );
});

export default HelioExplain;
