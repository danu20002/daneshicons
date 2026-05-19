import React from 'react';

export const iconData = {
  "id": "ViziosoTiny",
  "name": "ViziosoTiny",
  "category": "XD",
  "nodes": [
    [
      "path",
      {
        "d": "M 17.76 19.01 L 8.80 20.49 L 3.05 13.48 L 6.24 4.99 L 15.20 3.51 L 20.95 10.52 Z"
      }
    ]
  ]
};

export const ViziosoTiny = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 17.76 19.01 L 8.80 20.49 L 3.05 13.48 L 6.24 4.99 L 15.20 3.51 L 20.95 10.52 Z" />
      {children}
    </svg>
  );
});

export default ViziosoTiny;
