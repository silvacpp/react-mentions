function check(ev, style, shift) {
  var macAllow = !style || style === 'mac',
    winAllow = !style || style === 'windows',
    code = ev.keyCode || ev.which

  if (code !== 122 && code !== 90) return false
  if (macAllow && ev.metaKey && shift && !ev.ctrlKey && !ev.altKey) return true
  if (winAllow && ev.ctrlKey && shift && !ev.metaKey && !ev.altKey) return true
  return false
}

export const isUndo = function(ev, style) {
  return check(ev, style, !ev.shiftKey)
}

export const isRedo = function(ev, style) {
  return check(ev, style, ev.shiftKey)
}
