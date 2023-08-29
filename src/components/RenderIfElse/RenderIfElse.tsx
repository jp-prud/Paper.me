interface RenderIfElse {
  condition: boolean;
  renderIf: React.ReactNode;
  renderElse: React.ReactNode;
}

export function RenderIfElse({condition, renderIf, renderElse}: RenderIfElse) {
  return condition ? <>{renderIf}</> : <>{renderElse}</>;
}
