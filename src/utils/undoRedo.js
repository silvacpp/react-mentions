export const isRedo = function(event) {
  if (event.ctrlKey || event.metaKey) {
    switch (String.fromCharCode(event.which).toLowerCase()) {
      case 'z':
        if (event.shiftKey) {
          // redo
          return true
        }
        break
      default:
        return false
    }
  }
}

export const isUndo = function(event) {
  if (event.ctrlKey || event.metaKey) {
    switch (String.fromCharCode(event.which).toLowerCase()) {
      case 'z':
        if (!event.shiftKey) {
          // redo
          return true
        }
        break
      default:
        return false
    }
  }
}
