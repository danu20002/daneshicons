import React from 'react';

export const iconData = {
  "id": "TurbidoAura",
  "name": "TurbidoAura",
  "category": "MG",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.98 11.33 L 6.09 5.14 L 12.67 2.98 L 18.86 6.09 L 21.02 12.67 L 17.91 18.86 L 11.33 21.02 L 5.14 17.91 Z"
      }
    ]
  ]
};

export const TurbidoAura = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.98 11.33 L 6.09 5.14 L 12.67 2.98 L 18.86 6.09 L 21.02 12.67 L 17.91 18.86 L 11.33 21.02 L 5.14 17.91 Z" />
      {children}
    </svg>
  );
});

export default TurbidoAura;
