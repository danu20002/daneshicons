import React from 'react';

export const iconData = {
  "id": "YachtYogurt",
  "name": "YachtYogurt",
  "category": "WQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.84 12.00 a 2.16 2.16 0 1 0 4.32 0 a 2.16 2.16 0 1 0 -4.32 0"
      }
    ],
    [
      "path",
      {
        "d": "M 5.59 12.00 a 6.41 6.41 0 1 0 12.82 0 a 6.41 6.41 0 1 0 -12.82 0"
      }
    ]
  ]
};

export const YachtYogurt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.84 12.00 a 2.16 2.16 0 1 0 4.32 0 a 2.16 2.16 0 1 0 -4.32 0" />
      <path d="M 5.59 12.00 a 6.41 6.41 0 1 0 12.82 0 a 6.41 6.41 0 1 0 -12.82 0" />
      {children}
    </svg>
  );
});

export default YachtYogurt;
