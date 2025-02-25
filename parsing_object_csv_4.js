// (Reapl) innovation, Format JSON object {} to CSV type with simple parsing 
const formatToCsv = (data) => {
    // Convert some 'JSON' to 'CSV' type
    if (typeof data === 'object') {
      return Object.entries(data)
        .map(([key, value]) => {
          return typeof value === 'object'
            ? `${key}, ${formatToCsv(value)}`
            : `${key}, ${value}`;
        })
        .join(' '); // Add (\n) if you want to change the line
    }
    
    return null;
};

