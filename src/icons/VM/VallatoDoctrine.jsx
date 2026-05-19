import React from 'react';

export const iconData = {
  "id": "VallatoDoctrine",
  "name": "VallatoDoctrine",
  "category": "VM",
  "nodes": [
    [
      "path",
      {
        "d": "M 16.96 5.72 L 6.71 17.01 L 6.09 2.04 L 8.69 2.03 L 7.77 5.51 L 20.71 21.67"
      }
    ],
    [
      "circle",
      {
        "cx": "16.96",
        "cy": "5.72",
        "r": "0.97"
      }
    ],
    [
      "circle",
      {
        "cx": "6.71",
        "cy": "17.01",
        "r": "1.19"
      }
    ],
    [
      "circle",
      {
        "cx": "6.09",
        "cy": "2.04",
        "r": "1.46"
      }
    ],
    [
      "circle",
      {
        "cx": "8.69",
        "cy": "2.03",
        "r": "1.02"
      }
    ],
    [
      "circle",
      {
        "cx": "7.77",
        "cy": "5.51",
        "r": "1.39"
      }
    ],
    [
      "circle",
      {
        "cx": "20.71",
        "cy": "21.67",
        "r": "1.03"
      }
    ]
  ]
};

export const VallatoDoctrine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M 16.96 5.72 L 6.71 17.01 L 6.09 2.04 L 8.69 2.03 L 7.77 5.51 L 20.71 21.67" />
      <circle cx="16.96" cy="5.72" r="0.97" />
      <circle cx="6.71" cy="17.01" r="1.19" />
      <circle cx="6.09" cy="2.04" r="1.46" />
      <circle cx="8.69" cy="2.03" r="1.02" />
      <circle cx="7.77" cy="5.51" r="1.39" />
      <circle cx="20.71" cy="21.67" r="1.03" />
      {children}
    </svg>
  );
});

export default VallatoDoctrine;
