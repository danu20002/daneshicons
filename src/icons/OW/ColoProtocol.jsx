import React from 'react';

export const iconData = {
  "id": "ColoProtocol",
  "name": "ColoProtocol",
  "category": "OW",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.18 13.37 4.22 11.71 Q 3.99 10.97 3.75 10.22 Q 5.21 7.33 6.66 4.44 Q 12.84 7.78 19.01 11.12 Q 13.98 15.50 8.95 19.89 Q 9.55 17.46 10.14 15.03 Z"
      }
    ]
  ]
};

export const ColoProtocol = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.18 13.37 4.22 11.71 Q 3.99 10.97 3.75 10.22 Q 5.21 7.33 6.66 4.44 Q 12.84 7.78 19.01 11.12 Q 13.98 15.50 8.95 19.89 Q 9.55 17.46 10.14 15.03 Z" />
      {children}
    </svg>
  );
});

export default ColoProtocol;
