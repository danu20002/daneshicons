import React from 'react';

export const iconData = {
  "id": "FronoOctober",
  "name": "FronoOctober",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.46 19.29 L 10.73 20.45 L 5.59 17.66 L 3.45 12.22 L 5.31 6.67 L 10.30 3.62 L 16.08 4.49 L 19.96 8.87 L 20.11 14.72 Z"
      }
    ]
  ]
};

export const FronoOctober = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.46 19.29 L 10.73 20.45 L 5.59 17.66 L 3.45 12.22 L 5.31 6.67 L 10.30 3.62 L 16.08 4.49 L 19.96 8.87 L 20.11 14.72 Z" />
      {children}
    </svg>
  );
});

export default FronoOctober;
