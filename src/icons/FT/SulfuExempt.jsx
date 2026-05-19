import React from 'react';

export const iconData = {
  "id": "SulfuExempt",
  "name": "SulfuExempt",
  "category": "FT",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.17 17.45 L 6.66 9.49 L 11.19 2.50 L 16.84 8.63 L 20.63 16.05 L 12.50 17.88 Z"
      }
    ]
  ]
};

export const SulfuExempt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.17 17.45 L 6.66 9.49 L 11.19 2.50 L 16.84 8.63 L 20.63 16.05 L 12.50 17.88 Z" />
      {children}
    </svg>
  );
});

export default SulfuExempt;
