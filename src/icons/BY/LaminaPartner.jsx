import React from 'react';

export const iconData = {
  "id": "LaminaPartner",
  "name": "LaminaPartner",
  "category": "BY",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.45 20.80 L 2.15 11.45 L 17.40 3.75 Z"
      }
    ]
  ]
};

export const LaminaPartner = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.45 20.80 L 2.15 11.45 L 17.40 3.75 Z" />
      {children}
    </svg>
  );
});

export default LaminaPartner;
