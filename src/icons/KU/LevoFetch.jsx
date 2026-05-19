import React from 'react';

export const iconData = {
  "id": "LevoFetch",
  "name": "LevoFetch",
  "category": "KU",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.43 5.23 L 13.20 2.64 L 20.06 7.10 L 20.86 15.25 L 14.98 20.95 L 6.86 19.91 L 2.61 12.91 Z"
      }
    ]
  ]
};

export const LevoFetch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.43 5.23 L 13.20 2.64 L 20.06 7.10 L 20.86 15.25 L 14.98 20.95 L 6.86 19.91 L 2.61 12.91 Z" />
      {children}
    </svg>
  );
});

export default LevoFetch;
