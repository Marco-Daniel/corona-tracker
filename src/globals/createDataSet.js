export default (label, rgbString, dataset, type, fill = "+1") => {
  return {
    label: label,
    data: dataset.map(point => ({ x: point.date, y: point[type] })),
    fill: fill,
    backgroundColor: `rgba(${rgbString}, .9)`,
    pointRadius: 1,
    borderColor: `rgba(${rgbString}, 1)`,
    borderWidth: 1,
  }
}
