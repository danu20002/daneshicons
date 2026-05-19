import React from 'react';

export const iconData = {
  "id": "IllumiStitch",
  "name": "IllumiStitch",
  "category": "EF",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.57 12.19 L 16.62 20.38 L 7.05 20.19 L 2.43 11.81 L 7.38 3.62 L 16.95 3.81 Z"
      }
    ]
  ]
};

export const IllumiStitch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.57 12.19 L 16.62 20.38 L 7.05 20.19 L 2.43 11.81 L 7.38 3.62 L 16.95 3.81 Z" />
      {children}
    </svg>
  );
});

export default IllumiStitch;
