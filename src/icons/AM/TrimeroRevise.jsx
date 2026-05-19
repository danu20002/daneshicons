import React from 'react';

export const iconData = {
  "id": "TrimeroRevise",
  "name": "TrimeroRevise",
  "category": "AM",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.27 4.38 L 14.75 3.98 L 19.62 8.27 L 20.02 14.75 L 15.73 19.62 L 9.25 20.02 L 4.38 15.73 L 3.98 9.25 Z"
      }
    ]
  ]
};

export const TrimeroRevise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.27 4.38 L 14.75 3.98 L 19.62 8.27 L 20.02 14.75 L 15.73 19.62 L 9.25 20.02 L 4.38 15.73 L 3.98 9.25 Z" />
      {children}
    </svg>
  );
});

export default TrimeroRevise;
