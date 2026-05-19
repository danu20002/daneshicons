import React from 'react';

export const iconData = {
  "id": "UvulareDestroy",
  "name": "UvulareDestroy",
  "category": "YF",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 7.12 L 2.50 8.77 L 3.00 10.07 L 3.50 10.72 L 4.00 10.59 L 4.50 9.70 L 5.00 8.24 L 5.50 6.55 L 6.00 4.97 L 6.50 3.86 L 7.00 3.47 L 7.50 3.86 L 8.00 4.97 L 8.50 6.55 L 9.00 8.24 L 9.50 9.70 L 10.00 10.59 L 10.50 10.72 L 11.00 10.07 L 11.50 8.77 L 12.00 7.12 L 12.50 5.46 L 13.00 4.16 L 13.50 3.51 L 14.00 3.65 L 14.50 4.54 L 15.00 5.99 L 15.50 7.69 L 16.00 9.26 L 16.50 10.37 L 17.00 10.77 L 17.50 10.37 L 18.00 9.26 L 18.50 7.69 L 19.00 5.99 L 19.50 4.54 L 20.00 3.65 L 20.50 3.51 L 21.00 4.16 L 21.50 5.46 L 22.00 7.12"
      }
    ]
  ]
};

export const UvulareDestroy = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 7.12 L 2.50 8.77 L 3.00 10.07 L 3.50 10.72 L 4.00 10.59 L 4.50 9.70 L 5.00 8.24 L 5.50 6.55 L 6.00 4.97 L 6.50 3.86 L 7.00 3.47 L 7.50 3.86 L 8.00 4.97 L 8.50 6.55 L 9.00 8.24 L 9.50 9.70 L 10.00 10.59 L 10.50 10.72 L 11.00 10.07 L 11.50 8.77 L 12.00 7.12 L 12.50 5.46 L 13.00 4.16 L 13.50 3.51 L 14.00 3.65 L 14.50 4.54 L 15.00 5.99 L 15.50 7.69 L 16.00 9.26 L 16.50 10.37 L 17.00 10.77 L 17.50 10.37 L 18.00 9.26 L 18.50 7.69 L 19.00 5.99 L 19.50 4.54 L 20.00 3.65 L 20.50 3.51 L 21.00 4.16 L 21.50 5.46 L 22.00 7.12" />
      {children}
    </svg>
  );
});

export default UvulareDestroy;
