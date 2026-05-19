import React from 'react';

export const iconData = {
  "id": "ZirloTogether",
  "name": "ZirloTogether",
  "category": "IP",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.06 16.04 L 14.84 20.56 L 7.96 20.06 L 3.44 14.84 L 3.94 7.96 L 9.16 3.44 L 16.04 3.94 L 20.56 9.16 Z"
      }
    ]
  ]
};

export const ZirloTogether = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.06 16.04 L 14.84 20.56 L 7.96 20.06 L 3.44 14.84 L 3.94 7.96 L 9.16 3.44 L 16.04 3.94 L 20.56 9.16 Z" />
      {children}
    </svg>
  );
});

export default ZirloTogether;
