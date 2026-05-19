import React from 'react';

export const iconData = {
  "id": "SextoPretend",
  "name": "SextoPretend",
  "category": "XH",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.45 21.77 L 6.20 13.03 L 5.32 4.04 L 14.01 6.46 L 22.23 10.19 L 15.79 16.51 Z"
      }
    ]
  ]
};

export const SextoPretend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.45 21.77 L 6.20 13.03 L 5.32 4.04 L 14.01 6.46 L 22.23 10.19 L 15.79 16.51 Z" />
      {children}
    </svg>
  );
});

export default SextoPretend;
