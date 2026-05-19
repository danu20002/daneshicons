import React from 'react';

export const iconData = {
  "id": "NaturaPride",
  "name": "NaturaPride",
  "category": "VU",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.34 3.11 L 15.30 9.82 L 21.49 12.43 L 15.10 14.47 L 14.53 21.15 L 10.61 15.71 L 4.07 17.23 L 8.04 11.82 L 4.57 6.08 L 10.95 8.18 Z"
      }
    ]
  ]
};

export const NaturaPride = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.34 3.11 L 15.30 9.82 L 21.49 12.43 L 15.10 14.47 L 14.53 21.15 L 10.61 15.71 L 4.07 17.23 L 8.04 11.82 L 4.57 6.08 L 10.95 8.18 Z" />
      {children}
    </svg>
  );
});

export default NaturaPride;
