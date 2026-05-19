import React from 'react';

export const iconData = {
  "id": "LevoThrough",
  "name": "LevoThrough",
  "category": "XF",
  "nodes": [
    [
      "path",
      {
        "d": "M 5.68 18.80 L 2.78 13.15 L 4.20 6.95 L 9.27 3.12 L 15.62 3.45 L 20.27 7.77 L 21.05 14.08 L 17.60 19.41 L 11.53 21.28 Z"
      }
    ]
  ]
};

export const LevoThrough = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 5.68 18.80 L 2.78 13.15 L 4.20 6.95 L 9.27 3.12 L 15.62 3.45 L 20.27 7.77 L 21.05 14.08 L 17.60 19.41 L 11.53 21.28 Z" />
      {children}
    </svg>
  );
});

export default LevoThrough;
