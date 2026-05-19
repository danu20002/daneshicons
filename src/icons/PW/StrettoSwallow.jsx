import React from 'react';

export const iconData = {
  "id": "StrettoSwallow",
  "name": "StrettoSwallow",
  "category": "PW",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.64 18.53 L 3.66 10.62 L 9.02 4.09 L 17.36 5.47 L 20.34 13.38 L 14.98 19.91 Z"
      }
    ]
  ]
};

export const StrettoSwallow = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.64 18.53 L 3.66 10.62 L 9.02 4.09 L 17.36 5.47 L 20.34 13.38 L 14.98 19.91 Z" />
      {children}
    </svg>
  );
});

export default StrettoSwallow;
