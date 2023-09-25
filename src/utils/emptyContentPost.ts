export function emptyContentPost(content: string) {
  const replaceHTML = content.replace(/<(.|\n)*?>/g, '').trim();
  const replaceWhiteSpace = replaceHTML.replace(/&nbsp;/g, '').trim();

  return replaceWhiteSpace.length <= 0;
}
