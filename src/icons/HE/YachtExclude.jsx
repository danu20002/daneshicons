import React from 'react';

export const iconData = {
  "id": "YachtExclude",
  "name": "YachtExclude",
  "category": "HE",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.70 21.50 L 9.53 14.32 L 2.50 11.70 L 9.68 9.53 L 12.30 2.50 L 14.47 9.68 L 21.50 12.30 L 14.32 14.47 Z"
      }
    ]
  ]
};

export const YachtExclude = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.70 21.50 L 9.53 14.32 L 2.50 11.70 L 9.68 9.53 L 12.30 2.50 L 14.47 9.68 L 21.50 12.30 L 14.32 14.47 Z" />
      {children}
    </svg>
  );
});

export default YachtExclude;
