import React from 'react';

export const iconData = {
  "id": "TiliParrot",
  "name": "TiliParrot",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.13 2.10 L 16.12 8.86 L 22.64 10.63 L 16.78 13.99 L 18.51 20.53 L 12.66 17.14 L 7.87 21.90 L 7.88 15.14 L 1.36 13.37 L 7.22 10.01 L 5.49 3.47 L 11.34 6.86 Z"
      }
    ]
  ]
};

export const TiliParrot = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.13 2.10 L 16.12 8.86 L 22.64 10.63 L 16.78 13.99 L 18.51 20.53 L 12.66 17.14 L 7.87 21.90 L 7.88 15.14 L 1.36 13.37 L 7.22 10.01 L 5.49 3.47 L 11.34 6.86 Z" />
      {children}
    </svg>
  );
});

export default TiliParrot;
