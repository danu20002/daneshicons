import React from 'react';

export const iconData = {
  "id": "SeveroRise",
  "name": "SeveroRise",
  "category": "PX",
  "nodes": [
    [
      "path",
      {
        "d": "M 12.68 21.83 L 6.20 19.97 L 2.44 14.38 L 3.14 7.68 L 7.99 2.99 L 14.72 2.53 L 20.17 6.49 L 21.80 13.03 L 18.84 19.09 Z"
      }
    ]
  ]
};

export const SeveroRise = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 12.68 21.83 L 6.20 19.97 L 2.44 14.38 L 3.14 7.68 L 7.99 2.99 L 14.72 2.53 L 20.17 6.49 L 21.80 13.03 L 18.84 19.09 Z" />
      {children}
    </svg>
  );
});

export default SeveroRise;
