import React from 'react';

export const iconData = {
  "id": "SpicoHamper",
  "name": "SpicoHamper",
  "category": "BZ",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.67 17.25 L 10.62 3.89 L 19.71 14.86 Z"
      }
    ]
  ]
};

export const SpicoHamper = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.67 17.25 L 10.62 3.89 L 19.71 14.86 Z" />
      {children}
    </svg>
  );
});

export default SpicoHamper;
