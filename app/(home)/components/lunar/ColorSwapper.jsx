import clsx from "clsx"
import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react"
import { useWindowScroll } from "react-use"

const RootContext = createContext()
const GroupContext = createContext()

function Root({ as: Component = "div", children, className, ...props }) {
  const [active, setActive] = useState(0)
  const [items, setItems] = useState([])

  function addItem(index, item) {
    setItems((currentItems) => [...currentItems, item])
  }

  const context = {
    active,
    setActive,
    items,
    addItem,
  }

  return (
    <RootContext.Provider value={context}>
      <Component className={className} {...props}>
        {children}
      </Component>
    </RootContext.Provider>
  )
}

export function Group({ as: Component = "div", children, className, ...props }) {
  const container = useRef(null)

  const [childElements, setChildElements] = useState([])

  useEffect(() => {
    if (container.current) {
      setChildElements(Array.from(container.current.children))
    }
  }, [])

  const context = { peers: childElements }

  return (
    <GroupContext.Provider value={context}>
      <Component ref={container} className={className} {...props}>
        {children}
      </Component>
    </GroupContext.Provider>
  )
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect()

  return rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight)
}

function Block({ activeClass, as: Component = "div", children, className, ...props }) {
  const container = useRef(null)

  const groupContext = useContext(GroupContext)
  const rootContext = useContext(RootContext)

  const index = useMemo(() => {
    return groupContext.peers ? groupContext.peers.indexOf(container.current) : -1
  }, [groupContext.peers])

  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (index != -1 && !ready) {
      rootContext.addItem(index, activeClass)

      setReady(true)
    }
  }, [index])

  const { y: windowScroll } = useWindowScroll()

  useEffect(() => {
    const top = container.current.getBoundingClientRect().top
    const isVisible = isInViewport(container.current)

    if (isVisible && top <= 0) {
      rootContext.setActive(index)
    }
  }, [windowScroll])

  return (
    <Component ref={container} className={className} {...props}>
      {children}
    </Component>
  )
}

function Portal() {
  const context = useContext(RootContext)

  return (
    <>
      {context.items.map((item, index) => (
        <div
          key={index}
          className={clsx(
            item,
            index <= context.active ? "opacity-100" : "opacity-0",
            "pointer-events-none fixed inset-0 transition-opacity duration-300",
          )}></div>
      ))}
    </>
  )
}

export const ColorSwapper = Object.assign(Root, { Group, Block, Portal })
