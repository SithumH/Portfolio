export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  features: string[]
  screenshots: string[]
  downloadUrl: string
  version: string
  platform: string[]
  category: string
}

export const products: Product[] = [
  {
    id: 'sourceclip',
    name: 'SourceClip',
    tagline: 'Your smart clipboard for code',
    description: 'SourceClip is a developer-focused clipboard manager that lets you save, organize, and quickly access your code snippets. Never lose a useful piece of code again.',
    features: [
      'Syntax highlighting for 50+ languages',
      'Smart search with fuzzy matching',
      'Tags and categories for organization',
      'Cross-session persistence',
      'Keyboard shortcuts for everything',
      'Export to Gist or local file',
    ],
    screenshots: [
      '/images/sourceclip-1.png',
      '/images/sourceclip-2.png',
      '/images/sourceclip-3.png',
    ],
    downloadUrl: '#',
    version: '1.0.0',
    platform: ['Windows', 'macOS', 'Linux'],
    category: 'Developer Tool',
  },
]
