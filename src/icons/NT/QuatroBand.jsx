import React from 'react';

export const iconData = {
  "id": "QuatroBand",
  "name": "QuatroBand",
  "category": "NT",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.99 4.46 L 10.45 6.84 L 14.52 1.30 L 15.69 8.07 L 22.53 8.83 L 17.25 13.24 L 20.01 19.54 L 13.55 17.16 L 9.48 22.70 L 8.31 15.93 L 1.47 15.17 L 6.75 10.76 Z"
      }
    ]
  ]
};

export const QuatroBand = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.99 4.46 L 10.45 6.84 L 14.52 1.30 L 15.69 8.07 L 22.53 8.83 L 17.25 13.24 L 20.01 19.54 L 13.55 17.16 L 9.48 22.70 L 8.31 15.93 L 1.47 15.17 L 6.75 10.76 Z" />
      {children}
    </svg>
  );
});

export default QuatroBand;
