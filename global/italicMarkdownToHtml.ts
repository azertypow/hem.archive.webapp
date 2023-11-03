export function italicMarkdownToHtml(markdownText: string): string {
    return markdownText.replace(/\*(.*?)\*/g, '<em>$1</em>');

}

