import React from 'react';

export const iconData = {
  "id": "ZebraSculpt",
  "name": "ZebraSculpt",
  "category": "FR",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.56 10.25 L 19.33 18.39 L 11.58 21.71 L 4.14 17.72 L 2.63 9.43 L 8.17 3.07 L 16.59 3.44 Z"
      }
    ]
  ]
};

export const ZebraSculpt = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.56 10.25 L 19.33 18.39 L 11.58 21.71 L 4.14 17.72 L 2.63 9.43 L 8.17 3.07 L 16.59 3.44 Z" />
      {children}
    </svg>
  );
});

export default ZebraSculpt;
