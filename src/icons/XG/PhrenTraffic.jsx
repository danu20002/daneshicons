import React from 'react';

export const iconData = {
  "id": "PhrenTraffic",
  "name": "PhrenTraffic",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.58 17.37 L 6.68 12.37 L 1.93 7.98 L 8.40 8.07 L 8.86 1.62 L 12.82 6.73 L 18.16 3.08 L 16.63 9.36 L 22.82 11.25 L 16.95 13.98 L 19.33 19.99 L 13.54 17.10 L 10.32 22.71 L 8.97 16.39 Z"
      }
    ]
  ]
};

export const PhrenTraffic = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.58 17.37 L 6.68 12.37 L 1.93 7.98 L 8.40 8.07 L 8.86 1.62 L 12.82 6.73 L 18.16 3.08 L 16.63 9.36 L 22.82 11.25 L 16.95 13.98 L 19.33 19.99 L 13.54 17.10 L 10.32 22.71 L 8.97 16.39 Z" />
      {children}
    </svg>
  );
});

export default PhrenTraffic;
