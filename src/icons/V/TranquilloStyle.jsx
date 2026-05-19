import React from 'react';

export const iconData = {
  "id": "TranquilloStyle",
  "name": "TranquilloStyle",
  "category": "V",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.20 19.86 L 8.70 19.82 L 4.14 15.20 L 4.18 8.70 L 8.80 4.14 L 15.30 4.18 L 19.86 8.80 L 19.82 15.30 Z"
      }
    ]
  ]
};

export const TranquilloStyle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.20 19.86 L 8.70 19.82 L 4.14 15.20 L 4.18 8.70 L 8.80 4.14 L 15.30 4.18 L 19.86 8.80 L 19.82 15.30 Z" />
      {children}
    </svg>
  );
});

export default TranquilloStyle;
