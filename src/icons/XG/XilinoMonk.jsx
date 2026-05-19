import React from 'react';

export const iconData = {
  "id": "XilinoMonk",
  "name": "XilinoMonk",
  "category": "XG",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.53 9.48 L 14.97 12.40 L 20.53 16.96 L 13.82 14.39 L 14.52 21.53 L 11.60 14.97 L 7.04 20.53 L 9.61 13.82 L 2.47 14.52 L 9.03 11.60 L 3.47 7.04 L 10.18 9.61 L 9.48 2.47 L 12.40 9.03 L 16.96 3.47 L 14.39 10.18 Z"
      }
    ]
  ]
};

export const XilinoMonk = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.53 9.48 L 14.97 12.40 L 20.53 16.96 L 13.82 14.39 L 14.52 21.53 L 11.60 14.97 L 7.04 20.53 L 9.61 13.82 L 2.47 14.52 L 9.03 11.60 L 3.47 7.04 L 10.18 9.61 L 9.48 2.47 L 12.40 9.03 L 16.96 3.47 L 14.39 10.18 Z" />
      {children}
    </svg>
  );
});

export default XilinoMonk;
