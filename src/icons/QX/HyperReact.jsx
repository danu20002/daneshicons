import React from 'react';

export const iconData = {
  "id": "HyperReact",
  "name": "HyperReact",
  "category": "QX",
  "nodes": [
    [
      "path",
      {
        "d": "M 2.00 6.39 L 2.50 7.98 L 3.00 9.22 L 3.50 9.85 L 4.00 9.72 L 4.50 8.86 L 5.00 7.47 L 5.50 5.84 L 6.00 4.33 L 6.50 3.27 L 7.00 2.88 L 7.50 3.27 L 8.00 4.33 L 8.50 5.84 L 9.00 7.47 L 9.50 8.86 L 10.00 9.72 L 10.50 9.85 L 11.00 9.22 L 11.50 7.98 L 12.00 6.39 L 12.50 4.80 L 13.00 3.55 L 13.50 2.93 L 14.00 3.06 L 14.50 3.91 L 15.00 5.30 L 15.50 6.94 L 16.00 8.45 L 16.50 9.51 L 17.00 9.89 L 17.50 9.51 L 18.00 8.45 L 18.50 6.94 L 19.00 5.30 L 19.50 3.91 L 20.00 3.06 L 20.50 2.93 L 21.00 3.55 L 21.50 4.80 L 22.00 6.39"
      }
    ]
  ]
};

export const HyperReact = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 2.00 6.39 L 2.50 7.98 L 3.00 9.22 L 3.50 9.85 L 4.00 9.72 L 4.50 8.86 L 5.00 7.47 L 5.50 5.84 L 6.00 4.33 L 6.50 3.27 L 7.00 2.88 L 7.50 3.27 L 8.00 4.33 L 8.50 5.84 L 9.00 7.47 L 9.50 8.86 L 10.00 9.72 L 10.50 9.85 L 11.00 9.22 L 11.50 7.98 L 12.00 6.39 L 12.50 4.80 L 13.00 3.55 L 13.50 2.93 L 14.00 3.06 L 14.50 3.91 L 15.00 5.30 L 15.50 6.94 L 16.00 8.45 L 16.50 9.51 L 17.00 9.89 L 17.50 9.51 L 18.00 8.45 L 18.50 6.94 L 19.00 5.30 L 19.50 3.91 L 20.00 3.06 L 20.50 2.93 L 21.00 3.55 L 21.50 4.80 L 22.00 6.39" />
      {children}
    </svg>
  );
});

export default HyperReact;
