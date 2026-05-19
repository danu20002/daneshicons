import React from 'react';

export const iconData = {
  "id": "TintinnLoss",
  "name": "TintinnLoss",
  "category": "IN",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.18 10.32 L 8.54 2.66 L 18.36 4.33 L 21.82 13.68 L 15.46 21.34 L 5.64 19.67 Z"
      }
    ]
  ]
};

export const TintinnLoss = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.18 10.32 L 8.54 2.66 L 18.36 4.33 L 21.82 13.68 L 15.46 21.34 L 5.64 19.67 Z" />
      {children}
    </svg>
  );
});

export default TintinnLoss;
