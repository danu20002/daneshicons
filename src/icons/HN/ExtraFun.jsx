import React from 'react';

export const iconData = {
  "id": "ExtraFun",
  "name": "ExtraFun",
  "category": "HN",
  "nodes": [
    [
      "path",
      {
        "d": "M 14.67 11.35 L 2.13 17.93"
      }
    ],
    [
      "path",
      {
        "d": "M 6.04 16.06 C 14.75 16.84, 21.32 8.92, 19.75 15.53"
      }
    ],
    [
      "path",
      {
        "d": "M 2.98 7.11 C 13.17 5.26, 8.70 7.38, 12.35 20.48"
      }
    ]
  ]
};

export const ExtraFun = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 14.67 11.35 L 2.13 17.93" />
      <path d="M 6.04 16.06 C 14.75 16.84, 21.32 8.92, 19.75 15.53" />
      <path d="M 2.98 7.11 C 13.17 5.26, 8.70 7.38, 12.35 20.48" />
      {children}
    </svg>
  );
});

export default ExtraFun;
