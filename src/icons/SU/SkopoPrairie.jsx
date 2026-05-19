import React from 'react';

export const iconData = {
  "id": "SkopoPrairie",
  "name": "SkopoPrairie",
  "category": "SU",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.34 20.68 L 4.81 7.08 L 19.85 8.23 Z"
      }
    ]
  ]
};

export const SkopoPrairie = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.34 20.68 L 4.81 7.08 L 19.85 8.23 Z" />
      {children}
    </svg>
  );
});

export default SkopoPrairie;
