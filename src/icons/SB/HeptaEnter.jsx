import React from 'react';

export const iconData = {
  "id": "HeptaEnter",
  "name": "HeptaEnter",
  "category": "SB",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.19 19.48 L 8.76 19.93 L 3.78 14.42 L 4.99 7.08 L 11.47 3.45 L 18.36 6.26 L 20.45 13.39 Z"
      }
    ]
  ]
};

export const HeptaEnter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.19 19.48 L 8.76 19.93 L 3.78 14.42 L 4.99 7.08 L 11.47 3.45 L 18.36 6.26 L 20.45 13.39 Z" />
      {children}
    </svg>
  );
});

export default HeptaEnter;
