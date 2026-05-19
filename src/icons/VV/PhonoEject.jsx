import React from 'react';

export const iconData = {
  "id": "PhonoEject",
  "name": "PhonoEject",
  "category": "VV",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.90 14.88 L 7.84 10.61 L 6.45 4.23 L 12.03 7.61 L 17.67 4.32 L 16.18 10.68 L 21.06 15.02 L 14.55 15.57 L 11.92 21.55 L 9.39 15.53 Z"
      }
    ]
  ]
};

export const PhonoEject = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.90 14.88 L 7.84 10.61 L 6.45 4.23 L 12.03 7.61 L 17.67 4.32 L 16.18 10.68 L 21.06 15.02 L 14.55 15.57 L 11.92 21.55 L 9.39 15.53 Z" />
      {children}
    </svg>
  );
});

export default PhonoEject;
