import React from 'react';

export const iconData = {
  "id": "SummoViolet",
  "name": "SummoViolet",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.73 16.15 L 12.77 21.63 L 4.05 17.48 L 3.27 7.85 L 11.23 2.37 L 19.95 6.52 Z"
      }
    ]
  ]
};

export const SummoViolet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.73 16.15 L 12.77 21.63 L 4.05 17.48 L 3.27 7.85 L 11.23 2.37 L 19.95 6.52 Z" />
      {children}
    </svg>
  );
});

export default SummoViolet;
