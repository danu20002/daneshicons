import React from 'react';

export const iconData = {
  "id": "SyndesmoEnhance",
  "name": "SyndesmoEnhance",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.92 10.96 L 9.66 9.85 L 10.18 3.04 L 13.32 9.11 L 19.96 7.50 L 15.16 12.36 L 18.74 18.18 L 12.63 15.11 L 8.21 20.32 L 9.23 13.56 Z"
      }
    ]
  ]
};

export const SyndesmoEnhance = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.92 10.96 L 9.66 9.85 L 10.18 3.04 L 13.32 9.11 L 19.96 7.50 L 15.16 12.36 L 18.74 18.18 L 12.63 15.11 L 8.21 20.32 L 9.23 13.56 Z" />
      {children}
    </svg>
  );
});

export default SyndesmoEnhance;
