import React from 'react';

export const iconData = {
  "id": "TaccoSize",
  "name": "TaccoSize",
  "category": "SX",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.16 17.40 L 13.42 15.80 L 9.39 21.43 L 8.83 14.53 L 2.23 12.43 L 8.62 9.76 L 8.57 2.84 L 13.08 8.09 L 19.65 5.91 L 16.05 11.82 Z"
      }
    ]
  ]
};

export const TaccoSize = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.16 17.40 L 13.42 15.80 L 9.39 21.43 L 8.83 14.53 L 2.23 12.43 L 8.62 9.76 L 8.57 2.84 L 13.08 8.09 L 19.65 5.91 L 16.05 11.82 Z" />
      {children}
    </svg>
  );
});

export default TaccoSize;
