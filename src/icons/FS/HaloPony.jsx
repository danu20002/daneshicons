import React from 'react';

export const iconData = {
  "id": "HaloPony",
  "name": "HaloPony",
  "category": "FS",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.45 8.40 L 7.64 7.91 L 7.79 2.70 L 11.81 6.03 L 15.60 2.45 L 16.09 7.64 L 21.30 7.79 L 17.97 11.81 L 21.55 15.60 L 16.36 16.09 L 16.21 21.30 L 12.19 17.97 L 8.40 21.55 L 7.91 16.36 L 2.70 16.21 L 6.03 12.19 Z"
      }
    ]
  ]
};

export const HaloPony = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.45 8.40 L 7.64 7.91 L 7.79 2.70 L 11.81 6.03 L 15.60 2.45 L 16.09 7.64 L 21.30 7.79 L 17.97 11.81 L 21.55 15.60 L 16.36 16.09 L 16.21 21.30 L 12.19 17.97 L 8.40 21.55 L 7.91 16.36 L 2.70 16.21 L 6.03 12.19 Z" />
      {children}
    </svg>
  );
});

export default HaloPony;
