export function italicMarkdownToHtml(markdownText?: string): string {
    if (!markdownText) return 'UNTRANSLATED';
    return markdownText.replace(/\*(.*?)\*/g, '<em>$1</em>');

}

