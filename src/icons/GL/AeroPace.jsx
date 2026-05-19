import React from 'react';

export const iconData = {
  "id": "AeroPace",
  "name": "AeroPace",
  "category": "GL",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.55 20.35 L 11.72 17.98 L 7.69 19.98 L 7.15 15.51 L 3.07 13.60 L 6.23 10.40 L 5.18 6.02 L 9.66 6.49 L 12.42 2.94 L 14.85 6.73 L 19.35 6.68 L 17.90 10.94 L 20.74 14.43 L 16.50 15.95 Z"
      }
    ]
  ]
};

export const AeroPace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.55 20.35 L 11.72 17.98 L 7.69 19.98 L 7.15 15.51 L 3.07 13.60 L 6.23 10.40 L 5.18 6.02 L 9.66 6.49 L 12.42 2.94 L 14.85 6.73 L 19.35 6.68 L 17.90 10.94 L 20.74 14.43 L 16.50 15.95 Z" />
      {children}
    </svg>
  );
});

export default AeroPace;
