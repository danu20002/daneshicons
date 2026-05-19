import React from 'react';

export const iconData = {
  "id": "KiloSurvive",
  "name": "KiloSurvive",
  "category": "MY",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.99 6.28 L 11.80 3.70 L 17.72 5.99 L 20.30 11.80 L 18.01 17.72 L 12.20 20.30 L 6.28 18.01 L 3.70 12.20 Z"
      }
    ]
  ]
};

export const KiloSurvive = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.99 6.28 L 11.80 3.70 L 17.72 5.99 L 20.30 11.80 L 18.01 17.72 L 12.20 20.30 L 6.28 18.01 L 3.70 12.20 Z" />
      {children}
    </svg>
  );
});

export default KiloSurvive;
