export function listWithMoreThanOneLine(htmlTemplate: string): boolean {
    const parser = new DOMParser()
    const doc = parser.parseFromString(htmlTemplate, 'text/html')
    return doc.body.querySelectorAll('li').length > 1
}
