import React from 'react';

export const iconData = {
  "id": "VedovoSane",
  "name": "VedovoSane",
  "category": "NR",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.35 8.38 L 15.62 19.35 L 4.65 15.62 L 8.38 4.65 Z"
      }
    ]
  ]
};

export const VedovoSane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.35 8.38 L 15.62 19.35 L 4.65 15.62 L 8.38 4.65 Z" />
      {children}
    </svg>
  );
});

export default VedovoSane;
