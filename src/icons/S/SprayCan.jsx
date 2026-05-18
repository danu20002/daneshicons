import React from 'react';

export const iconData = {
  id: "SprayCan",
  name: "SprayCan",
  category: "S",
  nodes: [["path",{"d":"M3 3h.01"}],["path",{"d":"M7 5h.01"}],["path",{"d":"M11 7h.01"}],["path",{"d":"M3 7h.01"}],["path",{"d":"M7 9h.01"}],["path",{"d":"M3 11h.01"}],["rect",{"width":"4","height":"4","x":"15","y":"5"}],["path",{"d":"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"}],["path",{"d":"m13 14 8-2"}],["path",{"d":"m13 19 8-2"}]]
};

export const SprayCan = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M3 3h.01" />
      <path d="M7 5h.01" />
      <path d="M11 7h.01" />
      <path d="M3 7h.01" />
      <path d="M7 9h.01" />
      <path d="M3 11h.01" />
      <rect width="4" height="4" x="15" y="5" />
      <path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
      <path d="m13 14 8-2" />
      <path d="m13 19 8-2" />
      {children}
    </svg>
  );
});

export default SprayCan;
