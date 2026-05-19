import React from 'react';

export const iconData = {
  "id": "OleoWoven",
  "name": "OleoWoven",
  "category": "CB",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.16 8.71 L 16.61 12.48 L 20.28 17.11 L 14.50 15.91 L 13.17 21.66 L 10.50 16.39 L 5.17 18.94 L 7.64 13.57 L 2.32 10.99 L 8.05 9.56 L 6.76 3.80 L 11.44 7.40 L 15.14 2.79 L 15.25 8.69 Z"
      }
    ]
  ]
};

export const OleoWoven = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.16 8.71 L 16.61 12.48 L 20.28 17.11 L 14.50 15.91 L 13.17 21.66 L 10.50 16.39 L 5.17 18.94 L 7.64 13.57 L 2.32 10.99 L 8.05 9.56 L 6.76 3.80 L 11.44 7.40 L 15.14 2.79 L 15.25 8.69 Z" />
      {children}
    </svg>
  );
});

export default OleoWoven;
