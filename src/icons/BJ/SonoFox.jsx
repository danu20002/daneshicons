import React from 'react';

export const iconData = {
  "id": "SonoFox",
  "name": "SonoFox",
  "category": "BJ",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.43 21.13 L 9.39 15.93 L 3.81 16.07 L 7.29 11.71 L 4.38 6.94 L 9.90 7.77 L 12.57 2.87 L 14.61 8.07 L 20.19 7.93 L 16.71 12.29 L 19.62 17.06 L 14.10 16.23 Z"
      }
    ]
  ]
};

export const SonoFox = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.43 21.13 L 9.39 15.93 L 3.81 16.07 L 7.29 11.71 L 4.38 6.94 L 9.90 7.77 L 12.57 2.87 L 14.61 8.07 L 20.19 7.93 L 16.71 12.29 L 19.62 17.06 L 14.10 16.23 Z" />
      {children}
    </svg>
  );
});

export default SonoFox;
