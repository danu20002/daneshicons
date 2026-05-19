import React from 'react';

export const iconData = {
  "id": "OxyClaim",
  "name": "OxyClaim",
  "category": "UY",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.61 20.66 L 7.72 19.97 L 3.34 14.61 L 4.03 7.72 L 9.39 3.34 L 16.28 4.03 L 20.66 9.39 L 19.97 16.28 Z"
      }
    ]
  ]
};

export const OxyClaim = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.61 20.66 L 7.72 19.97 L 3.34 14.61 L 4.03 7.72 L 9.39 3.34 L 16.28 4.03 L 20.66 9.39 L 19.97 16.28 Z" />
      {children}
    </svg>
  );
});

export default OxyClaim;
