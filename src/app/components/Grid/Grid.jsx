import ui from './Grid.module.scss'

function Grid({className, children}) {
    const comp = "grid"
    const c = (mod) => ui[`${comp}${mod || ""}`]

  return (
    <div className={`${c()} ${className}`}>{children}</div>
  )
}

export default Grid