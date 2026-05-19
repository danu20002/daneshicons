import React from 'react';

export const iconData = {
  "id": "ZurigoTurn",
  "name": "ZurigoTurn",
  "category": "PV",
  "nodes": [
    [
      "path",
      {
        "d": "M 21.43 13.05 L 17.93 19.41 L 10.95 21.43 L 4.59 17.93 L 2.57 10.95 L 6.07 4.59 L 13.05 2.57 L 19.41 6.07 Z"
      }
    ]
  ]
};

export const ZurigoTurn = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 21.43 13.05 L 17.93 19.41 L 10.95 21.43 L 4.59 17.93 L 2.57 10.95 L 6.07 4.59 L 13.05 2.57 L 19.41 6.07 Z" />
      {children}
    </svg>
  );
});

export default ZurigoTurn;
