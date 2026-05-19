import React from 'react';

export const iconData = {
  "id": "SinoPretty",
  "name": "SinoPretty",
  "category": "ON",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.56 2.50 L 15.69 10.15 L 19.95 17.24 L 11.76 16.12 L 3.49 16.26 L 8.55 9.73 Z"
      }
    ]
  ]
};

export const SinoPretty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.56 2.50 L 15.69 10.15 L 19.95 17.24 L 11.76 16.12 L 3.49 16.26 L 8.55 9.73 Z" />
      {children}
    </svg>
  );
});

export default SinoPretty;
