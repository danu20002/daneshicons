import React from 'react';

export const iconData = {
  "id": "VedovoMedia",
  "name": "VedovoMedia",
  "category": "HY",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.24 11.52 L 7.72 9.24 L 7.53 3.31 L 12.25 6.92 L 17.30 3.78 L 16.52 9.68 L 21.76 12.48 L 16.28 14.76 L 16.47 20.69 L 11.75 17.08 L 6.70 20.22 L 7.48 14.32 Z"
      }
    ]
  ]
};

export const VedovoMedia = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.24 11.52 L 7.72 9.24 L 7.53 3.31 L 12.25 6.92 L 17.30 3.78 L 16.52 9.68 L 21.76 12.48 L 16.28 14.76 L 16.47 20.69 L 11.75 17.08 L 6.70 20.22 L 7.48 14.32 Z" />
      {children}
    </svg>
  );
});

export default VedovoMedia;
