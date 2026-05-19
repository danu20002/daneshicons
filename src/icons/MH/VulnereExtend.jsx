import React from 'react';

export const iconData = {
  "id": "VulnereExtend",
  "name": "VulnereExtend",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.81 12.85 L 15.17 14.71 L 14.53 22.55 L 10.40 15.85 L 2.75 17.66 L 7.85 11.67 L 3.76 4.96 L 11.03 7.95 L 16.15 1.98 L 15.55 9.82 Z"
      }
    ]
  ]
};

export const VulnereExtend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.81 12.85 L 15.17 14.71 L 14.53 22.55 L 10.40 15.85 L 2.75 17.66 L 7.85 11.67 L 3.76 4.96 L 11.03 7.95 L 16.15 1.98 L 15.55 9.82 Z" />
      {children}
    </svg>
  );
});

export default VulnereExtend;
