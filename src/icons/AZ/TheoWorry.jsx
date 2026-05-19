import React from 'react';

export const iconData = {
  "id": "TheoWorry",
  "name": "TheoWorry",
  "category": "AZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.00 2.76 L 18.54 12.00 L 12.00 21.24 L 5.46 12.00 Z"
      }
    ]
  ]
};

export const TheoWorry = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.00 2.76 L 18.54 12.00 L 12.00 21.24 L 5.46 12.00 Z" />
      {children}
    </svg>
  );
});

export default TheoWorry;
