import { useRef, useMemo, createContext, useContext } from "react"
import { useWindowScroll } from "react-use"

const TextRevealContext = createContext()

function Root({ body = "", children, className, as: Component = "div", ...props }) {
  const container = useRef(null)

  const { y: windowScroll } = useWindowScroll()

  const top = useMemo(() => {
    return container.current?.getBoundingClientRect().top
  }, [windowScroll])

  const height = useMemo(() => {
    return container.current?.getBoundingClientRect().height
  }, [windowScroll])

  const tokens = useMemo(() => body.match(/\S+|\s+/g) || [], [body])

  const progress = useMemo(() => (-top / height) * 2, [top, height])

  const context = {
    tokens,
    progress,
  }

  return (
    <TextRevealContext.Provider value={context}>
      <Component ref={container} className={className} {...props}>
        {children(tokens, progress)}
      </Component>
    </TextRevealContext.Provider>
  )
}

function Token({ index, children }) {
  const context = useContext(TextRevealContext)

  const isActive = useMemo(() => index / context.tokens.length < context.progress, [index, context.progress])

  return <>{children(isActive)}</>
}

export const TextReveal = Object.assign(Root, { Token })
