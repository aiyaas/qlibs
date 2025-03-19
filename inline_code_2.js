// (Reapl) allows you to format text within messages. Please note that there is no option to disable this feature
function useMarkUpText(text) {
  const applyFormatting = (text,formatType) => {
    text.toLocaleLowerCase();
    switch (formatType) {
      case 'MultilineCode':
        return text.replace(/\`\`\`(.*?)\`\`\`/gis, '<pre>$1</pre>');
        break;
      case 'InlineCode':
        return text.replace(/`(.*?)`/gis, '<mark>$1</mark>');
        break;
      case 'Strikethrough':
        return text.replace(/\~\~(.*?)\~\~/gis, '<s>$1</s>');
        break;
      case 'Thick':
        return text.replace(/\*\*(.*?)\*\*/gis, '<b>$1</b>');
        break;
      case 'EncodeHTML':
        // Encode HTML tags (optional, if needed)
        return text.replace(/<(.*?)>/gis, '&#60;$1&#62;');
        break;
      case 'HyperLink':
        return text.replace(/\b((?:https?|ftp):\/\/[^\s\°]+)/g, '<a href="$1">$1</a> ');
        break;
      case 'SensorsWords':
        return text.replace(new RegExp([].join('|'), 'gi'), '****');
        break;
      case 'BulletToAsterisk':
        return text.replace(/\•/g, '*');
        break;
      case 'MiddleDot':
        // This regex looks for '*' followed by a letter character (a-zA-Z) at the beginning of a word (\b)
        return text.replace(/\b\*(?=[a-zA-Z])/g, '•');
        break;
      case 'Italicize':
        return text.replace(/_(.*?)_/gis, '<i>$1</i>');
        break;
      case 'NumberedList':
        let num = 0;
        // Replace each cockroach with a sequential number 
        return text.replace(/\* \w+/gis, (match) => {
          return `${num++}. ${match.slice(1)}`; 
        }); 
        break;
      default:
        return text; // If formatType is not recognized, return the original text
        break;
    }
  };

  // List of formats to be applied markdownFeatures
  [
    'MultilineCode', 'Strikethrough', 
    'Thick', 'HyperLink',
    'MiddleDot', 'InlineCode',
  ].forEach((format) => {
    // Apply each format in sequence
    text = applyFormatting(text, format);
  });

  return text; // Starting text sorting
}

