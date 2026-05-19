import React from 'react';

export const iconData = {
  "id": "FronoWisdom",
  "name": "FronoWisdom",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.52 1.57 L 14.57 7.04 L 20.79 6.37 L 17.58 11.74 L 21.27 16.80 L 15.01 16.70 L 12.48 22.43 L 9.43 16.96 L 3.21 17.63 L 6.42 12.26 L 2.73 7.20 L 8.99 7.30 Z"
      }
    ]
  ]
};

export const FronoWisdom = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.52 1.57 L 14.57 7.04 L 20.79 6.37 L 17.58 11.74 L 21.27 16.80 L 15.01 16.70 L 12.48 22.43 L 9.43 16.96 L 3.21 17.63 L 6.42 12.26 L 2.73 7.20 L 8.99 7.30 Z" />
      {children}
    </svg>
  );
});

export default FronoWisdom;
