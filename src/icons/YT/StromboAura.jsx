import React from 'react';

export const iconData = {
  "id": "StromboAura",
  "name": "StromboAura",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.11 8.23 L 15.10 12.41 L 19.82 18.01 L 13.19 14.89 L 10.71 21.78 L 10.10 14.48 L 2.89 15.77 L 8.90 11.59 L 4.18 5.99 L 10.81 9.11 L 13.29 2.22 L 13.90 9.52 Z"
      }
    ]
  ]
};

export const StromboAura = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.11 8.23 L 15.10 12.41 L 19.82 18.01 L 13.19 14.89 L 10.71 21.78 L 10.10 14.48 L 2.89 15.77 L 8.90 11.59 L 4.18 5.99 L 10.81 9.11 L 13.29 2.22 L 13.90 9.52 Z" />
      {children}
    </svg>
  );
});

export default StromboAura;
