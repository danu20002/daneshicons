import React from 'react';

export const iconData = {
  "id": "UlulaUpgrade",
  "name": "UlulaUpgrade",
  "category": "TQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 15.18 2.97 L 14.34 9.99 L 21.41 10.24 L 14.91 13.03 L 18.23 19.27 L 12.57 15.03 L 8.82 21.03 L 9.66 14.01 L 2.59 13.76 L 9.09 10.97 L 5.77 4.73 L 11.43 8.97 Z"
      }
    ]
  ]
};

export const UlulaUpgrade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 15.18 2.97 L 14.34 9.99 L 21.41 10.24 L 14.91 13.03 L 18.23 19.27 L 12.57 15.03 L 8.82 21.03 L 9.66 14.01 L 2.59 13.76 L 9.09 10.97 L 5.77 4.73 L 11.43 8.97 Z" />
      {children}
    </svg>
  );
});

export default UlulaUpgrade;
