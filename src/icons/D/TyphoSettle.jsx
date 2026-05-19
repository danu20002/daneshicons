import React from 'react';

export const iconData = {
  "id": "TyphoSettle",
  "name": "TyphoSettle",
  "category": "D",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.34 12.09 L 8.82 9.73 L 8.93 2.84 L 13.17 8.28 L 19.77 6.25 L 15.90 11.96 L 19.87 17.61 L 13.24 15.70 L 9.10 21.22 L 8.86 14.32 Z"
      }
    ]
  ]
};

export const TyphoSettle = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.34 12.09 L 8.82 9.73 L 8.93 2.84 L 13.17 8.28 L 19.77 6.25 L 15.90 11.96 L 19.87 17.61 L 13.24 15.70 L 9.10 21.22 L 8.86 14.32 Z" />
      {children}
    </svg>
  );
});

export default TyphoSettle;
