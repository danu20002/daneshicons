import React from 'react';

export const iconData = {
  "id": "ViventeMix",
  "name": "ViventeMix",
  "category": "OK",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.90 11.59 L 7.81 3.91 L 16.91 4.32 L 21.10 12.41 L 16.19 20.09 L 7.09 19.68 Z"
      }
    ]
  ]
};

export const ViventeMix = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.90 11.59 L 7.81 3.91 L 16.91 4.32 L 21.10 12.41 L 16.19 20.09 L 7.09 19.68 Z" />
      {children}
    </svg>
  );
});

export default ViventeMix;
