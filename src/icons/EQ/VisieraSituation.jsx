import React from 'react';

export const iconData = {
  "id": "VisieraSituation",
  "name": "VisieraSituation",
  "category": "EQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.74 13.87 10.72 10.62 Q 10.89 8.96 11.07 7.30 Q 11.73 5.82 12.40 4.35 Q 11.62 10.88 10.84 17.41 Q 10.80 17.26 10.76 17.11 Z"
      }
    ]
  ]
};

export const VisieraSituation = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.74 13.87 10.72 10.62 Q 10.89 8.96 11.07 7.30 Q 11.73 5.82 12.40 4.35 Q 11.62 10.88 10.84 17.41 Q 10.80 17.26 10.76 17.11 Z" />
      {children}
    </svg>
  );
});

export default VisieraSituation;
