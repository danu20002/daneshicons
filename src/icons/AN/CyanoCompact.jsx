import React from 'react';

export const iconData = {
  "id": "CyanoCompact",
  "name": "CyanoCompact",
  "category": "AN",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.96 11.77 L 19.20 18.88 L 12.23 21.96 L 5.12 19.20 L 2.04 12.23 L 4.80 5.12 L 11.77 2.04 L 18.88 4.80 Z"
      }
    ]
  ]
};

export const CyanoCompact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.96 11.77 L 19.20 18.88 L 12.23 21.96 L 5.12 19.20 L 2.04 12.23 L 4.80 5.12 L 11.77 2.04 L 18.88 4.80 Z" />
      {children}
    </svg>
  );
});

export default CyanoCompact;
