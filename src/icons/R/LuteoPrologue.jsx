import React from 'react';

export const iconData = {
  "id": "LuteoPrologue",
  "name": "LuteoPrologue",
  "category": "R",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.54 6.62 L 20.46 6.62 L 20.46 17.38 L 3.54 17.38 Z"
      }
    ],
    [
      "path",
      {
        "d": "M 3.54 6.62 L 7.02 3.14 L 23.94 3.14 L 20.46 6.62"
      }
    ],
    [
      "path",
      {
        "d": "M 20.46 6.62 L 23.94 3.14 L 23.94 13.90 L 20.46 17.38"
      }
    ]
  ]
};

export const LuteoPrologue = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.54 6.62 L 20.46 6.62 L 20.46 17.38 L 3.54 17.38 Z" />
      <path d="M 3.54 6.62 L 7.02 3.14 L 23.94 3.14 L 20.46 6.62" />
      <path d="M 20.46 6.62 L 23.94 3.14 L 23.94 13.90 L 20.46 17.38" />
      {children}
    </svg>
  );
});

export default LuteoPrologue;
