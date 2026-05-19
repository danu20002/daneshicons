import React from 'react';

export const iconData = {
  "id": "SulfuFact",
  "name": "SulfuFact",
  "category": "OM",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.00 2.49 L 11.79 6.05 L 16.32 2.16 L 16.52 8.13 L 22.39 9.24 L 17.85 13.12 L 20.63 18.40 L 14.77 17.27 L 12.38 22.74 L 9.61 17.45 L 3.84 18.99 L 6.25 13.53 L 1.45 9.98 L 7.22 8.45 Z"
      }
    ]
  ]
};

export const SulfuFact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.00 2.49 L 11.79 6.05 L 16.32 2.16 L 16.52 8.13 L 22.39 9.24 L 17.85 13.12 L 20.63 18.40 L 14.77 17.27 L 12.38 22.74 L 9.61 17.45 L 3.84 18.99 L 6.25 13.53 L 1.45 9.98 L 7.22 8.45 Z" />
      {children}
    </svg>
  );
});

export default SulfuFact;
