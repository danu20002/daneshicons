import React from 'react';

export const iconData = {
  "id": "FluxoStop",
  "name": "FluxoStop",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 18.43 20.08 L 11.65 15.10 L 3.92 18.43 L 8.90 11.65 L 5.57 3.92 L 12.35 8.90 L 20.08 5.57 L 15.10 12.35 Z"
      }
    ]
  ]
};

export const FluxoStop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 18.43 20.08 L 11.65 15.10 L 3.92 18.43 L 8.90 11.65 L 5.57 3.92 L 12.35 8.90 L 20.08 5.57 L 15.10 12.35 Z" />
      {children}
    </svg>
  );
});

export default FluxoStop;
