import React from 'react';

export const iconData = {
  "id": "TendoVein",
  "name": "TendoVein",
  "category": "EG",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.55 3.05 L 14.14 9.03 L 20.95 10.55 L 14.97 14.14 L 13.45 20.95 L 9.86 14.97 L 3.05 13.45 L 9.03 9.86 Z"
      }
    ]
  ]
};

export const TendoVein = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.55 3.05 L 14.14 9.03 L 20.95 10.55 L 14.97 14.14 L 13.45 20.95 L 9.86 14.97 L 3.05 13.45 L 9.03 9.86 Z" />
      {children}
    </svg>
  );
});

export default TendoVein;
