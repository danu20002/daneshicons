import React from 'react';

export const iconData = {
  "id": "RivoIgnite",
  "name": "RivoIgnite",
  "category": "ZM",
  "nodes": [
    [
      "path",
      {
        "d": "M 22.62 14.39 L 13.50 16.79 L 4.63 20.00 L 7.10 10.90 L 8.76 1.61 L 15.40 8.31 Z"
      }
    ]
  ]
};

export const RivoIgnite = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 22.62 14.39 L 13.50 16.79 L 4.63 20.00 L 7.10 10.90 L 8.76 1.61 L 15.40 8.31 Z" />
      {children}
    </svg>
  );
});

export default RivoIgnite;
