import React from 'react';

export const iconData = {
  "id": "VogliaSqueak",
  "name": "VogliaSqueak",
  "category": "AQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 9.65 1.85 L 14.56 9.62 L 21.96 15.04 L 12.79 15.41 L 4.38 19.11 L 8.66 10.98 Z"
      }
    ]
  ]
};

export const VogliaSqueak = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 9.65 1.85 L 14.56 9.62 L 21.96 15.04 L 12.79 15.41 L 4.38 19.11 L 8.66 10.98 Z" />
      {children}
    </svg>
  );
});

export default VogliaSqueak;
