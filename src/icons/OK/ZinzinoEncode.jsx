import React from 'react';

export const iconData = {
  "id": "ZinzinoEncode",
  "name": "ZinzinoEncode",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.32 20.74 L 7.86 20.83 L 2.52 14.27 L 4.31 6.00 L 11.90 2.25 L 19.56 5.84 L 21.53 14.07 Z"
      }
    ]
  ]
};

export const ZinzinoEncode = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.32 20.74 L 7.86 20.83 L 2.52 14.27 L 4.31 6.00 L 11.90 2.25 L 19.56 5.84 L 21.53 14.07 Z" />
      {children}
    </svg>
  );
});

export default ZinzinoEncode;
