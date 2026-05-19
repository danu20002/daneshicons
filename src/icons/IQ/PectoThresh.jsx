import React from 'react';

export const iconData = {
  "id": "PectoThresh",
  "name": "PectoThresh",
  "category": "IQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.72 21.35 L 8.15 15.62 L 2.65 11.72 L 8.38 8.15 L 12.28 2.65 L 15.85 8.38 L 21.35 12.28 L 15.62 15.85 Z"
      }
    ]
  ]
};

export const PectoThresh = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.72 21.35 L 8.15 15.62 L 2.65 11.72 L 8.38 8.15 L 12.28 2.65 L 15.85 8.38 L 21.35 12.28 L 15.62 15.85 Z" />
      {children}
    </svg>
  );
});

export default PectoThresh;
