import React from 'react';

export const iconData = {
  "id": "VerismoOutlet",
  "name": "VerismoOutlet",
  "category": "VC",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.52 2.53 L 11.99 6.22 L 17.46 2.52 L 17.01 9.10 L 22.94 11.99 L 17.01 14.89 L 17.48 21.47 L 12.01 17.78 L 6.54 21.48 L 6.99 14.90 L 1.06 12.01 L 6.99 9.11 Z"
      }
    ]
  ]
};

export const VerismoOutlet = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.52 2.53 L 11.99 6.22 L 17.46 2.52 L 17.01 9.10 L 22.94 11.99 L 17.01 14.89 L 17.48 21.47 L 12.01 17.78 L 6.54 21.48 L 6.99 14.90 L 1.06 12.01 L 6.99 9.11 Z" />
      {children}
    </svg>
  );
});

export default VerismoOutlet;
