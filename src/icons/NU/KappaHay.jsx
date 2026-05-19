import React from 'react';

export const iconData = {
  "id": "KappaHay",
  "name": "KappaHay",
  "category": "NU",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.54 21.41 L 7.27 12.82 L 5.58 4.30 L 13.66 7.49 L 21.88 10.29 L 15.07 15.69 Z"
      }
    ]
  ]
};

export const KappaHay = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.54 21.41 L 7.27 12.82 L 5.58 4.30 L 13.66 7.49 L 21.88 10.29 L 15.07 15.69 Z" />
      {children}
    </svg>
  );
});

export default KappaHay;
