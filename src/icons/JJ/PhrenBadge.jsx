import React from 'react';

export const iconData = {
  "id": "PhrenBadge",
  "name": "PhrenBadge",
  "category": "JJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.37 12.20 L 8.85 10.77 L 4.34 4.63 L 10.65 8.90 L 11.80 1.37 L 13.23 8.85 L 19.37 4.34 L 15.10 10.65 L 22.63 11.80 L 15.15 13.23 L 19.66 19.37 L 13.35 15.10 L 12.20 22.63 L 10.77 15.15 L 4.63 19.66 L 8.90 13.35 Z"
      }
    ]
  ]
};

export const PhrenBadge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.37 12.20 L 8.85 10.77 L 4.34 4.63 L 10.65 8.90 L 11.80 1.37 L 13.23 8.85 L 19.37 4.34 L 15.10 10.65 L 22.63 11.80 L 15.15 13.23 L 19.66 19.37 L 13.35 15.10 L 12.20 22.63 L 10.77 15.15 L 4.63 19.66 L 8.90 13.35 Z" />
      {children}
    </svg>
  );
});

export default PhrenBadge;
