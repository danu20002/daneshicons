import React from 'react';

export const iconData = {
  "id": "QuasiDigest",
  "name": "QuasiDigest",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.07 10.23 9.58 7.76 Q 13.55 9.63 17.52 11.50 Q 19.22 12.29 20.93 13.08 Q 17.75 12.89 14.57 12.69 Z"
      }
    ]
  ]
};

export const QuasiDigest = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.07 10.23 9.58 7.76 Q 13.55 9.63 17.52 11.50 Q 19.22 12.29 20.93 13.08 Q 17.75 12.89 14.57 12.69 Z" />
      {children}
    </svg>
  );
});

export default QuasiDigest;
