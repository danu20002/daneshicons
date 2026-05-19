import React from 'react';

export const iconData = {
  "id": "UrpinoScar",
  "name": "UrpinoScar",
  "category": "JA",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.33 9.28 19.45 5.21 Q 19.97 9.46 20.49 13.72 Q 17.78 16.21 15.07 18.70 Q 13.50 18.76 11.94 18.83 Q 7.58 16.09 3.22 13.35 Z"
      }
    ]
  ]
};

export const UrpinoScar = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.33 9.28 19.45 5.21 Q 19.97 9.46 20.49 13.72 Q 17.78 16.21 15.07 18.70 Q 13.50 18.76 11.94 18.83 Q 7.58 16.09 3.22 13.35 Z" />
      {children}
    </svg>
  );
});

export default UrpinoScar;
