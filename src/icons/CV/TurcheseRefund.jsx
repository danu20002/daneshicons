import React from 'react';

export const iconData = {
  "id": "TurcheseRefund",
  "name": "TurcheseRefund",
  "category": "CV",
  "nodes": [
    [
      "path",
      {
        "d": "M 20.75 15.34 L 12.90 17.61 L 4.73 17.91 L 6.69 9.97 L 10.52 2.75 L 16.41 8.42 Z"
      }
    ]
  ]
};

export const TurcheseRefund = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 20.75 15.34 L 12.90 17.61 L 4.73 17.91 L 6.69 9.97 L 10.52 2.75 L 16.41 8.42 Z" />
      {children}
    </svg>
  );
});

export default TurcheseRefund;
