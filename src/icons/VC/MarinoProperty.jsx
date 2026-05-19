import React from 'react';

export const iconData = {
  "id": "MarinoProperty",
  "name": "MarinoProperty",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.46 3.60 L 11.67 6.44 L 16.50 3.01 L 16.65 8.93 L 22.04 11.40 L 16.98 14.50 L 17.54 20.40 L 12.33 17.56 L 7.50 20.99 L 7.35 15.07 L 1.96 12.60 L 7.02 9.50 Z"
      }
    ]
  ]
};

export const MarinoProperty = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.46 3.60 L 11.67 6.44 L 16.50 3.01 L 16.65 8.93 L 22.04 11.40 L 16.98 14.50 L 17.54 20.40 L 12.33 17.56 L 7.50 20.99 L 7.35 15.07 L 1.96 12.60 L 7.02 9.50 Z" />
      {children}
    </svg>
  );
});

export default MarinoProperty;
