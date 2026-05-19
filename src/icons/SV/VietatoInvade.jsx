import React from 'react';

export const iconData = {
  "id": "VietatoInvade",
  "name": "VietatoInvade",
  "category": "SV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.64 12.22 L 17.84 19.68 L 9.64 21.35 L 3.22 15.99 L 3.40 7.62 L 10.06 2.55 L 18.18 4.59 Z"
      }
    ]
  ]
};

export const VietatoInvade = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.64 12.22 L 17.84 19.68 L 9.64 21.35 L 3.22 15.99 L 3.40 7.62 L 10.06 2.55 L 18.18 4.59 Z" />
      {children}
    </svg>
  );
});

export default VietatoInvade;
