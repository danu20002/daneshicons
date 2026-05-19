import React from 'react';

export const iconData = {
  "id": "SpinoPlump",
  "name": "SpinoPlump",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.33 17.69 L 3.23 8.20 L 10.91 2.51 L 19.67 6.31 L 20.77 15.80 L 13.09 21.49 Z"
      }
    ]
  ]
};

export const SpinoPlump = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.33 17.69 L 3.23 8.20 L 10.91 2.51 L 19.67 6.31 L 20.77 15.80 L 13.09 21.49 Z" />
      {children}
    </svg>
  );
});

export default SpinoPlump;
