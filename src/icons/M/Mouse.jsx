import React from 'react';

export const iconData = {
  id: "Mouse",
  name: "Mouse",
  category: "M",
  nodes: [["rect",{"x":"5","y":"2","width":"14","height":"20","rx":"7"}],["path",{"d":"M12 6v4"}]]
};

export const Mouse = React.forwardRef(({ size = 24, className = "", color = "currentColor", strokeWidth = 2, children, ...rest }, ref) => {
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
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
      {children}
    </svg>
  );
});

export default Mouse;
