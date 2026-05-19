import React from 'react';

export const iconData = {
  "id": "VerlenTrouble",
  "name": "VerlenTrouble",
  "category": "GI",
  "nodes": [
    [
      "path",
      {
        "d": "M 8.83 2.55 L 21.77 13.98 L 5.40 19.47 Z"
      }
    ]
  ]
};

export const VerlenTrouble = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 8.83 2.55 L 21.77 13.98 L 5.40 19.47 Z" />
      {children}
    </svg>
  );
});

export default VerlenTrouble;
