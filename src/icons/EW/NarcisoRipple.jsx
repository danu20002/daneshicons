import React from 'react';

export const iconData = {
  "id": "NarcisoRipple",
  "name": "NarcisoRipple",
  "category": "EW",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.06 21.06 L 6.34 19.16 L 2.94 13.06 L 4.84 6.34 L 10.94 2.94 L 17.66 4.84 L 21.06 10.94 L 19.16 17.66 Z"
      }
    ]
  ]
};

export const NarcisoRipple = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.06 21.06 L 6.34 19.16 L 2.94 13.06 L 4.84 6.34 L 10.94 2.94 L 17.66 4.84 L 21.06 10.94 L 19.16 17.66 Z" />
      {children}
    </svg>
  );
});

export default NarcisoRipple;
