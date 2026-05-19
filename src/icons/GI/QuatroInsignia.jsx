import React from 'react';

export const iconData = {
  "id": "QuatroInsignia",
  "name": "QuatroInsignia",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.41 19.07 L 8.08 19.35 L 3.67 12.28 L 7.59 4.93 L 15.92 4.65 L 20.33 11.72 Z"
      }
    ]
  ]
};

export const QuatroInsignia = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.41 19.07 L 8.08 19.35 L 3.67 12.28 L 7.59 4.93 L 15.92 4.65 L 20.33 11.72 Z" />
      {children}
    </svg>
  );
});

export default QuatroInsignia;
