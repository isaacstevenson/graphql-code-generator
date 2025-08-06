import { Kind } from 'graphql';

export function inlineFragmentReplacement(
  node: any,
  doc: string,
  fragmentName: string,
  fragmentVariableName: string
): string {
  const regex = new RegExp(`\\s*\\.\\.\\.${fragmentName}\\s*`, 'g');
  return doc.replace(regex, `\${${fragmentVariableName}}`);
}

export function formatInlineFragmentReplacement(node: any, doc: string): string {
  if (node.kind === Kind.FRAGMENT_DEFINITION) {
    // remove fragment definition syntax and curly braces
    doc = doc.replace(/^\s*fragment\s+\w+\s+on\s+\w+\s*{\s*/, '').replace(/\s*}\s*$/, '');
  }
  return doc;
}
