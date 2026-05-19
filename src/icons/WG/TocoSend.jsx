import React from 'react';

export const iconData = {
  "id": "TocoSend",
  "name": "TocoSend",
  "category": "WG",
  "nodes": [
    [
      "path",
      {
        "d": "M 3.34 8.41 L 1.01 6.86 L 2.94 4.06 L 5.60 2.52 L 6.81 1.00 L 5.69 1.69 L 8.00 1.00 L 6.02 1.00 L 7.24 1.00 L 7.29 1.00 L 4.65 1.00 L 7.60 3.67 L 5.64 1.47 L 4.93 1.00 L 7.54 1.00 L 4.56 1.54 L 6.53 1.00"
      }
    ]
  ]
};

export const TocoSend = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 3.34 8.41 L 1.01 6.86 L 2.94 4.06 L 5.60 2.52 L 6.81 1.00 L 5.69 1.69 L 8.00 1.00 L 6.02 1.00 L 7.24 1.00 L 7.29 1.00 L 4.65 1.00 L 7.60 3.67 L 5.64 1.47 L 4.93 1.00 L 7.54 1.00 L 4.56 1.54 L 6.53 1.00" />
      {children}
    </svg>
  );
});

export default TocoSend;
