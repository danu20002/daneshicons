import React from 'react';

export const iconData = {
  "id": "ZampinoMerry",
  "name": "ZampinoMerry",
  "category": "KW",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.15 3.20 L 16.23 10.77 L 18.54 18.26 L 10.95 16.28 L 3.31 14.54 L 8.82 8.96 Z"
      }
    ]
  ]
};

export const ZampinoMerry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.15 3.20 L 16.23 10.77 L 18.54 18.26 L 10.95 16.28 L 3.31 14.54 L 8.82 8.96 Z" />
      {children}
    </svg>
  );
});

export default ZampinoMerry;
