import React from 'react';

export const iconData = {
  "id": "SpiralPlatter",
  "name": "SpiralPlatter",
  "category": "EE",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.23 14.47 L 9.53 4.23 L 19.77 9.53 L 14.47 19.77 Z"
      }
    ]
  ]
};

export const SpiralPlatter = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.23 14.47 L 9.53 4.23 L 19.77 9.53 L 14.47 19.77 Z" />
      {children}
    </svg>
  );
});

export default SpiralPlatter;
