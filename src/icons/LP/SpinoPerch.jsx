import React from 'react';

export const iconData = {
  "id": "SpinoPerch",
  "name": "SpinoPerch",
  "category": "LP",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.63 19.46 L 11.37 16.53 L 4.54 17.63 L 7.47 11.37 L 6.37 4.54 L 12.63 7.47 L 19.46 6.37 L 16.53 12.63 Z"
      }
    ]
  ]
};

export const SpinoPerch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.63 19.46 L 11.37 16.53 L 4.54 17.63 L 7.47 11.37 L 6.37 4.54 L 12.63 7.47 L 19.46 6.37 L 16.53 12.63 Z" />
      {children}
    </svg>
  );
});

export default SpinoPerch;
