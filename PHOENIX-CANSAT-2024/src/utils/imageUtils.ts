/**
 * Utility function to convert GitHub blob URLs to raw content URLs
 * GitHub blob URLs can't be used directly as image sources
 */
export const convertGitHubUrl = (url: string): string => {
  return url.replace(
    'https://github.com/qbi777/ISRO---CANSAT/blob/main/',
    'https://raw.githubusercontent.com/qbi777/ISRO---CANSAT/main/'
  );
};

/**
 * Utility function to handle image loading errors
 * Provides a fallback image when GitHub images fail to load
 */
export const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  const target = e.target as HTMLImageElement;
  
  // Use a space-themed fallback image from Pexels
  target.src = 'https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg';
  
  // Add a class to style the fallback image
  target.classList.add('fallback-image');
};

/**
 * Check if the file is an image that can be displayed
 * Filters out PDFs and other non-image files
 */
export const isDisplayableImage = (url: string): boolean => {
  const lowerUrl = url.toLowerCase();
  return (
    !lowerUrl.endsWith('.pdf') && 
    !lowerUrl.endsWith('.doc') && 
    !lowerUrl.endsWith('.docx') &&
    !lowerUrl.endsWith('.zip')
  );
};