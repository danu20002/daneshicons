import React from 'react';

export const iconData = {
  "id": "VibratoSlave",
  "name": "VibratoSlave",
  "category": "OL",
  "nodes": [
    [
      "path",
      {
        "d": "M 6.76 5.54 L 12.86 3.72 L 18.46 6.76 L 20.28 12.86 L 17.24 18.46 L 11.14 20.28 L 5.54 17.24 L 3.72 11.14 Z"
      }
    ]
  ]
};

export const VibratoSlave = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 6.76 5.54 L 12.86 3.72 L 18.46 6.76 L 20.28 12.86 L 17.24 18.46 L 11.14 20.28 L 5.54 17.24 L 3.72 11.14 Z" />
      {children}
    </svg>
  );
});

export default VibratoSlave;
