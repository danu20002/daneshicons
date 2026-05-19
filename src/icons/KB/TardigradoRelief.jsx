import React from 'react';

export const iconData = {
  "id": "TardigradoRelief",
  "name": "TardigradoRelief",
  "category": "KB",
  "nodes": [
    [
      "path",
      {
        "d": "M 10.60 3.79 L 17.54 5.79 L 20.31 12.46 L 16.82 18.79 L 9.70 20.00 L 4.31 15.19 L 4.71 7.98 Z"
      }
    ]
  ]
};

export const TardigradoRelief = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 10.60 3.79 L 17.54 5.79 L 20.31 12.46 L 16.82 18.79 L 9.70 20.00 L 4.31 15.19 L 4.71 7.98 Z" />
      {children}
    </svg>
  );
});

export default TardigradoRelief;
