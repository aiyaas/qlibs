/**
 * Converts file size in bytes to a more readable format (such as KB, MB, GB, etc.).
 *
 * @param {number} file - File size in bytes.
 * @returns {string} The file size formatted in the appropriate units (example: "1.23 MB").
 *
 * @example
 * // Usage examples:
 * const fileSize = useFileSize(new Blob([1048576]).size) ||  useFileSize(1048576); // 1048576 bytes = 1 MB
 * console.log(fileSize); // Output: "1.00 MB"
 */
function useFileSize(file) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    for(let i = 0; file >= 1024 && i < units.length - 1;) {
        file /= 1024;
        i++;        
    }
    
    return file.toFixed(2) + ' ' + units[0];
}

