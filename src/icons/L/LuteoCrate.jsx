import React from 'react';

export const iconData = {
  "id": "LuteoCrate",
  "name": "LuteoCrate",
  "category": "L",
  "nodes": [
    [
      "path",
      {
        "d": "M 4.16 12.00 L 19.84 12.00"
      }
    ],
    [
      "path",
      {
        "d": "M 12.00 4.16 L 12.00 19.84"
      }
    ],
    [
      "path",
      {
        "d": "M 1.74 12.00 a 10.26 10.26 0 1 0 20.53 0 a 10.26 10.26 0 1 0 -20.53 0"
      }
    ]
  ]
};

export const LuteoCrate = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 4.16 12.00 L 19.84 12.00" />
      <path d="M 12.00 4.16 L 12.00 19.84" />
      <path d="M 1.74 12.00 a 10.26 10.26 0 1 0 20.53 0 a 10.26 10.26 0 1 0 -20.53 0" />
      {children}
    </svg>
  );
});

export default LuteoCrate;
