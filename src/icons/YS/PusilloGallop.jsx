import React from 'react';

export const iconData = {
  "id": "PusilloGallop",
  "name": "PusilloGallop",
  "category": "YS",
  "nodes": [
    [
      "path",
      {
        "d": "M 1.63 9.52 L 8.73 8.18 L 11.15 1.37 L 14.62 7.71 L 21.85 7.91 L 16.89 13.17 L 18.93 20.10 L 12.40 17.01 L 6.44 21.10 L 7.36 13.93 Z"
      }
    ]
  ]
};

export const PusilloGallop = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 1.63 9.52 L 8.73 8.18 L 11.15 1.37 L 14.62 7.71 L 21.85 7.91 L 16.89 13.17 L 18.93 20.10 L 12.40 17.01 L 6.44 21.10 L 7.36 13.93 Z" />
      {children}
    </svg>
  );
});

export default PusilloGallop;
