import React from 'react';

export const iconData = {
  "id": "SoloWaist",
  "name": "SoloWaist",
  "category": "YQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.68 8.31 L 10.32 3.98 L 17.22 5.68 L 20.20 12.14 L 17.00 18.50 L 10.04 19.96 L 4.55 15.43 Z"
      }
    ]
  ]
};

export const SoloWaist = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.68 8.31 L 10.32 3.98 L 17.22 5.68 L 20.20 12.14 L 17.00 18.50 L 10.04 19.96 L 4.55 15.43 Z" />
      {children}
    </svg>
  );
});

export default SoloWaist;
