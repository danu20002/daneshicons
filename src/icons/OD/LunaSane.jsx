import React from 'react';

export const iconData = {
  "id": "LunaSane",
  "name": "LunaSane",
  "category": "OD",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.28 11.97 3.20 5.50 Q 7.28 6.56 11.35 7.62 Q 12.49 8.84 13.63 10.07 Q 17.14 10.26 20.64 10.45 Q 18.84 14.89 17.05 19.32 Q 11.21 18.88 5.36 18.43 Z"
      }
    ]
  ]
};

export const LunaSane = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.28 11.97 3.20 5.50 Q 7.28 6.56 11.35 7.62 Q 12.49 8.84 13.63 10.07 Q 17.14 10.26 20.64 10.45 Q 18.84 14.89 17.05 19.32 Q 11.21 18.88 5.36 18.43 Z" />
      {children}
    </svg>
  );
});

export default LunaSane;
