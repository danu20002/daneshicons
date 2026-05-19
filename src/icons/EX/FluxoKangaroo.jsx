import React from 'react';

export const iconData = {
  "id": "FluxoKangaroo",
  "name": "FluxoKangaroo",
  "category": "EX",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.70 18.70 L 5.30 16.70 L 7.30 5.30 L 18.70 7.30 Z"
      }
    ]
  ]
};

export const FluxoKangaroo = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.70 18.70 L 5.30 16.70 L 7.30 5.30 L 18.70 7.30 Z" />
      {children}
    </svg>
  );
});

export default FluxoKangaroo;
