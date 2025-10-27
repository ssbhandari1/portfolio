// utils/getExperience.ts
export function getExperience(startDateString: string): string {
    const startDate = new Date(startDateString);
    const now = new Date();
  
    const diffInMonths =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());
  
    const years = Math.floor(diffInMonths / 12);
    const months = diffInMonths % 12;
  
    if (months === 0) return `${years}+`;
    if (months >= 6) return `${years}.5+`;
    return `${years}+ `;
  }
  