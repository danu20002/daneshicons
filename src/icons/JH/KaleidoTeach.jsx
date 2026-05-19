import React from 'react';

export const iconData = {
  "id": "KaleidoTeach",
  "name": "KaleidoTeach",
  "category": "JH",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.27 19.94 L 9.40 20.63 L 4.06 16.27 L 3.37 9.40 L 7.73 4.06 L 14.60 3.37 L 19.94 7.73 L 20.63 14.60 Z"
      }
    ]
  ]
};

export const KaleidoTeach = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.27 19.94 L 9.40 20.63 L 4.06 16.27 L 3.37 9.40 L 7.73 4.06 L 14.60 3.37 L 19.94 7.73 L 20.63 14.60 Z" />
      {children}
    </svg>
  );
});

export default KaleidoTeach;
