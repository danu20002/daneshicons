import React from 'react';

export const iconData = {
  "id": "VerboHaste",
  "name": "VerboHaste",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.69 4.84 L 12.53 3.10 L 18.13 5.53 L 20.85 10.98 L 19.44 16.91 L 14.54 20.54 L 8.46 20.18 L 4.03 15.99 L 3.33 9.93 Z"
      }
    ]
  ]
};

export const VerboHaste = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.69 4.84 L 12.53 3.10 L 18.13 5.53 L 20.85 10.98 L 19.44 16.91 L 14.54 20.54 L 8.46 20.18 L 4.03 15.99 L 3.33 9.93 Z" />
      {children}
    </svg>
  );
});

export default VerboHaste;
