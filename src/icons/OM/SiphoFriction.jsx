import React from 'react';

export const iconData = {
  "id": "SiphoFriction",
  "name": "SiphoFriction",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.84 11.74 L 7.17 9.04 L 7.15 3.07 L 12.15 6.33 L 17.31 3.34 L 16.98 9.30 L 22.16 12.26 L 16.83 14.96 L 16.85 20.93 L 11.85 17.67 L 6.69 20.66 L 7.02 14.70 Z"
      }
    ]
  ]
};

export const SiphoFriction = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.84 11.74 L 7.17 9.04 L 7.15 3.07 L 12.15 6.33 L 17.31 3.34 L 16.98 9.30 L 22.16 12.26 L 16.83 14.96 L 16.85 20.93 L 11.85 17.67 L 6.69 20.66 L 7.02 14.70 Z" />
      {children}
    </svg>
  );
});

export default SiphoFriction;
