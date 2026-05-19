import React from 'react';

export const iconData = {
  "id": "OctoLimb",
  "name": "OctoLimb",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.90 3.84 L 14.11 3.12 L 19.32 6.55 L 21.11 12.53 L 18.64 18.27 L 13.06 21.07 L 6.98 19.63 L 3.25 14.62 L 3.62 8.38 Z"
      }
    ]
  ]
};

export const OctoLimb = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.90 3.84 L 14.11 3.12 L 19.32 6.55 L 21.11 12.53 L 18.64 18.27 L 13.06 21.07 L 6.98 19.63 L 3.25 14.62 L 3.62 8.38 Z" />
      {children}
    </svg>
  );
});

export default OctoLimb;
