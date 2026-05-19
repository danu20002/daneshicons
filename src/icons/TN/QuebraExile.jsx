import React from 'react';

export const iconData = {
  "id": "QuebraExile",
  "name": "QuebraExile",
  "category": "TN",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.72 10.95 L 17.27 19.03 L 8.55 20.07 L 3.28 13.05 L 6.73 4.97 L 15.45 3.93 Z"
      }
    ]
  ]
};

export const QuebraExile = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.72 10.95 L 17.27 19.03 L 8.55 20.07 L 3.28 13.05 L 6.73 4.97 L 15.45 3.93 Z" />
      {children}
    </svg>
  );
});

export default QuebraExile;
