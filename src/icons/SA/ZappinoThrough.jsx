import React from 'react';

export const iconData = {
  "id": "ZappinoThrough",
  "name": "ZappinoThrough",
  "category": "SA",
  "nodes": [
    [
      "path",
      {
        "d": "M 19.46 6.03 L 17.97 19.46 L 4.54 17.97 L 6.03 4.54 Z"
      }
    ]
  ]
};

export const ZappinoThrough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 19.46 6.03 L 17.97 19.46 L 4.54 17.97 L 6.03 4.54 Z" />
      {children}
    </svg>
  );
});

export default ZappinoThrough;
