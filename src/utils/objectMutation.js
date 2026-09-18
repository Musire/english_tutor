
export function findById(targetArray, targetId) {
  if (!Array.isArray(targetArray)) {
    return undefined; 
  }
  return targetArray.find(item => item?.id === targetId);
}