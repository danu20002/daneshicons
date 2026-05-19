import React from 'react';

export const iconData = {
  "id": "LuteoDryad",
  "name": "LuteoDryad",
  "category": "SN",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.64 11.82 11.91 8.69 Q 12.29 10.06 12.67 11.43 Q 12.38 12.15 12.10 12.87 Q 11.73 13.91 11.36 14.95 Z"
      }
    ]
  ]
};

export const LuteoDryad = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.64 11.82 11.91 8.69 Q 12.29 10.06 12.67 11.43 Q 12.38 12.15 12.10 12.87 Q 11.73 13.91 11.36 14.95 Z" />
      {children}
    </svg>
  );
});

export default LuteoDryad;
