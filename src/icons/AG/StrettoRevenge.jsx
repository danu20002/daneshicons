import React from 'react';

export const iconData = {
  "id": "StrettoRevenge",
  "name": "StrettoRevenge",
  "category": "AG",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.98 13.00 6.14 10.25 Q 5.01 8.13 3.88 6.02 Q 10.60 10.04 17.32 14.07 Q 14.57 14.91 11.82 15.76 Z"
      }
    ]
  ]
};

export const StrettoRevenge = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.98 13.00 6.14 10.25 Q 5.01 8.13 3.88 6.02 Q 10.60 10.04 17.32 14.07 Q 14.57 14.91 11.82 15.76 Z" />
      {children}
    </svg>
  );
});

export default StrettoRevenge;
