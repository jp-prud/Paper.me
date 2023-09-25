export interface RenderIfProps {
  condition: boolean;
  children: React.ReactNode;
}

export function RenderIf({condition, children}: RenderIfProps) {
  return condition ? <>{children}</> : null;
}
