import React from 'react';

export const iconData = {
  "id": "SegnoSinger",
  "name": "SegnoSinger",
  "category": "PZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.13 7.55 L 11.97 8.95 L 19.79 7.41 L 14.65 13.50 L 12.08 21.04 L 9.37 13.55 Z"
      }
    ]
  ]
};

export const SegnoSinger = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.13 7.55 L 11.97 8.95 L 19.79 7.41 L 14.65 13.50 L 12.08 21.04 L 9.37 13.55 Z" />
      {children}
    </svg>
  );
});

export default SegnoSinger;
