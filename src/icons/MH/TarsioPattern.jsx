import React from 'react';

export const iconData = {
  "id": "TarsioPattern",
  "name": "TarsioPattern",
  "category": "MH",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.27 15.09 L 8.28 11.18 L 4.46 5.12 L 10.85 8.37 L 14.18 2.03 L 14.57 9.19 L 21.73 8.91 L 15.72 12.82 L 19.54 18.88 L 13.15 15.63 L 9.82 21.97 L 9.43 14.81 Z"
      }
    ]
  ]
};

export const TarsioPattern = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.27 15.09 L 8.28 11.18 L 4.46 5.12 L 10.85 8.37 L 14.18 2.03 L 14.57 9.19 L 21.73 8.91 L 15.72 12.82 L 19.54 18.88 L 13.15 15.63 L 9.82 21.97 L 9.43 14.81 Z" />
      {children}
    </svg>
  );
});

export default TarsioPattern;
