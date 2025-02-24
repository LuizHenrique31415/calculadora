export const calculate = (expression: string): string => {
  try {
    // Sanitize input
    if (!expression) return '0';
    
    // Only allow numbers and basic operators
    if (!/^[0-9+\-*/.()]*$/.test(expression)) {
      return 'Error';
    }
    
    const result = Function('return ' + expression)();
    return Number.isFinite(result) ? result.toString() : 'Error';
  } catch {
    return 'Error';
  }
};
