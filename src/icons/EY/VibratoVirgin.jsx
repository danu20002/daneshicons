import React from 'react';

export const iconData = {
  "id": "VibratoVirgin",
  "name": "VibratoVirgin",
  "category": "EY",
  "nodes": [
    [
      "path",
      {
        "d": "M 7.30 4.61 L 14.84 3.72 L 20.25 9.06 L 19.44 16.61 L 13.03 20.69 L 5.85 18.23 L 3.29 11.07 Z"
      }
    ]
  ]
};

export const VibratoVirgin = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 7.30 4.61 L 14.84 3.72 L 20.25 9.06 L 19.44 16.61 L 13.03 20.69 L 5.85 18.23 L 3.29 11.07 Z" />
      {children}
    </svg>
  );
});

export default VibratoVirgin;
