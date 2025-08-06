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
    // remove curly braces from fragment definitions
    doc = doc.replace(/^\s*{\s*/, '').replace(/\s*}\s*$/, '');
  }
  return doc;
}
