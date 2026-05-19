import React from 'react';

export const iconData = {
  "id": "TaphoStew",
  "name": "TaphoStew",
  "category": "YT",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.95 7.51 L 17.10 15.01 L 11.91 21.13 L 6.84 14.91 L 4.14 7.36 L 12.06 6.08 Z"
      }
    ]
  ]
};

export const TaphoStew = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.95 7.51 L 17.10 15.01 L 11.91 21.13 L 6.84 14.91 L 4.14 7.36 L 12.06 6.08 Z" />
      {children}
    </svg>
  );
});

export default TaphoStew;
