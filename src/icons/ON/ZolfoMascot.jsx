import React from 'react';

export const iconData = {
  "id": "ZolfoMascot",
  "name": "ZolfoMascot",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.77 21.49 L 9.18 13.39 L 2.51 8.77 L 10.61 9.18 L 15.23 2.51 L 14.82 10.61 L 21.49 15.23 L 13.39 14.82 Z"
      }
    ]
  ]
};

export const ZolfoMascot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.77 21.49 L 9.18 13.39 L 2.51 8.77 L 10.61 9.18 L 15.23 2.51 L 14.82 10.61 L 21.49 15.23 L 13.39 14.82 Z" />
      {children}
    </svg>
  );
});

export default ZolfoMascot;
