import React from 'react';

export const iconData = {
  "id": "FulgoDignity",
  "name": "FulgoDignity",
  "category": "HU",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.34 17.90 L 2.42 10.76 L 6.10 4.34 L 13.24 2.42 L 19.66 6.10 L 21.58 13.24 L 17.90 19.66 L 10.76 21.58 Z"
      }
    ]
  ]
};

export const FulgoDignity = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.34 17.90 L 2.42 10.76 L 6.10 4.34 L 13.24 2.42 L 19.66 6.10 L 21.58 13.24 L 17.90 19.66 L 10.76 21.58 Z" />
      {children}
    </svg>
  );
});

export default FulgoDignity;
