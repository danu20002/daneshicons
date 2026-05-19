import React from 'react';

export const iconData = {
  "id": "DiscoPouch",
  "name": "DiscoPouch",
  "category": "DK",
  "nodes": [
    [
      "path",
      {
        "d": "M 11.09 2.60 L 18.00 4.71 L 21.40 11.09 L 19.29 18.00 L 12.91 21.40 L 6.00 19.29 L 2.60 12.91 L 4.71 6.00 Z"
      }
    ]
  ]
};

export const DiscoPouch = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 11.09 2.60 L 18.00 4.71 L 21.40 11.09 L 19.29 18.00 L 12.91 21.40 L 6.00 19.29 L 2.60 12.91 L 4.71 6.00 Z" />
      {children}
    </svg>
  );
});

export default DiscoPouch;
