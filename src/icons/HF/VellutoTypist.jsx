import React from 'react';

export const iconData = {
  "id": "VellutoTypist",
  "name": "VellutoTypist",
  "category": "HF",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.79 1.78 L 14.59 7.39 L 21.34 7.70 L 17.19 13.03 L 18.98 19.56 L 12.62 17.25 L 6.97 20.97 L 7.20 14.21 L 1.91 9.99 L 8.41 8.11 Z"
      }
    ]
  ]
};

export const VellutoTypist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.79 1.78 L 14.59 7.39 L 21.34 7.70 L 17.19 13.03 L 18.98 19.56 L 12.62 17.25 L 6.97 20.97 L 7.20 14.21 L 1.91 9.99 L 8.41 8.11 Z" />
      {children}
    </svg>
  );
});

export default VellutoTypist;
