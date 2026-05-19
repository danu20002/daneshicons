import React from 'react';

export const iconData = {
  "id": "SpanoGong",
  "name": "SpanoGong",
  "category": "HB",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.74 20.38 L 7.78 20.15 L 3.00 13.78 L 5.00 6.07 L 12.27 2.83 L 19.34 6.49 L 20.88 14.30 Z"
      }
    ]
  ]
};

export const SpanoGong = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.74 20.38 L 7.78 20.15 L 3.00 13.78 L 5.00 6.07 L 12.27 2.83 L 19.34 6.49 L 20.88 14.30 Z" />
      {children}
    </svg>
  );
});

export default SpanoGong;
