import React from 'react';

export const iconData = {
  "id": "SpiriTreat",
  "name": "SpiriTreat",
  "category": "QQ",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.95 4.80 L 20.38 14.49 L 12.22 20.73 L 3.76 14.91 L 6.68 5.07 Z"
      }
    ]
  ]
};

export const SpiriTreat = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.95 4.80 L 20.38 14.49 L 12.22 20.73 L 3.76 14.91 L 6.68 5.07 Z" />
      {children}
    </svg>
  );
});

export default SpiriTreat;
