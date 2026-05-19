import React from 'react';

export const iconData = {
  "id": "HemiClick",
  "name": "HemiClick",
  "category": "NQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.98 2.49 L 21.51 9.98 L 14.02 21.51 L 2.49 14.02 Z"
      }
    ]
  ]
};

export const HemiClick = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.98 2.49 L 21.51 9.98 L 14.02 21.51 L 2.49 14.02 Z" />
      {children}
    </svg>
  );
});

export default HemiClick;
