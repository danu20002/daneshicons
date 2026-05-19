import React from 'react';

export const iconData = {
  "id": "SpectroSpace",
  "name": "SpectroSpace",
  "category": "PC",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.97 19.99 L 4.70 15.39 L 6.52 6.11 L 15.91 4.97 L 19.89 13.55 Z"
      }
    ]
  ]
};

export const SpectroSpace = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.97 19.99 L 4.70 15.39 L 6.52 6.11 L 15.91 4.97 L 19.89 13.55 Z" />
      {children}
    </svg>
  );
});

export default SpectroSpace;
