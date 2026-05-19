import React from 'react';

export const iconData = {
  "id": "TachioElope",
  "name": "TachioElope",
  "category": "IR",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.13 4.09 L 15.15 11.33 L 19.91 17.13 L 12.67 15.15 L 6.87 19.91 L 8.85 12.67 L 4.09 6.87 L 11.33 8.85 Z"
      }
    ]
  ]
};

export const TachioElope = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.13 4.09 L 15.15 11.33 L 19.91 17.13 L 12.67 15.15 L 6.87 19.91 L 8.85 12.67 L 4.09 6.87 L 11.33 8.85 Z" />
      {children}
    </svg>
  );
});

export default TachioElope;
