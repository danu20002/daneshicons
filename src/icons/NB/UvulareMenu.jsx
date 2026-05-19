import React from 'react';

export const iconData = {
  "id": "UvulareMenu",
  "name": "UvulareMenu",
  "category": "NB",
  "nodes": [
    [
      "path",
      {
        "d": "M 13.70 21.10 L 7.96 15.46 L 3.27 8.92 L 11.02 6.77 L 19.03 5.98 L 17.02 13.77 Z"
      }
    ]
  ]
};

export const UvulareMenu = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 13.70 21.10 L 7.96 15.46 L 3.27 8.92 L 11.02 6.77 L 19.03 5.98 L 17.02 13.77 Z" />
      {children}
    </svg>
  );
});

export default UvulareMenu;
