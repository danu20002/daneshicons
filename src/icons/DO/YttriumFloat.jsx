import React from 'react';

export const iconData = {
  "id": "YttriumFloat",
  "name": "YttriumFloat",
  "category": "DO",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.51 3.85 L 12.07 8.36 L 16.81 4.04 L 15.19 10.24 L 21.30 12.19 L 15.11 13.88 L 16.49 20.15 L 11.93 15.64 L 7.19 19.96 L 8.81 13.76 L 2.70 11.81 L 8.89 10.12 Z"
      }
    ]
  ]
};

export const YttriumFloat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.51 3.85 L 12.07 8.36 L 16.81 4.04 L 15.19 10.24 L 21.30 12.19 L 15.11 13.88 L 16.49 20.15 L 11.93 15.64 L 7.19 19.96 L 8.81 13.76 L 2.70 11.81 L 8.89 10.12 Z" />
      {children}
    </svg>
  );
});

export default YttriumFloat;
