import React from 'react';

export const iconData = {
  id: "Combine",
  name: "Combine",
  category: "C",
  nodes: [["path",{"d":"M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{"d":"M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1"}],["path",{"d":"m7 15 3 3"}],["path",{"d":"m7 21 3-3H5a2 2 0 0 1-2-2v-2"}],["rect",{"x":"14","y":"14","width":"7","height":"7","rx":"1"}],["rect",{"x":"3","y":"3","width":"7","height":"7","rx":"1"}]]
};

export const Combine = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <path d="M14 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="M19 3a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1" />
      <path d="m7 15 3 3" />
      <path d="m7 21 3-3H5a2 2 0 0 1-2-2v-2" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="3" width="7" height="7" rx="1" />
      {children}
    </svg>
  );
});

export default Combine;
