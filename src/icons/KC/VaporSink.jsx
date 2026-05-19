import React from 'react';

export const iconData = {
  "id": "VaporSink",
  "name": "VaporSink",
  "category": "KC",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.24 12.61 L 16.79 14.32 L 18.81 19.67 L 13.74 17.03 L 11.39 22.24 L 9.68 16.79 L 4.33 18.81 L 6.97 13.74 L 1.76 11.39 L 7.21 9.68 L 5.19 4.33 L 10.26 6.97 L 12.61 1.76 L 14.32 7.21 L 19.67 5.19 L 17.03 10.26 Z"
      }
    ]
  ]
};

export const VaporSink = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.24 12.61 L 16.79 14.32 L 18.81 19.67 L 13.74 17.03 L 11.39 22.24 L 9.68 16.79 L 4.33 18.81 L 6.97 13.74 L 1.76 11.39 L 7.21 9.68 L 5.19 4.33 L 10.26 6.97 L 12.61 1.76 L 14.32 7.21 L 19.67 5.19 L 17.03 10.26 Z" />
      {children}
    </svg>
  );
});

export default VaporSink;
